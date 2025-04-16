
interface MaskedLabelOptions {
    innerText: string;
    className: string;
    id: string;
    key: string;
    rxp: RegExp;
}

class MaskedLabel extends HTMLLabelElement{
    key: string;
    rxp: RegExp;

    constructor( props: Partial<MaskedLabelOptions> ){
        super();
        
        this.innerText = props.innerText.replaceAll(props.rxp, '*')
        // console.log(props.rxp.exec(props.innerText).map((item: string) => {
        //     return item.replace(props.rxp, '*');
        // }));
        this.classList.add(props.className);
        this.id = props.id;
        this.key = props.key;
        this.rxp = props.rxp;
        console.log(props.innerText.replaceAll(props.rxp, '*'));
        
        // this.innerText = props.rxp.exec(props.innerText).reduce((acc: string, item: string) => {
        //     return acc + item.replace(props.rxp, '*');
        // }, '');
        // this.innerText = props.rxp.exec(props.innerText).map((item: string) => {
        //     return item.replace(props.rxp, '*');
        // }).join('');
    }

}

customElements.define("masked-label", MaskedLabel, {
    extends: "label"
});

export default MaskedLabel;