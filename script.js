let main = document.getElementById('main')

//Create new div
let div2 = document.createElement('div')
main.append(div2)

//main
main.style = 'background-color: rgb(235, 235, 235);  width:100% ; height: 990px; display:flex; align-items:center; justify-content: center;'

//div2
div2.style = 'background-color:white; width:450px; height: 500px;'

//Create new account
let header = document.createElement('h1')
header.innerText = 'Create New Account'
div2.append(header)
header.style = 'font-family:arial; font-weight: bold; font-size: 30px; text-align:center; margin-top: 50px'

//Email-input
let email =  document.createElement('input')
email.setAttribute('placeholder', 'Email Address')
div2.append(email)
email.style = 'width: 70%; padding: 15px 15px; margin: 40px 0 0 60px ;border-radius: 10px; border: none; background-color: rgb(235, 235, 235)'



//Email verification
let emailver = document.createElement('p')
emailver.innerText = ''
div2.append(emailver)
emailver.style = 'position:absolute;font-family:arial; font-size:13px; margin: 5px 0 0 75px'


//Username-input
let username =  document.createElement('input')
username.setAttribute('placeholder', 'Username')
div2.append(username)
username.style = 'width: 70%; padding: 15px 15px; margin: 30px 0 0 60px ;border-radius: 10px; border: none; background-color: rgb(235, 235, 235)'


//Username verification
let usernameVer = document.createElement('p')
usernameVer.innerText = ''
div2.append(usernameVer)
usernameVer.style = 'position:absolute;font-family:arial; font-size:13px; margin: 5px 0 0 75px'


//Password-input
let password =  document.createElement('input')
password.setAttribute('placeholder', 'Password')
div2.append(password)
password.style = 'width: 70%; padding: 15px 15px; margin: 30px 0 0 60px ;border-radius: 10px; border: none; background-color: rgb(235, 235, 235)'
passStrength = ''
//Username verification
let passwordVer = document.createElement('p')
passwordVer.innerText = ''
div2.append(passwordVer)
passwordVer.style = 'position:absolute;font-family:arial; font-size:13px; margin: 5px 0 0 75px;'





//Email Function
Emailcheck();
function Emailcheck(){
    email.addEventListener('change', function (event){
    
   

    
    let email = event.target.value


    if(email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailver.innerText = ''
     }
     else{
        emailver.innerText = 'Please enter a valid email address'
        emailver.style.color = 'red'
     }
 
     if(email===""){
        emailver.innerText = ''
     }
    
 })}

//Username Function
username.addEventListener('change', function (event){
    let username = event.target.value
 
    if(username.match("Kent101")){
        usernameVer.innerText = 'This username is already taken'
        usernameVer.style.color = 'red'
     }
     else{

         usernameVer.innerText = ''  
     }
 
     if(username===""){
         usernameVer.innerText = ''
     }
 })

 
 

//Password Function
password.addEventListener('input', function (event){
    let password = event.target.value
 
    if(password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/gi)){
        passwordVer.innerText = 'Strong'
        passwordVer.style.color = 'Green' 
        passStrength = 'strong'
     
     }
     else if(password.match(/((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/gi)){
        passwordVer.innerText = 'Medium'
        passwordVer.style.color = 'Orange'
        passStrength = 'medium'
     }

     else{
         passwordVer.innerText = 'Weak'
         passwordVer.style.color = 'Red'
         passStrength = 'weak'

         
     }
 
     if(password===""){
         passwordVer.innerText = ''
         passStrength = ''
     }
 })



 //extra space
 let div3 = document.createElement('div')
 div2.append(div3)

 //button
 //create
 let createNew = document.createElement('button')
 createNew.innerHTML = 'Create'
 div2.append(createNew)
 createNew.style = 'position:relative; margin: 40px 0 0 50px; padding: 15px 60px; font-family:arial; font-size: 15px; font-weight:bold; border:none; border-radius: 10px; background-color:#0165E1; color:white; cursor:pointer;'
 
 //sign in
 let signup = document.createElement('button')
 signup.innerHTML = 'Sign Up'
 div2.append(signup)
 signup.style = 'position:relative; margin: 40px 0px 0px 15px; padding: 15px 58px; font-family:arial; font-size: 15px; font-weight:bold; border:none; border-radius: 10px; background-color:#17A9FD; color:white; cursor:pointer;'

 createNew.addEventListener('click', function(){
    if(email.value===""){
        emailver.innerText = 'Please Enter a Valid Email Adress'
        emailver.style.color = 'Red'
     }
    if(username.value===""){
        usernameVer.innerText = 'Enter a username'
        usernameVer.style.color = 'Red'
     }
     if(passStrength==="weak" || password.value ===''){
        passwordVer.innerText = 'Enter a strong password'
        passwordVer.style.color = 'Red'
     }

 })