function solve() {
  let text = document.getElementById("input").value;
  let sentences = text.match(/[^\.!\?]+[\.!\?]+/g);
  let output = document.getElementById('output');
  output.innerHTML = '';

  if(sentences.length <= 3){
    let paragraph = document.createElement("p");
    paragraph.innerHTML = `${sentences.join(" ")}`
    output.appendChild(paragraph);
  }
  else{
    while(sentences.length > 0){
      let threeSentences = sentences.splice(0,3)
      let paragraph = document.createElement("p");
      paragraph.innerHTML = `${threeSentences.join(" ")}`
      output.appendChild(paragraph);
    }
  
  }  
  

}
