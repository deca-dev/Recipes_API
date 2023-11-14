const {it, describe} = require('mocha')
const {assert} = require('chai');
const { getAllUsers } = require('../src/users/users.controllers');

const sum = (a,b) => a+b;

describe('Test of sum function', ()=> {
    it('Should return 12 when 8 & 4', (done)=> {
        const response = sum(8,4)
        assert.equal(response, 12)
        done()
    })

    it('Should return 5 when 2 & 3', (done) => {
        const response = sum(2,3)
        assert.equal(response, 5)
        done()
    })
})

describe('Test of user controllers', () => {
    it('Should return all users', async (done) => {
        try {
            const data = await getAllUsers()
            assert.typeOf(data, 'array')
            done()
        } catch {
            console.log(error)
        }
    })
})