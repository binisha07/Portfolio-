document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", function(e){
        e.preventDefault();

        if (nameInput.value === "" || emailInput.value === "" || messageInput.value === ""){
            formMessage.textContent = "Please fill all fields!";
            formMessage.style.color = "red";
        } else {
            formMessage.textContent = "Message sent successfully!";
            formMessage.style.color = "green";

            form.reset();
        }
    });
});