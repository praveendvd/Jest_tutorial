const { jest, describe, beforeEach, it, expect, beforeAll, afterAll } = require('@jest/globals');

describe('Validate Index.js', () => {

    beforeAll(() => {
        // dont use console.log anywhere else in test, as that will also be spyed
        jest.spyOn(console, 'log')
        jest.spyOn(console, 'error')
        jest.spyOn(process, 'exit').mockImplementation((cal) => { });
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

    it('Should print name correctly when n is provided', async () => {
        restArgs({ n: 'yourname', i: undefined });
        require('../index');
        expect(console.log).toHaveBeenCalledWith("Hello, yourname!");
        expect(console.log).toHaveBeenCalledTimes(1);
    })

    it('Should exit with error message if -n and -l not provided', async () => {
        restArgs({ n: undefined, i: undefined });
        require('../index')
        expect(process.exit).toHaveBeenCalledWith(1);
        //this will create a object with calls to error (a snapshot) automatically. from next time it will validate the error is same as before
        expect(console.error).toMatchSnapshot();
    })

    it('Should call catch if inquirer throws some error', async () => {
        let inquirerMock = jest.mock('inquirer', () => {
            return {
                ...jest.requireActual('inquirer'),
                prompt: jest.fn().mockImplementationOnce(async function () { throw new Error('Catch error') })
            }
        });
        restArgs({ n: "yourname", i: true });
        require('../index')
        await expect(await jest.requireMock('inquirer').prompt).toHaveBeenCalled();
        expect(process.exit).not.toHaveBeenCalled();
        expect(console.log).not.toHaveBeenCalled();
        expect(console.error).toHaveBeenCalledWith(Error('Catch error'));
        inquirerMock.resetAllMocks()
    })

    it('Should call inquirer if -i is provided', async () => {
        let inquirerMock = jest.mock('inquirer', () => {
            return {
                ...jest.requireActual('inquirer'),
                prompt: jest.fn().mockImplementationOnce(async function () { return { name: 'yourname', n: 'yourname' } })
            }
        });
        restArgs({ n: "yourname", i: true });
        require('../index')
        expect(jest.requireMock('inquirer').prompt).toHaveBeenCalled();
        expect(process.exit).not.toHaveBeenCalled();
        expect(console.log).not.toHaveBeenCalled();
    })

})


//process.argv contains all arguments passed , we are modifying it to pass the arguments we want to test
function restArgs({ n, i }) {
    while (process.argv.length > 2) {
        process.argv.pop();
    }
    if (n) process.argv.push('-n', n);
    if (i) process.argv.push('-i', i);
}

