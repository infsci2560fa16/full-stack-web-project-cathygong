function checkForm(form){
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