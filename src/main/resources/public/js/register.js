window.onload = init;

$(function(){
        $("#submit").click(function(){


      var uname = $("#uname").val();
      var password = $("#password").val();
      var email = $("email").val();
      var pittid = $("pittid").val();
      var phonenum = $("phonenum").val();
      var address = $("address").val();

      var info = JSON.stringify({"uname":uname,"pittid":pittid,"email":email,"password":password,"phonenum":phonenum,"address":address});
              $.ajax({
                  contentType:'application/json',
                  url: '/api/register',
                  type: "POST",
                  datatype: "json",
                  data: obj,
                  success: function(data) {
                      alert("Welcome! You have registered successfully!");
                      window.location.href='/home';
											console.log(data);
                  }
              });
                    return false;
          });
   });


function init() {
	
}

function setControls() {
	//Populating the array with objects
	//containing default texts and corresponding validation functions
	var setupArray = [
         {
		 	defaultText: '6-12 characters',
		    validate: checkUsername
		 },
         {
		 	defaultText: 'Enter your Pitt ID',
		    validate: checkID
		 },
		 {
		 	defaultText: '6-18 characters',
			validate: checkPwd
		 },
		 {
		 	defaultText: 'Enter valid email address',
		    validate: checkEmail
		 },
	];
}


function checkRegister(){
	if(checkID() && checkName() && checkEmail() && checkPwd() && checkReenterpwd() && checkEqupwd()){  
		 return true;  
	 }          
	return false; 
}	
	
function checkID(){
	var id = document.registerForm.pittid;
	if(id.value.length!==0){  
		return true;  
	}else{  
		alert("Please enter PITT ID!");  
		return false;  
	} 
}

function checkName(){
	var name = document.registerForm.uname;
	if(name.value.length!==0){  
		return true;  
	}else{  
		alert("Please enter name!");  
		return false;  
	} 
}

function checkEmail(){
	var email = document.registerForm.email;
	if(email.value.length!==0){  
		return true;  
	}else{  
		alert("Please enter Email!");  
		return false;  
	} 
}

function checkPwd(){
	var pwd = document.registerForm.password;
	if(pwd.value.length!==0){  
		return true;  
	}else{  
		alert("Please enter password!");  
		return false;  
	}
}

function checkReenterpwd(){
	var pwd2 = document.registerForm.pwd2;
	if(pwd2.value.length!==0){  
		return true;  
	}else{  
		alert("Please re-enter password!");  
		return false;  
	}
}

function checkEqupwd(){
	var pwd = document.registerForm.pwd;
	var pwd2 = document.registerForm.pwd2;
	if(pwd.value==pwd2.value){  
		return true;  
	}else{  
		alert("Passwords do not match, please check!");  
		return false;  
	}
}