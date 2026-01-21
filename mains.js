const inputValue = document.getElementById("inputValue");
const outputValue = document.getElementById("outputValue");
inputValue.focus();
inputValue.addEventListener("input", () => {
    outputValue.innerHTML = "";
    let valued = inputValue.value.trim();
    arrayValue = valued
        .split(",")
        .filter((arrayValue) => arrayValue.trim() !== "")
        .map((arrayValue) => arrayValue.trim());
    arrayValue.forEach((element) => {
        const letter = document.createElement("div");
        letter.classList.add("letterArray");
        letter.innerText = element;
        outputValue.appendChild(letter);
    });
});
function random() {
    const allTags = document.querySelectorAll(".letterArray");
    allTags.forEach((tag) => tag.classList.add("highlight"));
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        if (randomTag !== undefined) {
            unHighlinghtTag(randomTag);
            inputValue.disabled = true;
            setTimeout(() => {
                highlinghtTag(randomTag);
            }, 50);
        }
    }, 50);
    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomTag = pickRandomTag();
            unHighlinghtTag(randomTag);
        }, 50);
        inputValue.value = "";
        inputValue.disabled = false;
        inputValue.focus();
    }, 2000);
}

function pickRandomTag() {
    const tags = document.querySelectorAll(".letterArray");
    return tags[Math.floor(Math.random() * tags.length)];
}
function highlinghtTag(tag) {
    tag.classList.add("highlight");
}
function unHighlinghtTag(tag) {
    tag.classList.remove("highlight");
}
inputValue.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        random();
    }
});
