import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { IdentiteController } from "../identite.controller";
import { IdentiteService } from "../identite.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  codeLieuNaissance: "exampleCodeLieuNaissance",
  communeDeNaissance: "exampleCommuneDeNaissance",
  createdAt: new Date(),
  dateNaissance: new Date(),
  departementDeNaissance: "exampleDepartementDeNaissance",
  id: "exampleId",
  nomNaissance: "exampleNomNaissance",
  nomUsuel: "exampleNomUsuel",
  numeroInsee: "exampleNumeroInsee",
  paysDeNaissance: "examplePaysDeNaissance",
  premierPrenom: "examplePremierPrenom",
  prenoms: "examplePrenoms",
  prenomUsuel: "examplePrenomUsuel",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  codeLieuNaissance: "exampleCodeLieuNaissance",
  communeDeNaissance: "exampleCommuneDeNaissance",
  createdAt: new Date(),
  dateNaissance: new Date(),
  departementDeNaissance: "exampleDepartementDeNaissance",
  id: "exampleId",
  nomNaissance: "exampleNomNaissance",
  nomUsuel: "exampleNomUsuel",
  numeroInsee: "exampleNumeroInsee",
  paysDeNaissance: "examplePaysDeNaissance",
  premierPrenom: "examplePremierPrenom",
  prenoms: "examplePrenoms",
  prenomUsuel: "examplePrenomUsuel",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    codeLieuNaissance: "exampleCodeLieuNaissance",
    communeDeNaissance: "exampleCommuneDeNaissance",
    createdAt: new Date(),
    dateNaissance: new Date(),
    departementDeNaissance: "exampleDepartementDeNaissance",
    id: "exampleId",
    nomNaissance: "exampleNomNaissance",
    nomUsuel: "exampleNomUsuel",
    numeroInsee: "exampleNumeroInsee",
    paysDeNaissance: "examplePaysDeNaissance",
    premierPrenom: "examplePremierPrenom",
    prenoms: "examplePrenoms",
    prenomUsuel: "examplePrenomUsuel",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  codeLieuNaissance: "exampleCodeLieuNaissance",
  communeDeNaissance: "exampleCommuneDeNaissance",
  createdAt: new Date(),
  dateNaissance: new Date(),
  departementDeNaissance: "exampleDepartementDeNaissance",
  id: "exampleId",
  nomNaissance: "exampleNomNaissance",
  nomUsuel: "exampleNomUsuel",
  numeroInsee: "exampleNumeroInsee",
  paysDeNaissance: "examplePaysDeNaissance",
  premierPrenom: "examplePremierPrenom",
  prenoms: "examplePrenoms",
  prenomUsuel: "examplePrenomUsuel",
  updatedAt: new Date(),
};

const service = {
  createIdentite() {
    return CREATE_RESULT;
  },
  identites: () => FIND_MANY_RESULT,
  identite: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Identite", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: IdentiteService,
          useValue: service,
        },
      ],
      controllers: [IdentiteController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /identites", async () => {
    await request(app.getHttpServer())
      .post("/identites")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateNaissance: CREATE_RESULT.dateNaissance.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /identites", async () => {
    await request(app.getHttpServer())
      .get("/identites")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateNaissance: FIND_MANY_RESULT[0].dateNaissance.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /identites/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/identites"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /identites/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/identites"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateNaissance: FIND_ONE_RESULT.dateNaissance.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /identites existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/identites")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateNaissance: CREATE_RESULT.dateNaissance.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/identites")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
