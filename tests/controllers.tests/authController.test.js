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
        //     expect(res.status).toBe(201)
        // })

        test("with a an email, username already used should respond with a 500 status code 🤔", async () => {
            const res =  await request(app)
                .post("/api/auth/register")
                .send({
                    email: "email",
                    username: "username",
                    password: "password"
                })
            expect(res.status).toBe(500)
        })
 
        test("wihtout a body should respond with a 400 status code 🤔", async () => {
            const res =  await request(app)
                .post("/api/auth/register")
                .send()
            expect(res.status).toBe(400)
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
            expect(res.status).toBe(200)
        })

        test("with a false username should respond with a 401 status code 🤔", async () => {
            const res =  await request(app)
                .post("/api/auth/login")
                .send({
                    username: "false username",
                    password: "password"
                })
            expect(res.status).toBe(401)
        })

        test("without a body should respond with a 400 status code 🤔", async () => {
            const res =  await request(app)
                .post("/api/auth/login")
                .send()
            expect(res.status).toBe(400)
        })

    })
    
})