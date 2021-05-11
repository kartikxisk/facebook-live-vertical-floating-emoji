function reactEmoji() {
    const Emojis = document.querySelectorAll('.emoji');
    const pushContianer = document.querySelector(".push-container");
    Emojis.forEach((emoji) => {
        emoji.addEventListener('click', () => {
            const temp = emoji.cloneNode();
            temp.classList.add('animate-' + Math.floor(Math.random() * (7 - 1) + 1));
            pushContianer.appendChild(temp);
            console.log(pushContianer.childElementCount);
            if (parseInt(pushContianer.childElementCount) > 30) {
                for (let i = 1; i <= 15; i++) {
                    pushContianer.removeChild(pushContianer.childNodes[0]);
                }
            }
        })
    })
}
reactEmoji();