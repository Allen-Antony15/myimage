document.getElementById("clickBtn").addEventListener("click", function () {
    const messages = [
        "You clicked the button! 🎉",
        "Docker is awesome! 🐳",
        "CI/CD with Jenkins rocks! ⚙️",
        "Push it to GitHub! 🐙"
    ];
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").textContent = randomMsg;
});
