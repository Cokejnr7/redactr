

const words = document.querySelector(".words");
const redactText = document.querySelector(".redact");
const button = document.querySelector(".change");
const message = document.querySelector(".message");

button.addEventListener('click', redactFunction);

function redactFunction(e) {
  e.preventDefault();
  button.classList.add("loading")
  setTimeout(wait, 3000);

}
function wait() {
  callRedact(redactText.value.split(" "));
  button.classList.remove("loading");
}

function callRedact(list) {

  if (list[0] === '' && list.length == 1) {
    showAndRemoveMessage();
    return
  }
  for (x of list) {
    if (!x) continue;
    words.value = changeString(words.value, x);
  }
}


function changeString(word, redact) {
  const exp = RegExp(redact, "ig");
  return word.replaceAll(exp, Array(redact.length + 1).join("*"));
}

function showAndRemoveMessage() {
  message.classList.remove("hidden");
  setTimeout(() => {
    message.classList.add("hidden");
  }, 3000)
}