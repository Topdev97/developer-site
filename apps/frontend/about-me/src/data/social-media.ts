import { SocialMedia } from "../models/social-media.model";

const GithubIcon = () => {
    // Create the SVG element
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", "36px");
svg.setAttribute("height", "36px");
svg.setAttribute("viewBox", "0 0 20 20");
svg.setAttribute("version", "1.1");
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
svg.setAttribute("fill", "#ffffff");

// Create the title element
const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
title.textContent = "github [#ffffff142]";
svg.appendChild(title);

// Create the desc element
const desc = document.createElementNS("http://www.w3.org/2000/svg", "desc");
desc.textContent = "Created with Sketch.";
svg.appendChild(desc);

// Create the path element
const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("d", "M94,7399 ..."); // Replace with the actual path data
path.setAttribute("id", "github-[#ffffff142]");
svg.appendChild(path);

// Append the SVG to a target element in your HTML
return svg
}
const LinkedinIcon = () => {
    // Create the SVG element
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("fill", "#ffffff");
svg.setAttribute("version", "1.1");
svg.setAttribute("id", "Layer_1");
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
svg.setAttribute("viewBox", "-143 145 512 512");
svg.setAttribute("xml:space", "preserve");
svg.setAttribute("width", "40px");
svg.setAttribute("height", "40px");
svg.setAttribute("stroke", "#ffffff");

// Create the path elements
const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
path1.setAttribute("d", "M-143,145v512h512V145H-143z M339,627h-452V175h452V627z");

const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
rect.setAttribute("x", "-8.5");
rect.setAttribute("y", "348.4");
rect.setAttribute("width", "49.9");
rect.setAttribute("height", "159.7");

const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
path2.setAttribute("d", "M127.9,508.1 ..."); // Replace with the actual path data

const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
path3.setAttribute("d", "M14.7,328.4 ..."); // Replace with the actual path data

// Append the path elements to the SVG
const iconCarrier = document.createElementNS("http://www.w3.org/2000/svg", "g");
iconCarrier.appendChild(path1);
iconCarrier.appendChild(rect);
iconCarrier.appendChild(path2);
iconCarrier.appendChild(path3);

svg.appendChild(iconCarrier);

// Append the SVG to a target element in your HTML
return svg
}
const InstagramIcon = () => {
    // Create the SVG element
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", "64px");
svg.setAttribute("height", "64px");
svg.setAttribute("viewBox", "0 0 24 24");
svg.setAttribute("fill", "none");
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

// Create the path elements
const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
path1.setAttribute("fill-rule", "evenodd");
path1.setAttribute("clip-rule", "evenodd");
path1.setAttribute("d", "M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z");
path1.setAttribute("fill", "#ffffff");

const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
path2.setAttribute("d", "M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z");
path2.setAttribute("fill", "#ffffff");

const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
path3.setAttribute("fill-rule", "evenodd");
path3.setAttribute("clip-rule", "evenodd");
path3.setAttribute("d", "M1.65396 4.27606 ..."); // Replace with the actual path data
path3.setAttribute("fill", "#ffffff");

// Append the path elements to the SVG
const iconCarrier = document.createElementNS("http://www.w3.org/2000/svg", "g");
iconCarrier.appendChild(path1);
iconCarrier.appendChild(path2);
iconCarrier.appendChild(path3);

svg.appendChild(iconCarrier);

// Append the SVG to a target element in your HTML
return svg
}
export const socialMedia:SocialMedia[] = [
    {
        name:"Linkedin",
        url:"https://www.linkedin.com/in/diego-vergara-casanova/",
        icon:LinkedinIcon()
    },
    {
        name:"Github",
        url:"https://github.com/davc93",
        icon:GithubIcon()
    },
    {
        name:"Instagram",
        url:"https://www.instagram.com/davc1993/",
        icon:InstagramIcon()
    }
]