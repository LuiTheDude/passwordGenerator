function generatePassword(){
    
    
    const passwordLength = document.getElementById(`lengthInput`).value;
    const includUpper = document.getElementById(`upper`).checked;
    const includeLower = document.getElementById(`lower`).checked;
    const includeNum = document.getElementById(`num`).checked;
    const includeSymbols = document.getElementById(`symbol`).checked;
    const generatedPassword = document.getElementById(`generatedPassword`);
    
    
    const lowercaseChars = `abcdefghijklmnopqrstuvwxyz`;
    const uppercaseChars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const numChars = `0123456789`
    const symbolChars = `!@#$%^&*(){}[].,/|?`

    let allowedChars = ``;
    let password = ``;

    allowedChars += includUpper ? uppercaseChars : '';
    allowedChars += includeLower ? lowercaseChars : '';
    allowedChars += includeNum ? numChars : '';
    allowedChars += includeSymbols ? symbolChars : '';
    
    if (passwordLength === 0) {
        generatedPassword.textContent = (`Password can't be 0 characters long!`);
    }    
    if (allowedChars === 0) {
        generatedPassword.textContent = (`You should allow at least one set of characters!`);
    }    
    
    for (i = 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random()*allowedChars.length);
        password += allowedChars[randomIndex];
    }    
    generatedPassword.textContent = `${password}`;
}  