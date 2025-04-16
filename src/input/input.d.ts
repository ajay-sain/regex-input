import './style.css';
import { InputOptions } from './model';
declare class MaskedInput extends HTMLInputElement {
    static value: string;
    constructor(options?: Partial<InputOptions>);
    connectedCallback(): void;
    disconnectedCallback(): void;
    static get observedAttributes(): string[];
}
export default MaskedInput;
