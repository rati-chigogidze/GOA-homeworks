// function countCharacters() {
    
//     const inputText = document.getElementById('textInput').value;
//     const charCount = inputText.length;
//     document.getElementById('letters').textContent = charCount;
// }


const inputField = document.getElementById("textInput");
const errorMessage = document.getElementById("errorMessage");

inputField.addEventListener("input", function() {
    const value = inputField.value;
    
    const isValid = /^[a-zA-Z]*$/.test(value);

    if (!isValid) {
        errorMessage.style.display = "block"; 
    } else {
        errorMessage.style.display = "none";  
    }
});
