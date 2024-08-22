const signUpButton=document.getElementById('signUpButton');
const signInbutton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signUp');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInbutton.addEventListener('click',function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})