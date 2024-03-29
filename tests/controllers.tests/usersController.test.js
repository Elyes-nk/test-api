const request = require('supertest');
const app = require('../../index')

const id = "62793d898f0cce2da5d4fef6"
const false_id = "123456789"

describe("PUT /users 🔧", () => {

    test("with id and body should respond with a 200 status code 🤔", async () => {
        const res =  await request(app)
            .put(`/api/users/${id}`)
            .send({
                email: "email",
                username: "username",
                password: "password"
            })
        expect(res.status).toBe(200)
    })

    test("with id and body should respond with updated user 🤔", async () => {
        const res =  await request(app)
            .put(`/api/users/${id}`)
            .send({
                email: "email",
                username: "username",
                password: "password"
            })
        const json = JSON.parse(res.text)
        expect(json.username).toBeDefined()
        expect(json.email).toBeDefined()
    })

    test("with a false id should respond with a 500 status code 🤔", async () => {
        const res =  await request(app)
            .put(`/api/users/${false_id}`)
            .send({
                email: "email",
                username: "username",
                password: "password"
            })
        expect(res.status).toBe(500)
    })

    test("without id and with body should respond with a 404 status code 🤔", async () => {
        const res =  await request(app)
            .put("/api/users")
            .send({
                email: "email",
                username: "username",
                password: "password"
            })
        expect(res.status).toBe(404)
    })

    test("with id and without body should respond with a 400 status code 🤔", async () => {
        const res =  await request(app)
            .put(`/api/users/${id}`)
            .send()
        expect(res.status).toBe(400)
    })

})

describe("DELETE user 🗑", () => {

    test("with id should respond with a 200 status code 🤔", async () => {
        const res =  await request(app)
            .delete(`/api/users/${id}`)
        expect(res.status).toBe(200)
    })

    test("with a false id should respond with a 500 status code 🤔", async () => {
        const res =  await request(app)
            .delete(`/api/users/${false_id}`)
        expect(res.status).toBe(500)
    })

    test("whitout id should respond with a 404 status code 🤔", async () => {
        const res =  await request(app)
            .delete("/api/users")
        expect(res.status).toBe(404)
    })

})

describe("GET user 📲", () => {

    test("with id should respond with a 200 status code 🤔", async () => {
        const res =  await request(app)
            .get(`/api/users/find/${id}`)
        const json = JSON.parse(res.text)
        expect(json.username).toBeDefined()
        expect(json.email).toBeDefined()
    })

    test("with a false id should respond with a 500 status code 🤔", async () => {
        const res =  await request(app)
            .get(`/api/users/find/${false_id}`)
        expect(res.status).toBe(500)
    })

    test("without id should respond with a 404 status code 🤔", async () => {
        const res =  await request(app)
            .get("/api/users/find")
        expect(res.status).toBe(404)
    })

})


describe("GET users 📲", () => {

    test("should respond with a 200 status code 🤔", async () => {
        const res =  await request(app)
            .get("/api/users")
        expect(res.status).toBe(200)
        expect(res.body).toBeDefined()
    })
    
})
