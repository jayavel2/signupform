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
             eemail.innerHTML ="";
         }
         else{
             document.getElementById("email").style="border:3px solid red";
             eemail.innerHTML ="Please check the email id";
         }
     }
     else{
         document.getElementById("email").style="border:3px solid red";
         eemail.innerHTML ="Please enter your email id";
     }
 }
 
         //Password_validation
 function Validatepassword()
 { 
     var password       = document.getElementById("password").value;
     if(password){
        if(password.length>8){
            document.getElementById("password").style="border:3px solid green";
            epass.innerHTML ="";
        }
        else{
            document.getElementById("password").style="border:3px solid red";
            epass.innerHTML ="Please create password more than 8 characters  ";
        }
    }
    else{
        document.getElementById("password").style="border:3px solid red";
        epass.innerHTML ="Please enter your password";
    }
 }

 
        //Phone_number_validation
function Phonevalidate()
{
    var phonenumber      = document.getElementById('phnumber').value;
    var phonenumbercheck = /^\d{10}$/;


    if(phonenumber){
        if((phonenumber.match(phonenumbercheck))){
            document.getElementById("phnumber").style="border:3px solid green";
            eph.innerHTML ="";
        }
        else{
            document.getElementById("phnumber").style="border:3px solid red";
            eph.innerHTML ="Please enter valid contact number";
        }
    }
    else{
        document.getElementById("phnumber").style="border:3px solid red";
        eph.innerHTML ="Please enter your contact number";
    }

}


      //Name_Validation
 function NameValidate()
 {
     var fname=document.getElementById("fname").value;
     var cname = /^[A-Za-z]+$/;

     if(fname){
       if((fname.match(cname))){
           document.getElementById("fname").style="border:3px solid green";
           lblErr.innerHTML ="";
       }
       else{
           document.getElementById("fname").style="border:3px solid red";
           lblErr.innerHTML ="Name should be in alphabets";
       }
   }
   else{
       document.getElementById("fname").style="border:3px solid red";
       lblErr.innerHTML ="Please enter your name";
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
            //Email validation
         if(email){
            if((email.match(email1))){
                document.getElementById("email").style="border:3px solid green";
                eemail.innerHTML ="";
            }
            else{
                document.getElementById("email").style="border:3px solid red";
                eemail.innerHTML ="Please check the email id";
            }
        }
        else{
            document.getElementById("email").style="border:3px solid red";
            eemail.innerHTML ="Please enter your email id";
        }
    
         //Password validation
         if(password){
            if(password.length>8){
                document.getElementById("password").style="border:3px solid green";
                epass.innerHTML ="";
            }
            else{
                document.getElementById("password").style="border:3px solid red";
                epass.innerHTML ="Please create password more than 8 characters  ";
            }
        }
        else{
            document.getElementById("password").style="border:3px solid red";
            epass.innerHTML ="Please enter your password";
        }
         if(email && password && email.match(email1)){
            alert("Login successful");
        }
     }

         //VALIDATION_OF_REGISTRATION_FORM_WHEN_SUBMIT
 function Rvalidate()
 {
     var fname=document.getElementById("fname").value;
     var email=document.getElementById("email").value;
     var password=document.getElementById("password").value;
     var phonenumber=document.getElementById('phnumber').value;
     var phonenumbercheck = /^[A-Za-z]+$/;
     var email1=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     var contactno = /^\d{10}$/;
 
     if(email&&password&&fname&&phnumber&& fname.match(cname) && email.match(email1) && password.match(password1) &&phonenumber.match(phonenumbercheck)){
       alert("Registration Successful");
     }
 
     //Name_validation
     if(fname){
        if((fname.match(cname))){
            document.getElementById("fname").style="border:3px solid green";
            lblErr.innerHTML ="";
        }
        else{
            document.getElementById("fname").style="border:3px solid red";
            lblErr.innerHTML ="Name should be in alphabets";
        }
    }
    else{
        document.getElementById("fname").style="border:3px solid red";
        lblErr.innerHTML ="Please enter your name";
    }

     //Email_validation
     if(email){
         if((email.match(email1))){
             document.getElementById("email").style="border:3px solid green";
             eemail.innerHTML ="";
         }
         else{
             document.getElementById("email").style="border:3px solid red";
             eemail.innerHTML ="Please check the email id";
         }
     }
     else{
         document.getElementById("email").style="border:3px solid red";
         eemail.innerHTML ="Please enter your email id";
     }
 
     //Password_validation
     if(password){
        if(password.length>8){
            document.getElementById("password").style="border:3px solid green";
            epass.innerHTML ="";
        }
        else{
            document.getElementById("password").style="border:3px solid red";
            epass.innerHTML ="Please create password more than 8 characters  ";
        }
    }
    else{
        document.getElementById("password").style="border:3px solid red";
        epass.innerHTML ="Please enter your password";
    }
 
     //Phone_number_validation
     if(phonenumber){
        if((phonenumber.match(phonenumbercheck))){
            document.getElementById("phnumber").style="border:3px solid green";
            eph.innerHTML ="";
        }
        else{
            document.getElementById("phnumber").style="border:3px solid red";
            eph.innerHTML ="Please enter valid contact number";
        }
    }
    else{
        document.getElementById("phnumber").style="border:3px solid red";
        eph.innerHTML ="Please enter your contact number";
    }  
 }