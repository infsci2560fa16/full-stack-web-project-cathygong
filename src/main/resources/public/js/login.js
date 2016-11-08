//check user input 
function checkLogin(){  
	if(checkUsername() && checkPassword()){  
		 return true;  
	 }          
	return false;  
}  
//check user name  
function checkUsername(){  
	var username = document.loginForm.name;  
	if(username.value.length!==0){  
		return true;  
	}else{  
		alert("Please enter username!");  
		return false;  
	}  
}  
//check password  
function checkPassword(){  
	var password = document.loginForm.pwd;  
	if(password.value.length!==0){  
		return true;  
	}else{  
		alert("Please enter password!");  
		return false;  
	}  
} 