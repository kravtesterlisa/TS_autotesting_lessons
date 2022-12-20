import superagent from "superagent";

const expextedObj: {
  id: number;
  token: string;
} = {
  id: 4,
  token: "QpwL5tke4Pnpja7X4",
};

const usersURL = "https://reqres.in/api/users/";
const unknownURL = "https://reqres.in/api/unknown";
const registerURL = "https://reqres.in/api/register";
const userTestURL = "https://reqres.in/api/users/2";

describe("API: GET request, check status code", () => {
  test("1 test: status code (200) check for ./users page", async () => {
    try {
      const newResult = await superagent.get(usersURL).query({ id: 2 });
      console.log(newResult.body);
      expect(newResult.status).toBe(200);
    } catch (error: any) {
      expect(error.message).toBe("");
    }
  });
  test("2 test: status code (404) check for single user", async () => {
    try {
      const newResult = await superagent.get(usersURL).query({ id: 23 });
      expect(newResult.status).toBe(404);
    } catch (error: any) {
      expect(error.message).toBe("Not Found");
    }
  });
  test("3 test: status code (200) check for LIST <RESOURCE>", async () => {
    try {
      const newResult = await superagent
        .get(unknownURL)
        .query({ page: 1, per_page: 6, id: 1 });
      expect(newResult.status).toBe(200);
    } catch (error: any) {
      expect(error.message).toBe("Not Found");
    }
  });
  test("4 test: status code (404) check for SINGLE <RESOURCE>", async () => {
    try {
      const newResult = await superagent.get(unknownURL).query({ id: 23 });
      expect(newResult.status).toBe(404);
    } catch (error: any) {
      expect(error.message).toBe("Not Found");
    }
  });
});

describe("API: POST request, check status code", () => {
  test("1 test: create new user", async () => {
    const newResult = await superagent
      .post(usersURL)
      .set("Content-Type", "application/json")
      .send({ name: "morpheus", job: "leader" });
    expect(newResult.status).toBe(201);
    //console.log(newResult.text);
  });
  test("2 test: REGISTER - SUCCESSFUL", async () => {
    const newRegister: { email: string; password: string } = {
      email: "eve.holt@reqres.in",
      password: "pistol",
    };
    const newResult = await superagent
      .post(registerURL)
      .set("Content-Type", "application/json")
      .send({ email: "eve.holt@reqres.in", password: "pistol" });
    //console.log(newResult.body);
    expect(newResult.body).toMatchObject(expextedObj);
  });
  test("3 test: REGISTER - UNSUCCESSFUL, missing password", async () => {
    try {
      const newResult = await superagent
        .post(registerURL)
        .set("Content-Type", "application/json")
        .send({ email: "sydney@fife", password: "" });
      console.log(newResult);
      expect(newResult.body).toContain({ error: "Missing password" });
    } catch (error: any) {
      expect(error.status).toBe(400);
    }
  });
});

describe("API: PUT request, check status code", () => {
  test("1 test: UPDATE user values with code (200) ", async () => {
    const newResult = await superagent
      .put(userTestURL)
      .set("Content-Type", "application/json")
      .send({ name: "morpheus", job: "zion resident" });
    expect(newResult.status).toBe(200);
    //console.log(newResult.body);
  });
});

describe("API: DELETE request, check status code", () => {
  test("1 test: DELETE user values with code (204) ", async () => {
    const newResult = await superagent
      .delete(userTestURL)
      .set("Content-Type", "application/json");
    expect(newResult.status).toBe(204);
    //console.log(newResult.body);
  });
});

describe("API: PUTCH request, check status code", () => {
  test("1 test: UPDATE user values with code (200) ", async () => {
    const newResult = await superagent
      .put(userTestURL)
      .set("Content-Type", "application/json")
      .send({ name: "morpheus", job: "zion resident" });
    expect(newResult.status).toBe(200);
    //console.log(newResult.body);
  });
});

afterAll(async () => {
  await superagent
    .delete(userTestURL)
    .send({ name: "morpheus", job: "leader" })
    .set("Content-Type", "application/json")
    .end();
});
