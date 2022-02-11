// Validate where a name was passed in, else ask the user for a name.
function validate(answer: string, message: string) {
    if (answer.length < 1) {
        return message;
    }
    return true;
}

export const questions = [
    {
        name: 'name',
        message: 'Please provided your name',
        type: 'string',
        suffix: ' [Example: "user"]',
        validate: (answer: string) => validate(answer, "Please provided your name")
    }
]

