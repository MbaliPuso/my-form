function surveySubmit(event) {
    event.preventDefault();
    let userInput = document.querySelector("#firstName")
    alert (`Thank you for completing the survey, ${userInput.value}`);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", surveySubmit);