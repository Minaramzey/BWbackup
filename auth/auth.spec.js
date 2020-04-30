const request = require('supertest');
const server = require('../api/server');
const db = require('../data/dbConfig');



describe("POST auth/login", () => {
    it("should return a status of 200", async () => {
        const res = await request(server).post("/auth/login").send({
            username: "mark123",
            password: "mark123",
            role: "instructor"
        });
        expect(res.status).toBe(201);
      })
    })

describe('Errors POST to register', () => {
    it('Invalid body', async done => {
        const res = await request(server)
            .post('/auth/register')
            .send({
                username: '',
                email: '',
                password: '',
                roles: []
            })
        expect(res.status).toBe(401);
        done();
    })
})


describe('Errors POST to login', () => {
    it('Missing fields', async done => {
        const res = await request(server)
            .post('/auth/login')
            .send({
                username: '',
                password: '',
                role: ''
            });
        expect(res.status).toBe(401);
        expect(res.body.message).toBe('A field is missing');
        done();
    })
})