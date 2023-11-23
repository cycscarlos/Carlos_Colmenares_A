// Define your tags in a JS array.
const myTags = [
  "HTML",
  "CSS",
  "Javascript",
  "ReactJS",
  "Python",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "MySQL",
  "Git",
  "Github",
  "Figma",
  "APIs driven",
  "PWA",
  "Canva",
  "MS Office",
  "Google Suite",
  "Artificial Intelligence",
];
const myTags2 = [
  "VSE/ESA",
  "VM/ESA",
  "MVS/ESA",
  "z/OS",
  "CICS/VTAM/NCP",
  "VSAM",
  "COBOL",
  "ASSEMBLER",
  "Ubiquiti",
  "MicroTik",
  "Canopy",
  "Airlive",
  "Cambium Networks",
  "Trango Broadband",
  "VideoComm",
  "Grandstream",
  "Rosslare",
  "Chiyu",
  "Lenel",
  "Dashou",
  "Henfor",
  "Hikvision",
  "Dahua",
];

// Render a default tag cloud.
// var tagCloud = TagCloud(".content", myTags);

// Config the tag cloud by overriding the default parameters
var tagCloud = TagCloud(".content1", myTags, {
  // radius in px
  // radius: 300,
  radius: 300,

  // animation speed
  // slow, normal, fast
  maxSpeed: "normal",
  initSpeed: "fast",

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  //   direction: 135,
  direction: 135,

  // interact with cursor move on mouse out
  //   keep: true,
  keep: false,
});

var tagCloud2 = TagCloud(".content2", myTags2, {
  // radius in px
  // radius: 300,
  radius: 300,

  // animation speed
  // slow, normal, fast
  maxSpeed: "normal",
  initSpeed: "fast",

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  //   direction: 135,
  direction: 135,

  // interact with cursor move on mouse out
  //   keep: true,
  keep: false,
});

// This creates a basic cloud of words. If you want to change the color of words randomly after each reload, add this small JavaScript code at the end.
var colors = ["#34A853", "#FBBC05", "#4285F4", "#B45f06", "#B3E6FF", "#F2600B"];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector(".content1").style.color = random_color;

var colors2 = [
  "#7F72a2",
  "#FF4C00",
  "#FF80ED",
  "#2D2525",
  "#D0AE8B",
  "#C70D0F",
];
var random_color2 = colors2[Math.floor(Math.random() * colors2.length)];

document.querySelector(".content2").style.color = random_color2;
