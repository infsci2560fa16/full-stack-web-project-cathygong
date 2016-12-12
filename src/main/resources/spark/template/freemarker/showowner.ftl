<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html;charset=utf-8">
<title>Owner Information</title>
<link href="../stylesheets/style.css" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
</head>
<body>
<table style="width:776px; margin-left:auto; margin-right:auto" class="tableBorder">
  <tr>
    <td>
<table style="width:776px; float-align:center" >
  <tr>
    <td style="height:115px; text-align:right; vertical-align:bottom; background-color:#FD9C11; background-image:url(../Images/banner.gif);">
    <table style="width:100%"  >
      <tr>
        <td style="height:26px; text-align:left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
      </tr>
    </table></td>
  </tr>
  <tr>
    <td style="height:33px; text-align:right; background-color:#FD9C11;background-image:url(../Images/menu_line1.gif);">
    <table style="width:100%">
      <tr>
        <td style="width:5%"></td>
        <td style="width:23%; text-align:center"><script type=text/javascript>
		document.write("<span id='labtime' width='120px' Font-Size='9pt'></span>")
		setInterval("labtime.innerText=new Date().toLocaleString()",1000)
		</script></td>
        <td style="width:70%; text-align:right">
          <a href="../home" class="a1">Home</a> |
          <a href="../book_in_need" class="a1">Book in need</a> |
          <a href="../book_on_sale.html" class="a1" >Book on sale</a> | 
          <a href="../pwd_modify.html" class="a1">Change password</a> | 
          <a href="../delete_account.html" class="a1">Delete account</a> | 
          <a href="../about.html" class="a1">About iLibrary</a>
          </td>
        <td style="width:2%">&nbsp;</td>
      </tr>
    </table>
</td>
  </tr>
</table>

	</td>
  </tr>
  <tr>
	<td>
	<table style="width:100%"  >
	  <tr>
		<td style="vertical-align:top; background-color:#FFFFFF">
      <table style="width:99%; height:510px; float-align:center; background-color:#FFFFFF"   class="tableBorder_gray">
        <tr>
          <td style="height:510px; text-align:center; vertical-align:top; padding:5px;">
            <table style="width:98%; height:487px" >
                <tr>
                  <td style="text-align:center; vertical-align:top">
                    <table style="width:100%; height:493px; text-align:center">
                      <tr>
                        <td style="text-align:center; vertical-align:top">
                        <h2> Book Owner Information</h2>
                        <#list 0..pittid?size-1 as i>
                          <p style="font-size:11pt"><b>Pitt ID:</b>  ${pittid[i]} </p>
                          <p style="font-size:11pt"><b>Name:</b>  ${uname[i]} </p>
                          <p style="font-size:11pt"><b>Email:</b>  ${email[i]} </p>
                          
                          <p style="font-size:11pt"><b>Phone Number:</b>  ${phonenum[i]} </p>
                          <p style="font-size:11pt"><b>Address:</b>  ${address[i]} </p>
                        </#list>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
	</table>
</td>
</tr>
</table>
</body>
</html>
