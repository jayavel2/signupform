 //To_view_the_password
 function myFunction() 
 {
     var x = document.getElementById("password");
     if (x.type === "password")
     {
     x.type = "text";
     } 
     else
     {
     x.type = "password";
     }
 }

     //Email_validation
     function Validateemail()
     { 
         var email=document.getElementById("email").value;
         var email1=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         if(email){
             if((email.match(email1))){
                 document.getElementById("email").style="border:3px solid green";
                 eemail1.innerHTML ="";
                 eemail.innerHTML ="";
             }
             else{
                 document.getElementById("email").style="border:3px solid red";
                 eemail.innerHTML ="Please check the email id";
                 eemail1.innerHTML =="";
             }
         }
         else{
             document.getElementById("email").style="border:3px solid red";
             eemail.innerHTML ="Please enter your email id";
             eemail1.innerHTML ="";
         }
     }
     
             //Password_validation
     function Validatepassword()
     { 
         var password=document.getElementById("password").value;
         if(!password){
             document.getElementById("password").style="border:3px solid red";
             epass.innerHTML="Please enter your password";
         }
         else{
             document.getElementById('password').style="border:3px solid green";
             epass.innerHTML="";
         }
     }


     
         //Form_validation-This_executes_when_submit_button_is_pressed
     function Validate()
     {
         var email=document.getElementById("email").value;
         var password=document.getElementById("password").value;
         var email1=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         if(!email&&!password){
             alert("Please fill the sign up form");
         }
         if(email){
         document.getElementById('email').style="border:3px solid green";
         eemail.innerHTML = "";  

         }
         if(!email){
         document.getElementById("email").style="border:3px solid red";
         eemail.innerHTML ="Please enter your email id";
         return false
         }
         if(!(email.match(email1))){
         document.getElementById("email").style="border:3px solid red";
         eemail.innerHTML ="Please check the email id";
         } 
         if((email.match(email1))){
         document.getElementById("email").style="border:3px solid green";
         eemail1.innerHTML ="";
         }
         if(password){
         document.getElementById('password').style="border:3px solid green";
         epass.innerHTML="";
         }
         if(!password){
         document.getElementById("password").style="border:3px solid red";
         epass.innerHTML="Please enter your password";
         }
         if(email && password && email.match(email1)){
            alert("Login successful");
        }
     }

