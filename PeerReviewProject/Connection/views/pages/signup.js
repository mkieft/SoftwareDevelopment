function openModal() {
    var myInput = document.getElementById("psw");
    var confirmMyInput = document.getElementById("cpsw");
	var letter = document.getElementById("letter");
	var capital = document.getElementById("capital");
	var number = document.getElementById("number");
	var length = document.getElementById("length");    
    var match = document.getElementById("match");


	// When the user starts to type something inside the password field
	myInput.onkeyup = function() {
       console.log('helllooo')
        

        var lowerCaseLetters = /[a-z]/g; 
        var upperCaseLetters = /[A-Z]/g; 
        var numbers = /[0-9]/g;
        var minLength = 8;



        // Validate lowercase letters
        if(myInput.value.match(lowerCaseLetters)) {             
            letter.classList.remove("invalid"); 
            letter.classList.add("valid"); 
        } else {
            letter.classList.remove("valid"); 
            letter.classList.add("invalid"); 
        }

        // Validate capital letters        
        if(myInput.value.match(upperCaseLetters)) { 
            capital.classList.remove("invalid"); 
            capital.classList.add("valid");
        } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }

        // Validate numbers        
        if(myInput.value.match(numbers)) { 
            number.classList.remove("invalid"); 
            number.classList.add("valid"); 
        } else {
            number.classList.remove("valid"); 
            number.classList.add("invalid");
        }

        // Validate length
        if(myInput.value.length >= minLength) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
        }
    }
    confirmMyInput.onkeyup = function() {
                // Validate password and confirmPassword
                if (confirmMyInput.value == myInput.value){
                    var passEqualsConfPass = true;
                }
                else if(confirmMyInput.value != myInput.value){
                    var passEqualsConfPass = false;
                }
                if(passEqualsConfPass) { 
                    match.classList.remove("invalid"); 
                    match.classList.add("valid"); 
                } else {
                    match.classList.remove("valid"); 
                    match.classList.add("invalid"); 
                }        
                // Disable or Enable the button based on the elements in classList
                enableButton(letter, capital, number, length, match);
    }
}


function enableButton(letter, capital, number, length, match) {
    var button = document.getElementById('my_submit_button');
    var amIgood = false;

    if(match && length && number && capital && letter){
        amIgood = true;
    }

    var condition = (amIgood); 
    if(condition) {       
        button.disabled = false;
        }
    else{
        button.disabled = true;
    }      
    }    


function onClickFunction() {
    alert("You've been registered. Redirecting to login page so you can sign in and start learning!")
}