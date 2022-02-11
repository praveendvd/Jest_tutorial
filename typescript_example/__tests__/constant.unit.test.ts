import { describe, it, expect } from '@jest/globals';
import { questions }  from '../src/constant';

describe('Validate Constant.js', () => {

    it('Should return error message for the validate function if input is empty string', () => {
        expect(questions[0].validate('')).toBe("Please provided your name");
    })

    it('Should return true for the validate function if input is non empty string', () => {
        expect(questions[0].validate('1')).toBe(true);
    })
})