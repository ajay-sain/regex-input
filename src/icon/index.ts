import './style.css';

function Icon(value:string) {
    const element = document.createElementNS("http://www.w3.org/2000/svg",'svg');
    // element. = value;
    return element;
}

export default Icon;