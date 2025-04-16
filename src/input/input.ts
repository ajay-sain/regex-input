import './style.css';
import { InputOptions } from './model';

class MaskedInput extends HTMLInputElement {
    static value: string;
    constructor(options: Partial<InputOptions> = {
        placeholder: "Enter regex",
        className: "masked-input",
        onChange: (e: Event) => {console.log("onChange", e)},
        onKeyUp: (e: string) => {console.log("onKeyUp", e)},
        // validateInput: (value: string) => {return true}
    }) {
        super();
        this.type = "text";
        this.placeholder = options?.placeholder;
        this.classList.add(options?.className);
        this.value = "";
        this.addEventListener("change", options?.onChange);
        this.addEventListener("input", (e: KeyboardEvent) => {
            const target = e.target as HTMLInputElement;
            if (target.value.length > 0) {
                this.value = target.value;
                console.log("input", e);
            }
        }
        );
        this.addEventListener("paste", (e: ClipboardEvent) => {
            const target = e.target as HTMLInputElement;
            if (target.value.length > 0) {
                this.value = target.value;
                console.log("paste", this.value);
            }
        }
        );
        this.addEventListener("cut", (e: ClipboardEvent) => {
            const target = e.target as HTMLInputElement;
            if (target.value.length > 0) {
                this.value = target.value;
                console.log("cut", this.value);
            }
        }
        );
        this.addEventListener("copy", (e: ClipboardEvent) => {
            const target = e.target as HTMLInputElement;
            if (target.value.length > 0) {
                this.value = target.value;
                console.log("copy", this.value);
            }
        }
        );
    }
    connectedCallback(): void {
        console.log("connectedCallback", this.placeholder);
        // this.addEventListener("input", this.validateInput);
        // browser calls this method when the element is added to the document
        // (can be called many times if an element is repeatedly added/removed)
    }
    disconnectedCallback(): void {
        console.log("disconnectedCallback");
        // this.removeEventListener("input", this.validateInput);
        // browser calls this method when the element is removed from the document
        // (can be called many times if an element is repeatedly added/removed)
    }

    static get observedAttributes(){
        return [this.value];
    }

    

    // attributeChangedCallback(name, oldValue, newValue) {
    //     // called when one of attributes listed above is modified
    // }

    // adoptedCallback() {
    //     // called when the element is moved to a new document
    //     // (happens in document.adoptNode, very rarely used)
    // }

}

customElements.define("masked-input", MaskedInput, {
    extends: "input"
});

export default MaskedInput;