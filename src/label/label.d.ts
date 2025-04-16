interface MaskedLabelOptions {
    innerText: string;
    className: string;
    id: string;
    key: string;
    rxp: RegExp;
}
declare class MaskedLabel extends HTMLLabelElement {
    key: string;
    rxp: RegExp;
    constructor(props: Partial<MaskedLabelOptions>);
}
export default MaskedLabel;
