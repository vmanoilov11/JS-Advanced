function solve() {
  let text = document.getElementById("text").value;
  let namingConvention = document.getElementById("naming-convention").value;

  let words = text.split(" ");
  console.log(words);
  let result = []
  switch (namingConvention.toLowerCase()) {
    case "camel case":
      let firstWord = words.shift();
      firstWord = firstWord.toLowerCase()
      result.push(firstWord)
      for(let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
        result.push(words[i]) 
      }
      break
    case "pascal case":
      for(let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
        result.push(words[i]) 
      }
      break
    default:
      return (document.getElementById("result").textContent = "Error!");
  }
  finalResult = result.join("");
  document.getElementById("result").textContent = finalResult;

}
