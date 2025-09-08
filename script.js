emailjs.init("YOUR_USER_ID");

function sendEmail(event) {
    event.preventDefault();

    const form = event.target;
    const formData = {
        from_name: form.from_name.value,
        from_email: form.from_email.value,
        message: form.message.value,
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
        .then((response) => {
            console.log("Email sent successfully!", response.status, response.text);
            alert("Email sent successfully!");
        })
        .catch((error) => {
            console.error("Failed to send email:", error);
            alert("Failed to send email. Please try again.");
        });
}

document.addEventListener("DOMContentLoaded", () => {
    const emailForm = document.getElementById("emailForm");
    if (emailForm) {
        emailForm.addEventListener("submit", sendEmail);
    }
});
