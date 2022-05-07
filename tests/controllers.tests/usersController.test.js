const request = require('supertest');
const app = require('../../index')

describe("PUT users", () => {

    
    describe("given an id and a body", () => {
       
        test("should respond with a 200 status code", async () => {
            const res =  await request(app)
                .put("/users")
                .send({
                    email: "email",
                    username: "username",
                    password: "password"
                })
            expect(response.statusCode).toBe(200)
        })

        test("should specify json in the content type header", async () => {
            const res =  await request(app)
                .put("/api/users")
                .send({
                    email: "email",
                    username: "username",
                    password: "password"
                })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })

        test("should respond has updated user", async () => {
            const res =  await request(app)
                .put("/api/users")
                .send({
                    email: "email",
                    username: "username",
                    password: "password"
                })
            expect(response.body).toBeDefined()
        })
    })



    describe("When the id and the body is missing", () => {

        test("Body missing should respond with a 500 status code", async () => {
            const res =  await request(app)
                .put("/api/users")
                .send()
            expect(response.statusCode).toBe(500)
        })

        test("Id missing should respond with a 500 status code", async () => {
            const res =  await request(app)
                .put("/api/users")
                .send({
                    email: "email",
                    username: "username",
                    password: "password"
                })
            expect(response.statusCode).toBe(500)
        })
    })


})