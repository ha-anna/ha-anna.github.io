const submitButton = document.getElementById('submit-button')

submitButton.addEventListener("click", event => {
    event.preventDefault();
    const userFirstName = document.getElementById('inputName').value;
    const userEmailAddress = document.getElementById('inputEmail').value; 
    const updatedHtmlContent = `
        <h2>Congratulations, ${userFirstName}!</h2>

        <p>You're on your way to becoming a BBQ Master!</p>
        
        <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>
    `;
    const updatedContentContainer = document.getElementById("main-content");
    updatedContentContainer.innerHTML = updatedHtmlContent;
})

