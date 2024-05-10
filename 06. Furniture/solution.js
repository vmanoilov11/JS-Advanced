function solve() {
  let generateBtn = document.querySelectorAll("button")[0];
  let buyBtn = document.querySelectorAll("button")[1];
  let textArea = document.querySelectorAll("textarea")[0]
  generateBtn.addEventListener("click", generate);
  buyBtn.addEventListener("click", buy);
  let tbody = document.querySelector('tbody');
  let result = document.querySelectorAll("textarea")[1];
  
  function generate(e){
    let json = JSON.parse(textArea.value);
    for(furniture of json){
      let tr = document.createElement("tr");
      tr.innerHTML = `
      <td><img src="${furniture.img}" alt="${furniture.name}"></td>
      <td>${furniture.name}</td>
      <td>${furniture.price}</td>
      <td>${furniture.decFactor}</td>
      <td><input type="checkbox"></td>`;
    
      tbody.appendChild(tr);
    }
  }
  
  function buy(e) {
    let checkedCheckboxes = Array.from(document.querySelectorAll('.table tbody input:checked'));
    let boughtFurniture = checkedCheckboxes.map(checkbox => checkbox.parentNode.parentNode.querySelector('td:nth-of-type(2)').textContent);
    let totalPrice = checkedCheckboxes.reduce((acc, checkbox) => acc + parseFloat(checkbox.parentNode.parentNode.querySelector('td:nth-of-type(3)').textContent), 0);
    let totalDecFactor = checkedCheckboxes.reduce((acc, checkbox) => acc + parseFloat(checkbox.parentNode.parentNode.querySelector('td:nth-of-type(4)').textContent), 0);

    result.value = `Bought furniture: ${boughtFurniture.join(', ')}`;
    result.value += `\nTotal price: ${totalPrice.toFixed(2)}`;
    result.value += `\nAverage decoration factor: ${totalDecFactor / checkedCheckboxes.length || 0}`;
  }
}
