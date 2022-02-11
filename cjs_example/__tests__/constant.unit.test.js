const { describe, it, expect } = require('@jest/globals');
const { questions } = require('../src/constant');

describe('Validate Constant.js', () => {

    it('Should return error message for the validate function if input is empty string', () => {
        expect(questions[0].validate('')).toBe("Please provided your name");
    })

    it('Should return true for the validate function if input is non empty string', () => {
        expect(questions[0].validate('1')).toBe(true);
    })
})