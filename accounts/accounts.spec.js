const request = require('supertest');
const server = require('../api/server');
const db = require('../data/dbConfig');
const generateToken = require('../utils/generateToken');

describe('200 GET to classes attending', () => {
    it('200 Status', async done => {
        const token = generateToken({
            id: 1
        });
        expect(token).toBeDefined();
        const res = await request(server)
            .get('classes/1/classesAttending')
            .set({
                Authorization: token
            })
        expect(res.status).toBe(200);
        done();
    });
});