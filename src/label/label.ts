
interface MaskedLabelOptions {
    innerText: string;
    className: string;
    id: string;
    key: string;
    rxp: RegExp;
    maskingLogic: (value: string) => string;
}

class MaskedLabel extends HTMLLabelElement{
    key: string;
    rxp: RegExp;

    constructor( props: Partial<MaskedLabelOptions> ){
        super();
        this.classList.add(props.className);
        this.id = props.id;
        this.key = props.key;
        this.rxp = props.rxp;
        this.innerText = props.maskingLogic(props.innerText);

    }
}

customElements.define("masked-label", MaskedLabel, {
    extends: "label"
});

export default MaskedLabel;