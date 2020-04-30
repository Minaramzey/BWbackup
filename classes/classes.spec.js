const request = require('supertest');
const server = require('../api/server');
const db = require('../data/dbConfig');
const generateToken = require('../utils/generateToken');




describe('200 GET to classes', () => {
    it('200 Status', async done => {
        const token = generateToken({
            id: 1
        });
        expect(token).toBeDefined();
        const res = await request(server)
            .get('/classes')
            .set({
                Authorization: token
            })
        expect(res.status).toBe(200);
        done();
    })
})


    it('Class successfully created', async done => {
        const token = generateToken({
            id: 1
        });
        expect(token).toBeDefined();

        const res = await request(server)
            .post('/classes')
            .set({
                Authorization: token
            })
            .send( {
                name: "Hot Yoga 3",
                time: "2020-11-7 9AM",
                duration: 1.5,
                intensity: "expert",
                location: "New Jersey",
                maxSize: 16,
                classType: 1,
                imgUrl: 1,
                equipmentRequired: "Yoga Mat",
                arrivalDescription: "Sign in at the front desk and go through the first door on the right.",
                additionalInfo: null,
                cost: 23.56,
                courseDescription: "Intense yoga session",
                address: "706 Hart Dr. Pompton Lakes, NJ 07442",
                startDate: "01-01-2020",
                instructor: 1,
                days: ["Monday", "Tuesday"]
            })

        expect(res.status).toBe(201)
        expect(res.body.message).toBe('Class successfully created');
        done();
    })


describe("GET to classes/:id", function() {

        it('201 status', async () => {
            const token = generateToken({
                id: 1
            });

        const res = await request(server)
            .get('/classes/1')
            .set({
                Authorization: token
            })
    })
        expect(res.status).toBe(200);
        done();
    });
  


describe("PUT to classes/:id", function() {
    it('200 status', async done => {
        const token = generateToken({
            id: 1
        });
        expect(token).toBeDefined();

        const res = await request(server)
            .put('/classes/1')
            .set({
                Authorization: token
            })
            .send({
                name: "Hot YoYo"
            })

        expect(res.status).toBe(200);
        done();
    });
  });


  
    it('200 GET to class attendees', async done => {
        const token = generateToken({
            id: 1
        });
        expect(token).toBeDefined();

        const res = await request(server)
            .get('/classes/1/attendees')
            .set({
                Authorization: token
            })
        expect(res.status).toBe(200);
        done();
    })



