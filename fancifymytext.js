function makeBigger() {
  alert("Hello, world!");
  document.getElementById("myText").style.fontSize = "24pt";
}

function applyStyle() {
  var textArea = document.getElementById("myText");
  var fancy = document.getElementById("fancyShmancy");

  if (fancy.checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "";
    textArea.style.textDecoration = "none";
  }
}

function mooify() {
  var textArea = document.getElementById("myText");
  var text = textArea.value.toUpperCase();

  var sentences = text.split(".");
  for (var i = 0; i < sentences.length; i++) {
    var sentence = sentences[i].trimEnd();
    if (sentence.length > 0) {
      var words = sentence.split(" ");
      words[words.length - 1] = words[words.length - 1] + "-MOO";
      sentences[i] = words.join(" ");
    }
  }
  textArea.value = sentences.join(".");
}
