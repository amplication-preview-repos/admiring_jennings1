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
import { UtilisateurController } from "../utilisateur.controller";
import { UtilisateurService } from "../utilisateur.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  civilite: "exampleCivilite",
  createdAt: new Date(),
  dateActivation: new Date(),
  dateDesactivation: new Date(),
  email: "exampleEmail",
  id: "exampleId",
  mssEmail: "exampleMssEmail",
  nom: "exampleNom",
  password: "examplePassword",
  prenom: "examplePrenom",
  updatedAt: new Date(),
  username: "exampleUsername",
};
const CREATE_RESULT = {
  civilite: "exampleCivilite",
  createdAt: new Date(),
  dateActivation: new Date(),
  dateDesactivation: new Date(),
  email: "exampleEmail",
  id: "exampleId",
  mssEmail: "exampleMssEmail",
  nom: "exampleNom",
  password: "examplePassword",
  prenom: "examplePrenom",
  updatedAt: new Date(),
  username: "exampleUsername",
};
const FIND_MANY_RESULT = [
  {
    civilite: "exampleCivilite",
    createdAt: new Date(),
    dateActivation: new Date(),
    dateDesactivation: new Date(),
    email: "exampleEmail",
    id: "exampleId",
    mssEmail: "exampleMssEmail",
    nom: "exampleNom",
    password: "examplePassword",
    prenom: "examplePrenom",
    updatedAt: new Date(),
    username: "exampleUsername",
  },
];
const FIND_ONE_RESULT = {
  civilite: "exampleCivilite",
  createdAt: new Date(),
  dateActivation: new Date(),
  dateDesactivation: new Date(),
  email: "exampleEmail",
  id: "exampleId",
  mssEmail: "exampleMssEmail",
  nom: "exampleNom",
  password: "examplePassword",
  prenom: "examplePrenom",
  updatedAt: new Date(),
  username: "exampleUsername",
};

const service = {
  createUtilisateur() {
    return CREATE_RESULT;
  },
  utilisateurs: () => FIND_MANY_RESULT,
  utilisateur: ({ where }: { where: { id: string } }) => {
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

describe("Utilisateur", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UtilisateurService,
          useValue: service,
        },
      ],
      controllers: [UtilisateurController],
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

  test("POST /utilisateurs", async () => {
    await request(app.getHttpServer())
      .post("/utilisateurs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateActivation: CREATE_RESULT.dateActivation.toISOString(),
        dateDesactivation: CREATE_RESULT.dateDesactivation.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /utilisateurs", async () => {
    await request(app.getHttpServer())
      .get("/utilisateurs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateActivation: FIND_MANY_RESULT[0].dateActivation.toISOString(),
          dateDesactivation:
            FIND_MANY_RESULT[0].dateDesactivation.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /utilisateurs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/utilisateurs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /utilisateurs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/utilisateurs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateActivation: FIND_ONE_RESULT.dateActivation.toISOString(),
        dateDesactivation: FIND_ONE_RESULT.dateDesactivation.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /utilisateurs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/utilisateurs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateActivation: CREATE_RESULT.dateActivation.toISOString(),
        dateDesactivation: CREATE_RESULT.dateDesactivation.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/utilisateurs")
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
