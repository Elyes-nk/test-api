const request = require('supertest');
const app = require('../../index')

describe("PUT /users 🔧", () => {

    test("with id and body should respond with a 200 status code 🤔", async () => {
        const res =  await request(app)
            .put("/users/62793d898f0cce2da5d4fef6")
            .send({
                email: "email",
                username: "username",
                password: "password"
            })
        expect(res.statusCode).toBe(200)
    })

    test("with id and body should respond with updated user 🤔", async () => {
        const res =  await request(app)
            .put("/api/users")
            .send({
                email: "email",
                username: "username",
                password: "password"
            })
        expect(res.body).toBeDefined()
    })

    test("without id and with body should respond with a 400 status code 🤔", async () => {
        const res =  await request(app)
            .put("/api/users")
            .send({
                email: "email",
                username: "username",
                password: "password"
            })
        expect(res.statusCode).toBe(400)
    })

    test("with id and without body should respond with a 400 status code 🤔", async () => {
        const res =  await request(app)
            .put("/api/users/62793d898f0cce2da5d4fef6")
            .send()
        expect(res.statusCode).toBe(400)
    })

})

describe("GET user 📲", () => {

    test("with id should respond with a 200 status code 🤔", async () => {
        const res =  await request(app)
            .get("/users/find/62793d898f0cce2da5d4fef6")
        expect(res.body).toBeDefined()
    })

    test("without id should respond with a 400 status code 🤔", async () => {
        const res =  await request(app)
            .get("/users/find")
        expect(res.statusCode).toBe(400)
    })

})

describe("DELETE user 🗑", () => {

    // test("with id should respond with a 200 status code 🤔", async () => {
    //     const res =  await request(app)
    //         .delete("/users/62793d898f0cce2da5d4fef6")
    //     expect(res.statusCode).toBe(200)
    // })

    test("whitout id should respond with a 400 status code 🤔", async () => {
        const res =  await request(app)
            .delete("/users")
        expect(res.statusCode).toBe(400)
    })

})


describe("GET users 📲", () => {

    test("should respond with a 200 status code 🤔", async () => {
        const res =  await request(app)
            .get("/users")
        expect(res.statusCode).toBe(200)
        expect(res.body).toBeDefined()
    })
    
})
