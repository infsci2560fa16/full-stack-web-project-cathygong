<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html;charset=utf-8">
<title>Login</title>
<link href="stylesheets/style.css" rel="stylesheet">
<script src="js/login.js" type="text/javascript"></script>
</head>
<body>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
  <table style="width:100%">
    <tr>
      <td style="width:30%; background-color:#86C1E6">&nbsp;</td>
      <td style="width:32%; background-image:url(Images/bg.gif);">
      <form  action="home.html" name="loginForm"> 
      <table style="width:603px; height:243px; float-align:center">
        <tr>
          <td style="width:50%; height:100px; text-align:center">&nbsp;</td>
          <td style="width:50%">&nbsp;          </td>
        </tr>
        <tr>
          <td style="height:30px; text-align:center">User name
            <input name="name" type="text" class="logininput" id="name" size="25"></td>
          <td style="height:30px; vertical-align:top; color:blue">*Please input "test" for now.</td>
        </tr>
        <tr>
          <td style="height:30px; text-align:center">Password &nbsp;
            <input name="pwd" type="password" class="logininput" id="pwd" size="25"></td>
          <td style="height:30px; vertical-align:top; color:blue">*Please input "test" for now.;</td>
        </tr>
        <tr>
          <td style="height:30px; text-align:center">
            <input name="submit" type="submit" class="btn_grey" value="Login" onclick="return checkLogin()">&nbsp;
            <input name="reset" type="reset" class="btn_grey" value="Reset">&nbsp;
            <input name="close" type="button" class="btn_grey" value="Close" onClick="window.close();">
            </td>
          <td style="height:30px; text-align:center; vertical-align:top">&nbsp;</td>
        </tr>
        <tr>
          <td style="height:30px; text-align:center"><a href="register.html" class="a2">Register</a></td>
          <td style="height:30px; text-align:center; vertical-align:top">&nbsp;</td>
        </tr>
      </table>
      </form> 
      </td>
      <td style="width:30%; background-color:#86C1E6"><br></td>
    </tr>
  </table>
 </body>
</html>
