import { MaskedInput, MaskedLabel } from "../src/index";

const rxp = new RegExp(/^.{4}(.*).{4}$/, "g");
function change(e: InputEvent): void {
    console.log("change",e);
}
const label = document.createElement("masked-label");
    label.setAttribute("innerText", "masked-label");
    label.classList.add("masked-label");

document.body.appendChild(new MaskedInput({placeholder: "Enter regex", className: "masked-input",onChange: change}));
document.body.appendChild(document.createElement("hr"));
document.body.appendChild(new MaskedInput({placeholder: "Test regex", className: "masked-input", rxp: rxp, onChange: change}));
document.body.appendChild(document.createElement("hr"));
document.body.appendChild(new MaskedLabel({innerText: "Test regex for the real user", className: "masked-label", rxp: rxp,}));
document.body.appendChild(document.createElement("hr"));
// document.body.appendChild(label);