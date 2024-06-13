document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");
    const stopButton = document.querySelector(".stop");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            stopAllSounds();
            const sound = new Audio(`sounds/${button.getAttribute("data-sound")}.mp3`);
            sound.play();
            button.setAttribute("data-playing", true);
        });
    });

    stopButton.addEventListener("click", () => {
        stopAllSounds();
    });

    function stopAllSounds() {
        const playingButtons = document.querySelectorAll(".btn[data-playing='true']");
        playingButtons.forEach(button => {
            button.removeAttribute("data-playing");
        });
        const sounds = document.querySelectorAll("audio");
        sounds.forEach(sound => sound.pause());
    }
});
