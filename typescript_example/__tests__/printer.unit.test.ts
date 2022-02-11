import { jest, describe, it, expect, beforeEach, afterAll, beforeAll } from '@jest/globals';
import { print } from '../src/printer';

describe('Validate printer.js', () => {

    // Add spyon/mocks in beforeall so that you know exactly what is being mocked and avoids confusion
    beforeAll(() => {
        jest.spyOn(console, 'log')
    })

    //clear the mocks and modules after each test, so that previous call history are removed
    beforeEach(() => {
        jest.clearAllMocks()
        jest.resetModules()
    })

    //make sure you dont accidently pass mocks to other tests
    afterAll(() => {
        jest.restoreAllMocks()
    })

    it('should print the given input', () => {
        print('yourname')
        expect(console.log).toHaveBeenCalledWith('Hello, yourname!')
    })
})