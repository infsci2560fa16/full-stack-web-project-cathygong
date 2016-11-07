function checkForm(form){
	if(checkOldpwd() && checkNewpwd() && checkReenterpwd() && checkEqupwd()){  
		 return true;  
	 }          
	return false; 
}	
	
function checkOldpwd(){
	var oldpwd = document.pwdForm.oldpwd;
	if(oldpwd.value.length!=0){  
		return true;  
	}else{  
		alert("Please enter old password!");  
		return false;  
	} 
}

function checkNewpwd(){
	var pwd = document.pwdForm.pwd;
	if(pwd.value.length!=0){  
		return true;  
	}else{  
		alert("Please enter new password!");  
		return false;  
	}
}

function checkReenterpwd(){
	var pwd1 = document.pwdForm.pwd1;
	if(pwd1.value.length!=0){  
		return true;  
	}else{  
		alert("Please re-enter new password!");  
		return false;  
	}
}

function checkEqupwd(){
	var pwd = document.pwdForm.pwd;
	var pwd1 = document.pwdForm.pwd1;
	if(pwd.value==pwd1.value){  
		return true;  
	}else{  
		alert("Passwords do not match, please check!");  
		return false;  
	}
}