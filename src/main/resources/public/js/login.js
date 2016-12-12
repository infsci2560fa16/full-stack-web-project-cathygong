window.onload = init;

function init() {
	setControls();
}


function login_submit(){
      var password = document.getElementById("pwd").value;
      var pittid = document.getElementById("pittid").value;

      var info = JSON.stringify({"pittid":pittid,"password":password});
	  var textStatus;
	  var jqXHR;
      //alert(info);
              $.ajax({
                  contentType:'application/json',
                  url: '/api/login',
                  type: "POST",
                  datatype: "json",
                  data: info,
                  success: function(data, textStatus,jqXHR) {
					 var result = JSON.parse(jqXHR.responseText);
					  if(result.uid!==0){
                      	alert("Welcome back!");
                      	window.location.href='/home';
				      }
					  else{
                      	alert("Wrong ID or password!");
                      	window.location.href='/login.html';						  
					  }
                  },
				  error: function(){
					alert("Wrong!"); 
				  }
              });

          }


function setControls() {
	//Populating the array with objects
	//containing default texts and corresponding validation functions
	var setupArray = [
		  {
		 	defaultText: '',
			validate: checkPittid
		 },
		{
		 	defaultText: '',
			validate: checkPassword
		 },	 
	];

// Set required fields
	var requiredFields = document.getElementsByClassName('required');
	//Displaying default text in each field
	for (var i=0; i<requiredFields.length; i++) {
		requiredFields[i].value = setupArray[i].defaultText;
		requiredFields[i].style.color = '#a8a8a8';
		requiredFields[i].style.fontStyle = 'italic';

		// Assigning each object to the corresponding field
		requiredFields[i].setupObject = setupArray[i];

		requiredFields[i].onfocus = function() {
			if (this.value === this.setupObject.defaultText) {
				this.value = '';
				this.style.color = '#000';
				this.style.fontStyle = 'normal';
			}
		}; //end focus
		requiredFields[i].onblur = function() {
			if (this.value === '') {
				this.value = this.setupObject.defaultText;
				this.style.color = '#a8a8a8';
				this.style.fontStyle = 'italic';
			}
			this.setupObject.validate();
		}; //end blur
	} //end for loop
} //end setup


// Validation functions
function checkPittid() {
	var pittid = document.getElementById('pittid');
	var errPittid = document.getElementById('errPittid');
	if (pittid.value === ''|| pittid.value === 'Enter your Pitt ID') {
		errPittid.innerHTML='*Please enter your Pitt ID.';
		errPittid.style.display='block';
		return false;
	}	else {
		errPittid.style.display='none';
		return true;
	}
}

function checkPassword() {
	var password = document.getElementById('pwd');
	var errPwd = document.getElementById('errPwd');
	if (password.value === '') {
		errPwd.innerHTML='*Please enter your password';
		errPwd.style.display='block';
		return false;
	}else {
		errPwd.style.display='none';
		return true;
	}
}

function checkLogin(){
		  var result = true;
			result = checkPassword() && result;
			result = checkPittid() && result;
			if(!result){
				alert("Please fill in all information!");
			}else{
				alert("Successfully submitted!");
				}
			return result;
}

// //check user input 
// function checkLogin(){  
// 	if(checkPittid() && checkPassword()){  
// 		 return true;  
// 	 }          
// 	return false;  
// }  
// //check user name  
// function checkPittid(){  
// 	var pittid = document.loginForm.pittid;  
// 	if(pittid.value.length!==0){  
// 		return true;  
// 	}else{  
// 		alert("Please enter your Pitt ID to login!");  
// 		return false;  
// 	}  
// }  
// //check password  
// function checkPassword(){  
// 	var password = document.loginForm.pwd;  
// 	if(password.value.length!==0){  
// 		return true;  
// 	}else{  
// 		alert("Please enter password!");  
// 		return false;  
// 	}  
// } 