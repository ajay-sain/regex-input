import EventHandler from "./event-handler";

class InputEvents extends EventHandler {
    constructor() {
        super();
    }
    public onInput(handler: (event: KeyboardEvent) => void): void {
        this.on("input", handler);
    }
    public onChange(handler: (event: KeyboardEvent) => void): void {
        this.on("change", handler);
    }
    public onKeyUp(handler: (event: KeyboardEvent) => void): void {
        this.on("keyup", handler);
    }
    public onKeyDown(handler: (event: KeyboardEvent) => void): void {
        this.on("keydown", handler);
    }
    public onKeyPress(handler: (event: KeyboardEvent) => void): void {
        this.on("keypress", handler);
    }
    public onFocus(handler: (event: KeyboardEvent) => void): void {
        this.on("focus", handler);
    }
}
export default InputEvents;
export { InputEvents }; 