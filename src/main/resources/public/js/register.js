window.onload = init;

function init() {
	setControls();
}

function register_submit(){
      var uname = document.getElementById("uname").value;
      var password = document.getElementById("password").value;
      var email = document.getElementById("email").value;
      var pittid = document.getElementById("pittid").value;
      var phonenum = document.getElementById("phonenum").value;	
	  var address = document.getElementById("address").value;

      var info = JSON.stringify({"uname":uname,"pittid":pittid,"email":email,"password":password,"phonenum":phonenum,"address":address});
	//   alert(info);
              $.ajax({
                  contentType:'application/json',
                  url: '/api/register',
                  type: "POST",
                  datatype: "json",
                  data: info,
                  success: function(data) {
                      alert("Welcome! You have registered successfully! You can login now.");
                      window.location.href='/login.html';
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
		 	defaultText: '4-20 characters',
		    validate: checkUname
		 },
		 {
		 	defaultText: 'Enter valid email address',
		    validate: checkEmail
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
function checkUname() {
	var uname = document.getElementById('uname');
	var errUName = document.getElementById('errUname');
	if (uname.value === '' || uname.value === '4-20 characters') {
    errUName.innerHTML='*Please enter your user name';
		errUName.style.display='block';
		return false;
	} else if(uname.value.length<4||uname.value.length>20){
		errUName.innerHTML='*Please enter a valid user name';
		errUName.style.display='block';
		return false;
		}
	else {
		errUName.style.display='none';
		return true;
	}
}

function checkPassword() {
	var password = document.getElementById('password');
	var errPwd = document.getElementById('errPwd');
	if (password.value === '') {
		errPwd.innerHTML='*Please enter your password';
		errPwd.style.display='block';
		return false;
	} else if(password.value.length<3||password.value.length>15){
		errPwd.innerHTML='*Please enter a valid password:3-15 characters';
		errPwd.style.display='block';
		return false;
		}
	else {
		errPwd.style.display='none';
		return true;
	}

}

function checkEmail(){
	var email = document.getElementById('email');
	var emailRegex = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
	var errEmail = document.getElementById('errEmail');
	if (email.value === '' || email.value === 'Enter valid email address') {
		errEmail.innerHTML='*Please enter your email address';
		errEmail.style.display='block';
		return false;
	} else if (!emailRegex.test(email.value)) {
		errEmail.innerHTML='*Please enter a valid email address';
		errEmail.style.display='block';
		return false;
	} else {
		errEmail.style.display='none';
		return true;
	}

}

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

function checkReenterpwd(){
	var pwd = document.getElementById('password');
	var pwd2 = document.getElementById('pwd2');
	var errPwd2 = document.getElementById('errPwd2');
	if (pwd2.value === '') {
		errPwd2.innerHTML='*Please re-enter your password.';
		errPwd2.style.display='block';
		return false;
	}
	else if(pwd.value!==pwd2.value){
		errPwd2.innerHTML='*Passwords do not match, please check!';
		errPwd2.style.display='block';
		return false;
		} 
	else {
		errPwd2.style.display='none';
		return true;
	}

}

function checkRegister(){
		  var result = true;
			result = checkUname() && result;
			result = checkPassword() && result;
			result = checkEmail() && result;
			result = checkPittid() && result;
			result = checkReenterpwd() && result;
			if(!result){
				alert("Please fill in all required information (marked with '*')!");
			}else{
				alert("Successfully submitted!");
				}
			return result;
}

