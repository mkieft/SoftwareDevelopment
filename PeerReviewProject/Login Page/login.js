function openModal() {
    var myInput = document.getElementById("psw");
    var confirmMyInput = document.getElementById("cpsw");  
    var match = document.getElementById("match");


	// When the user starts to type something inside the password field
	myInput.onkeyup = function() {
        //add this
    }

    // add conditional in below statement
    confirmMyInput.onkeyup = function() {
                // Validate password in database
                if (confirmMyInput.value ==) //add this conditional to make sure the password is in the database.
                {
                    var passEqualsConfPass = true;

                }
                if(passEqualsConfPass) { 
                    match.classList.remove("invalid"); 
                    match.classList.add("valid"); 
                } 
                else {
                    match.classList.remove("valid"); 
                    match.classList.add("invalid"); 
                }        


                // Disable or Enable the button based on the elements in classList
                eenableButton(password, email, confirmed);
    }


function enableButton(password, email, confirmed) {
        //enable button if the password and email are in the database
    }    


function onClickFunction() {
    alert("Works")
}