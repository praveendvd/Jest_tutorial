// Validate where a name was passed in, else ask the user for a name.
function validate(answer, message) {
    if (answer.length < 1) {
        return message;
    }
    return true;
}

// same as exports.question = question , we are exporting the array directly;
exports.questions = [
    {
        name: 'name',
        message: 'Please provided your name',
        type: 'string',
        suffix: ' [Example: "user"]',
        validate: (answer) => validate(answer, "Please provided your name")
    }
]

