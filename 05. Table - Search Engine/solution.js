function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchText = document.getElementById('searchField').value.toLowerCase()

      let rows = Array.from(document.querySelectorAll("tbody tr"));

      rows.forEach(row => {
         row.classList.remove("select");
      });

      for (let row of rows) {
         let cells = Array.from(row.children);
         for (let cell of cells) {
            if (cell.textContent.toLowerCase().includes(searchText)) {
               row.classList.add("select");
               break;
            }
         }
      }

      document.getElementById('searchField').value = '';
   }
}
