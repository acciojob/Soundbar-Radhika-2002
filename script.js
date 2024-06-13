document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");
    const stopButton = document.querySelector(".stop");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            stopAllSounds();
            const sound = new Audio(`sounds/${button.getAttribute("data-sound")}.mp3`);
            sound.id = button.getAttribute("data-sound");
            document.body.appendChild(sound);
            sound.play();
            button.setAttribute("data-playing", true);
            sound.onended = () => {
                document.body.removeChild(sound);
                button.removeAttribute("data-playing");
            };
        });
    });

    stopButton.addEventListener("click", () => {
        stopAllSounds();
    });

    function stopAllSounds() {
        const sounds = document.querySelectorAll("audio");
        sounds.forEach(sound => {
            sound.pause();
            document.body.removeChild(sound);
        });
        const playingButtons = document.querySelectorAll(".btn[data-playing='true']");
        playingButtons.forEach(button => {
            button.removeAttribute("data-playing");
        });
    }
});
