const images_skillsLogos_web = [
    { src: require("./skillsLogos/css3-plain-wordmark.png"), title: "CSS3", description: "CSS3" },
    { src: require("./skillsLogos/html5-plain-wordmark.png"), title: "HTML5", description: "HTML5" },
    { src: require("./skillsLogos/javascript-plain.png"), title: "JavaScript", description: "JavaScript" },
    { src: require("./skillsLogos/react-logo192.png"), title: "React", description: "React" },
    { src: require("./skillsLogos/figma-original.png"), title: "Figma", description: "Figma" }
]

const images_skillsLogos_embedded_desktop = [
    { src: require("./skillsLogos/c-line.png"), title: "C Programming", description: "C Programming" },
    { src: require("./skillsLogos/cplusplus-line.png"), title: "C++ Programming", description: "C++ Programming" },
    { src: require("./skillsLogos/csharp-line.png"), title: "C# Programming", description: "C# Programming" },
    { src: require("./skillsLogos/java-original-wordmark.png"), title: "Java", description: "Java" },
    { src: require("./skillsLogos/labview-original-wordmark.png"), title: "LabVIEW", description: "LabVIEW" },
    { src: require("./skillsLogos/python-original-wordmark.png"), title: "Python", description: "Python" },
    { src: require("./skillsLogos/qt-original.png"), title: "Qt", description: "Qt" }
];

const images_skillsLogos_database = [
    { src: require("./skillsLogos/mysql-line.png"), title: "MySQL", description: "MySQL" },
    { src: require("./skillsLogos/mongodb-164.png"), title: "MongoDB", description: "MongoDB" }
]

const images_skillsLogos = images_skillsLogos_embedded_desktop
    .concat(images_skillsLogos_web)
    .concat(images_skillsLogos_database);

for (let i = 0; i < images_skillsLogos.length; i++) {
    images_skillsLogos[i].id = i + 1;
}

export default images_skillsLogos;