

export class InputController {
    private input: string;
    private regex: string;

    constructor(input: string, regex: string) {
        this.input = input;
        this.regex = regex;
    }

    validateInput(): boolean {
        // Check if the input is a valid regex
        try {
            new RegExp(this.regex);
            return true;
        } catch (e) {
            return false;
        }
    }

    isEmpty(): boolean {
        // Check if the input is empty
        return this.input.trim() === '';
    }

    isNotEmpty(): boolean {
        // Check if the input is not empty
        return this.input.trim() !== '';
    }

    isValidRegex(input: string): boolean {
        // Check if the input is a valid regex
        try {
            new RegExp(input);
            return true;
        } catch (e) {
            return false;
        }
    }
}
