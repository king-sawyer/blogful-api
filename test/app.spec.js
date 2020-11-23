
const app = require('../src/app')

describe('App', ()=> {
    it('GET / reponds with 200 and all the articles', () => {
        return supertest(app)
         .get("/")
        .expect(200)
    });
});