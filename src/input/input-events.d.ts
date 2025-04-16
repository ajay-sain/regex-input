import EventHandler from "./event-handler";
declare class InputEvents extends EventHandler {
    constructor();
    onInput(handler: (event: KeyboardEvent) => void): void;
    onChange(handler: (event: KeyboardEvent) => void): void;
    onKeyUp(handler: (event: KeyboardEvent) => void): void;
    onKeyDown(handler: (event: KeyboardEvent) => void): void;
    onKeyPress(handler: (event: KeyboardEvent) => void): void;
    onFocus(handler: (event: KeyboardEvent) => void): void;
}
export default InputEvents;
export { InputEvents };
