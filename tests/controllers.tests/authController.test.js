const request = require('supertest');
const app = require('../../index')


describe("POST user 📤", () => {

    describe("REGISTER 📝", () => {

        // test("with a body should respond with a 201 status code 🤔", async () => {
        //     const res =  await request(app)
        //         .post("/api/auth/register")
        //         .send({
        //             email: "test",
        //             username: "test",
        //             password: "test"
        //         })
        //     expect(res.statusCode).toBe(201)
        // })
 
        test("wihtout a body should respond with a 400 status code 🤔", async () => {
            const res =  await request(app)
                .post("/api/auth/register")
                .send()
            expect(res.statusCode).toBe(400)
        })

    })

    describe("LOGIN 🌍", () => {

        test("with a body should respond with a 200 status code 🤔", async () => {
            const res =  await request(app)
                .post("/api/auth/login")
                .send({
                    username: "username",
                    password: "password"
                })
            expect(res.statusCode).toBe(200)
        })

        test("without a body should respond with a 400 status code 🤔", async () => {
            const res =  await request(app)
                .post("/api/auth/login")
                .send()
            expect(res.statusCode).toBe(400)
        })

    })
    
})