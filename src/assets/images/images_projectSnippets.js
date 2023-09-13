const images_projectSnippets = [
    { src: require("./projectSnippets/yumster.png"), title: "Yumster", description: "Yumster" },
    { src: require("./projectSnippets/code-quiz.png"), title: "Coding Quiz", description: "Coding Quiz" },
    { src: require("./projectSnippets/work-day-scheduler.png"), title: "Work Day Scheduler", description: "Work Day Scheduler" },
    { src: require("./projectSnippets/random-password-generator.png"), title: "Random Password Generator", description: "Random Password Generator" },
    { src: require("./projectSnippets/weather-dashboard.png"), title: "Weather Dashboard", description: "Weather Dashboard" },
]

for (let i = 0; i < images_projectSnippets.length; i++) {
    images_projectSnippets[i].id = i + 1;
}

export default images_projectSnippets;