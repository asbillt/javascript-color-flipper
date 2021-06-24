// Create header and button elements
const div = document.createElement("div");
const header = document.createElement("h1");
const button = document.createElement("button");

// Function to generate random hex color
const color = () => {
    let c = (Math.random() * 1000000 * 0xfffff).toString(16);
    return '#' + c.slice(0, 6);
};

// Set the innerHTML for h1 and button
header.innerHTML = `
    Background Color: ${color()}
`;
button.innerHTML = "Set Color";

// Append div to body element
document.body.insertAdjacentElement('afterbegin', div);

// Target the div and header
const main = document.querySelector("div");

// Append header and button to div
main.append(header);
main.append(button);

// Target the body element to set initial background color
const backgroundColor = document.querySelector("body");
backgroundColor.style.backgroundColor = color();

// Create event for calling color when button is clicked
button.addEventListener('click', () => {
    let newHeader = document.querySelector("h1");
    newHeader.innerHTML = `Background Color: ${color()}`;
    let newBackgroundColor = document.querySelector("body");
    newBackgroundColor.style.backgroundColor = color();
})

// Event for mousing over button
button.addEventListener('mouseover', () => {
    let mouseOver = document.querySelector("button");
    mouseOver.style.cursor = 'pointer';
    mouseOver.style.backgroundColor = 'black';
    mouseOver.style.color = 'white';
    mouseOver.style.transition = '.5s';
})

// Event for mousing out of button
button.addEventListener('mouseout', () => {
    let mouseOut = document.querySelector("button");
    mouseOut.style.backgroundColor = 'transparent';
    mouseOut.style.color = 'black';
})