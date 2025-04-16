interface InputOptions {
    placeholder: string;
    className: string;
    rxp: RegExp;
    validateInput: (value: string) => boolean;
    validateRegex: (value: string) => boolean;
    onChange: (value: Event) => void;
    onKeyUp: (value: string) => void;
}
export { InputOptions };
