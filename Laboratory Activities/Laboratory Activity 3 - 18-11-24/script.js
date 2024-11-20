const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordcount");
const sentenceCount = document.getElementById("sentencecount");

const updateCounts = (text) => {
    const words = text.split(/\s+/).filter(Boolean).length;
    const sentences = text.split(/[.!?]+/).filter(Boolean).length;

    wordCount.textContent = `Words: ${words}`;
    sentenceCount.textContent = `Sentences: ${sentences}`;
};

textInput.addEventListener("input", (e) => {
    const text = e.target.value.trim();
    updateCounts(text);
});
