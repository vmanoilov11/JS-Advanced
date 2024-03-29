function create(words) {
   let content = document.getElementById("content");
   for(let element of words){
      let div = document.createElement("div");
      let p = document.createElement("p");
      content.appendChild(div);
      div.appendChild(p);

      p.textContent = element;
      p.style.display = "none";

      div.addEventListener("click", load);
      
      function load(e){
         e.currentTarget.children[0].style.display = "";

      }

   }
}