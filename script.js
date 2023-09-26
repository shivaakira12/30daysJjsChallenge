var nameError=document.getElementById("name-error");
var phoneError=document.getElementById("phone-error")
var emailError=document.getElementById("email-error")
var messageError=document.getElementById("message-error")
var submitError=document.getElementById("submit-error")

//Validate Name 
function validateName()
{
    var contactName=document.getElementById("contact-name").value;
    if(contactName.length==0)
    {
        nameError.innerHTML="Name is required";
        return false;
    }
    if(!contactName.match(/^[A-Za-z]*\s{1}[A-Za-z]*/)){
        nameError.innerHTML="Write Full Name"
        return false;
    }
    nameError.innerHTML='<i class="fa-solid fa-circle-check fa-beat"></i>';
    return true;
}
// validate Phone number field
function validatePhone()
{
    var contactPhone=document.getElementById("contact-phone").value;
    if(contactPhone.length==0)
    {
        phoneError.innerHTML="Phone No is required";
        return false;
    }
    if(contactPhone.length!==10){
        phoneError.innerHTML="Phone No is Less than 10";
        return false
    }
    if(!contactPhone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML="Should be Digits";
        return false;
    }
    phoneError.innerHTML='<i class="fa-solid fa-circle-check fa-beat"></i>';
    return true;
}

// validate Email field
function validateEmail()
{
    var contactEmail=document.getElementById("contact-email").value;
    if(contactEmail.length==0)
    {
        emailError.innerHTML="Email is required";
        return false;
    }
    if(!contactEmail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML="Invalid Email";
        return false;
    }
    emailError.innerHTML='<i class="fa-solid fa-circle-check fa-beat"></i>';
    return true;
}

// validate Email field
function validateMessage()
{
    var contactMessage=document.getElementById("contact-message").value;
    var requiredCharacter=30;
    var leftCharacter=requiredCharacter-contactMessage.length;
    if(leftCharacter>0){
        messageError.innerHTML=leftCharacter  + " " +`more requried characters`
        return false;
    }
    messageError.innerHTML='<i class="fa-solid fa-circle-check fa-beat"></i>';
    return true;
}

function validateForm()
{
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display="block";
        submitError.innerHTML="something went wrong !.....";
        setTimeout(function(){submitError.style.display="none";},3000);
        return false;
    }
}