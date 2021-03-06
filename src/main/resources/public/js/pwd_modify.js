window.onload = init;

function init() {
	setControls();
}

function pwd_submit(){
      var pittid = document.getElementById("pittid").value;
      var oldPwd = document.getElementById("oldPwd").value;
	  var pwd = document.getElementById("pwd").value;
	  var pwd2 = document.getElementById("pwd2").value;

      var info = JSON.stringify({"pittid":pittid,"oldPwd":oldPwd,"pwd":pwd,"pwd2":pwd2});
	  var textStatus;
	  var jqXHR;
	  //alert(info);
              $.ajax({
                  contentType:'application/json',
                  url: '/api/pwd_modify',
                  type: "POST",
                  datatype: "json",
                  data: info,
                  success: function(data, textStatus,jqXHR) {
					  var result = JSON.parse(jqXHR.responseText);
					  if(result.uid!==0){
                       alert("Your password has been changed successfully!");
                       window.location.href='/home';
				      }
					  else{
                      	alert("Wrong ID or old password, please check!");
                      	window.location.href='/pwd_modify.html';						  
					  }
                  }
              });
          }


function setControls() {
	//Populating the array with objects
	//containing default texts and corresponding validation functions
	var setupArray = [
		  {
		 	defaultText: 'Enter your Pitt ID',
			validate: checkPittid
		 },
	     {
		 	defaultText: '',
			validate: checkOldPwd
		 },
		{
		 	defaultText: '',
			validate: checkPassword
		 },
		 {
			 defaultText: '',
			 validate: checkReenterpwd
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
	}else if(pittid.value.length<4||pittid.value.length>6){
		errPittid.innerHTML='*Please enter a valid Pitt ID.';
		errPittid.style.display='block';
		return false;
		} 
	else {
		errPittid.style.display='none';
		return true;
	}
}

function checkOldPwd() {
	var oldPwd = document.getElementById('oldPwd');
	var errOldPwd = document.getElementById('errOldPwd');
	if (oldPwd.value === '') {
		errOldPwd.innerHTML='*Please enter your old password';
		errOldPwd.style.display='block';
		return false;
	} else if(oldPwd.value.length<3||oldPwd.value.length>15){
		errOldPwd.innerHTML='*Please enter a valid old password:3-15 characters';
		errOldPwd.style.display='block';
		return false;
		}
	else {
		errOldPwd.style.display='none';
		return true;
	}
}

function checkPassword() {
	var password = document.getElementById('pwd');
	var errPwd = document.getElementById('errPwd');
	if (password.value === '') {
		errPwd.innerHTML='*Please enter new your password';
		errPwd.style.display='block';
		return false;
	} else if(password.value.length<3||password.value.length>15){
		errPwd.innerHTML='*Please enter a valid new password:3-15 characters';
		errPwd.style.display='block';
		return false;
		}
	else {
		errPwd.style.display='none';
		return true;
	}
}

function checkReenterpwd(){
	var pwd = document.getElementById('pwd');
	var pwd2 = document.getElementById('pwd2');
	var errPwd2 = document.getElementById('errPwd2');
	if (pwd2.value === '') {
		errPwd2.innerHTML='*Please re-enter your new password.';
		errPwd2.style.display='block';
		return false;
	}
	else if(pwd.value!==pwd2.value){
		errPwd2.innerHTML='*New passwords do not match, please check!';
		errPwd2.style.display='block';
		return false;
		} 
	else {
		errPwd2.style.display='none';
		return true;
	}

}

function checkPwdForm(){
		  var result = true;
			result = checkPassword() && result;
			result = checkOldPwd() && result;
			result = checkPittid() && result;
			result = checkReenterpwd() && result;
			if(!result){
				alert("Please fill in all information!");
			}else{
				alert("Successfully submitted!");
				}
			return result;
}



