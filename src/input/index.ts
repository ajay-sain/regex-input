// import HTMLInputElement from 'htm/l-input-element';
import './style.css';
import { stringToHtml } from '../util';
import { InputController } from './input.controller';

export function RegexInput(regex: string = '/.*/') {
    const element = document.createElement('input');
    const label = stringToHtml(`<label for="regex-input">Regex Input</label>`);
    const description = stringToHtml(`<p id="regex-input-description">Enter a regex pattern</p>`);
    const help = stringToHtml(`<p id="regex-input-help">This is a regex input</p>`);
    const error = stringToHtml(`<p id="regex-input-error">Invalid regex</p>`);
    const warning = stringToHtml(`<p id="regex-input-warning">Warning: This regex may not work as expected</p>`);
    const info = stringToHtml(`<p id="regex-input-info">Info: This regex is for demonstration purposes only</p>`);
    const success = stringToHtml(`<p id="regex-input-success">Success: This regex is valid</p>`);
    const controls = stringToHtml(`<div id="regex-input-controls"></div>`);
    const active = stringToHtml(`<div id="regex-input-active"></div>`);
    const owns = stringToHtml(`<div id="regex-input-owns"></div>`);
    const labelElement = stringToHtml(`<label id="regex-input-label" for="regex-input">Regex Input</label>`);
    const descriptionElement = stringToHtml(`<p id="regex-input-description">Enter a regex pattern</p>`);
    const helpElement = stringToHtml(`<p id="regex-input-help">This is a regex input</p>`);
    element.setAttribute('type', 'text');
    element.setAttribute('placeholder', 'Test your regex here');
    element.setAttribute('class', 'regex-input');
    element.setAttribute('id', 'regex-input');
    element.setAttribute('name', 'regex-input');
    element.setAttribute('title', 'Enter a regex pattern');
    return element;
}

export class RegexInput1 extends InputController {
    constructor(options: Partial<RegexInput1> = {}) {
        super(options);
        this.regex = options.regex || '/.*/';
        this.error = options.error || 'Invalid regex';
        this.warning = options.warning || 'Warning: This regex may not work as expected';
        this.info = options.info || 'Info: This regex is for demonstration purposes only';
        this.success = options.success || 'Success: This regex is valid';
        this.label = options.label || 'Regex Input';
        this.description = options.description || 'Enter a regex pattern';
        this.placeholder = options.placeholder || 'Enter your regex here';
        this.required = options.required !== undefined ? options.required : true;
        this.disabled = options.disabled !== undefined ? options.disabled : false;
        this.readonly = options.readonly !== undefined ? options.readonly : false;
        this.autocomplete = options.autocomplete || 'off';
        this.autofocus = options.autofocus !== undefined ? options.autofocus : false;
        this.maxLength = options.maxLength || 255;
        this.minLength = options.minLength || 0;
        this.pattern = options.pattern || '';
        this.size = options.size || 20;
        this.step = options.step || 1;
        this.value = options.value || '';
        this.name = options.name || 'regex-input';
        this.id = options.id || 'regex-input';
        this.className = options.className || 'regex-input';
    }
}
// function RegexInput(options: Partial<RegexInput> = {}): HTMLInputElement {
//     const {
//         regex = '/.*/',
//         error = 'Invalid regex',
//         warning = 'Warning: This regex may not work as expected',
//         info = 'Info: This regex is for demonstration purposes only',
//         success = 'Success: This regex is valid',
//         label = 'Regex Input',
//         description = 'Enter a regex pattern',
//         placeholder = 'Enter your regex here',
//         required = true,


// function RegexInput1(regex: string = '/.*/') {
//     const element = document.createElement('input');
//     element.setAttribute('type', 'text');
//     element.setAttribute('placeholder', 'Enter your regex here');
//     element.setAttribute('class', 'regex-input');
//     element.setAttribute('id', 'regex-input');
//     element.setAttribute('name', 'regex-input');
//     element.setAttribute('title', 'Enter a regex pattern');
//     element.setAttribute('aria-label', 'Regex Input');
//     element.setAttribute('aria-describedby', 'regex-input-help');
//     element.setAttribute('aria-required', 'true');
//     element.setAttribute('aria-invalid', 'false');
//     element.setAttribute('aria-errormessage', 'regex-input-error');
//     element.setAttribute('aria-controls', 'regex-input-controls');
//     element.setAttribute('aria-autocomplete', 'list');
//     element.setAttribute('aria-activedescendant', 'regex-input-active');
//     element.setAttribute('aria-haspopup', 'true');
//     element.setAttribute('aria-expanded', 'false');
//     element.setAttribute('aria-owns', 'regex-input-owns');
//     element.setAttribute('aria-labelledby', 'regex-input-label');
//     element.setAttribute('aria-describedby', 'regex-input-description');
//     element.setAttribute('aria-live', 'polite');
//     element.setAttribute('aria-relevant', 'all');
//     element.setAttribute('aria-busy', 'false');
//     element.setAttribute('aria-atomic', 'false');
//     element.setAttribute('aria-live', 'assertive');
//     element.setAttribute('aria-relevant', 'additions removals');
//     element.setAttribute('aria-atomic', 'true');
//     return element;
// }

export default RegexInput;