const request = require('supertest');
const app = require('../../src/services/server.service')

jest.useRealTimers();

describe("POST user", () => {

    describe("register", () => {

        test("with a body should respond with a 200 status code", async () => {
            const res =  await request(app)
                .post("/api/auth/register")
                .send({
                    email: "email",
                    username: "username",
                    password: "password"
                })
            expect(res.statusCode).toBe(200)
        })
 
        test("wihtout a body should respond with a 400 status code", async () => {
            const res =  await request(app)
                .post("/api/auth/register")
                .send()
            expect(res.statusCode).toBe(400)
        })

    })

    describe("login", () => {

        test("with a body should respond with a 200 status code", async () => {
            const res =  await request(app)
                .post("/api/auth/login")
                .send({
                    username: "username",
                    password: "password"
                })
            expect(res.statusCode).toBe(200)
        })

        test("without a body should respond with a 400 status code", async () => {
            const res =  await request(app)
                .post("/api/auth/login")
                .send()
            expect(res.statusCode).toBe(400)
        })
        
    })

    
})