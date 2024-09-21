function addItem() {

    let valueElement = document.getElementById("newItemValue");
    let textElement = document.getElementById("newItemText");
    let select = document.getElementById("menu");
    let option = document.createElement("option");
    option.textContent = textElement.value;
    option.value = valueElement.value;


    select.appendChild(option);

    valueElement.value = '';
    textElement.value = "";


}
