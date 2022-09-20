const dialo_url = "https://learn.saf.tatar/study/dialo/";

window.onload = () => {
  const submit = document.querySelector("#submit-btn");
  const input = document.querySelector("#message-input");
  const messages = [];
  document.addEventListener("keydown", (e) => {
    if (e.key == "Enter" && input == document.activeElement) {
      f();
    }
  });
  submit.addEventListener("click", () => {
    f();
  });
  async function f() {
    if (input.value) {
      createOwnMessage(input.value);
      messages.push(input.value);
      input.value = "";
      const json = {
        messages,
      };
      console.log(json);

      const response = await fetch(dialo_url, {
        method: "POST",
        body: JSON.stringify(json),
      });
      const res = await response.json();
      createRespondedMessage(res.output);
    }
  }
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
