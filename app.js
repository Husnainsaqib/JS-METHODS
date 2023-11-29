// Take information from the user (User name, phone Number email, password and confirm password)
// The prompt should not be empty. if the user does not enter any value from the prompt and shows an Error please fill in the input
// if the user fills in the name phone number email then check the password and confirm the password should be the same
// if same shows alert you are successfully registered else password should be same.

// Note:
// You have to use Logical Operators with If else Statement.




var username = prompt("enter username", "")
var phoneNumber = +prompt("enter your phone number", "")
var email = prompt("enter your email", "")
var password = prompt("enter password", "")
var confirmPassword = prompt("confirm password", "") 

if(password == "" && email == "" && phoneNumber == "" && password == "" && confirmPassword == ""){
    document.write("fill in the credentials first")
}
else if(password !== confirmPassword ){
document.write("re enter password", password, confirmPassword)
}
else{
    document.write("you are sucessfully registered")
}