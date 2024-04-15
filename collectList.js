function extractText() {
    let list = document.getElementById("items");
    let textArea = document.querySelector("#result");

    Array.from(list.children).forEach(li => {
        textArea.value += li.textContent + "\n"
    })
}
