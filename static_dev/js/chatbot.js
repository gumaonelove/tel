window.onload = () => {
  const submit = document.querySelector("#submit-btn");
  const input = document.querySelector("#message-input");
  const messages = [];
  submit.addEventListener("click", async () => {
    if (input.value) {
      createOwnMessage(input.value);

      messages.push(input.value);
      const json = {
        messages,
      };
      console.log(json);
      const response = await fetch("http://127.0.0.1:5001/dialo", {
        method: "POST",
        body: JSON.stringify(json),
      });
      const res = await response.json();
      createRespondedMessage(res.output);
      input.value = "";
    }
  });
};

function createOwnMessage(string) {
  const html = `<div class="chatbot__item right"><span>${string}</span></div>`;
  document.querySelector(".chatbot__block-middle").innerHTML += html;
  var objDiv = document.querySelector(".chatbot__block-middle");
  objDiv.scrollTop = objDiv.scrollHeight;
}

function createRespondedMessage(string) {
  const html = `<div class="chatbot__item left"><span>${string}</span></div>`;
  document.querySelector(".chatbot__block-middle").innerHTML += html;
  var objDiv = document.querySelector(".chatbot__block-middle");
  objDiv.scrollTop = objDiv.scrollHeight;
}
