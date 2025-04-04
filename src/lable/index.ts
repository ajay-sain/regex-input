import './style.css';

function Label(value:string) {
    const element = document.createElement('label');
    element.innerHTML = value;
    return element;
}

export default Label;