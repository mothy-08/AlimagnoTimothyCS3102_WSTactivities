document.getElementById("textInput").addEventListener("input", (e) => {
    const text = e.target.value.trim();
    document.getElementById("wordcount").textContent = `Words: ${text.split(/\s+/).filter(Boolean).length}`;
    document.getElementById("sentencecount").textContent = `Sentences: ${text.split(/[.!?]+/).filter(Boolean).length}`;
});
