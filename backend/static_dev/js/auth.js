const learn_navigations_url = 'http://194.58.107.180/study/learn_navigations';
const profile_url = 'http://194.58.107.180/study/profile';

window.onload = () => {
    var action = 'вход';

    const enterBtn = document.getElementById("enter");
    const registerBtn = document.getElementById("register");
    const confirm = document.getElementById("confirm-password");
    const submitBtn = document.getElementById("submit-btn");

    enterBtn.addEventListener("click", () => {
        registerBtn.classList.remove("method-btn-active");
        enterBtn.classList.add("method-btn-active");
        confirm.style.display = "none";
        submitBtn.textContent = "вход";
        action = 'вход';
    });
    registerBtn.addEventListener("click", () => {
        enterBtn.classList.remove("method-btn-active");
        registerBtn.classList.add("method-btn-active");
        confirm.style.display = "block";
        submitBtn.textContent = "регистрация";
        action = 'регистрация';
    });

    submitBtn.addEventListener("click", sendForm);

    function sendForm() {
        var username = document.getElementById('login').value;
        var firstPas = document.getElementById('first_pas').value;
        var secPas = document.getElementById('sec_pas').value;
        var data = {};

        data['username'] = username;
        data['password'] = firstPas;

        if (action == 'вход') {
            data['action'] = 'entry';
            const url = "{% url 'auth' %}";
            const csrftoken = '{{ csrf_token }}';
            request(url, data, csrftoken);
            setTimeout(() => window.open(learn_navigations_url, '_self', false), 1000);
        } else {
            data['action'] = 'register';
            if (firstPas != secPas) {
                alert('Пароли не совпадают')
            }
            const url = "{% url 'auth' %}";
            const csrftoken = '{{ csrf_token }}';
            request(url, data, csrftoken);
            setTimeout(() => window.open(profile_url, '_self', false), 1000);
        }
    }
};