let user = {
    name: "Astha",
    email: "astha@mail.com",
    age: 20
};
const form = document.getElementById("userForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const ageInput = document.getElementById("ageInput");
const output = document.getElementById("output");
function loadForm() {
    nameInput.value = user.name;
    emailInput.value = user.email;
    ageInput.value = user.age;
}
function displayUser() {
    output.innerHTML = `
        <h3>Updated User Object</h3>
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Age:</strong> ${user.age}</p>
    `;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    user.name = nameInput.value;
    user.email = emailInput.value;
    user.age = Number(ageInput.value);
    displayUser();
});

loadForm();
disp
