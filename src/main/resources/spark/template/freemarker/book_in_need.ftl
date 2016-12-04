<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html;charset=utf-8">
<title>Book in need</title>
<link href="stylesheets/style.css" rel="stylesheet">
</head>
<body>
<table style="width:776px; margin-left:auto; margin-right:auto" class="tableBorder">
  <tr>
    <td>
<table style="width:776px; float-align:center">
  <tr>
    <td style="height:115px; text-align:right; vertical-align:bottom; background-color:#FD9C11; background-image:url(Images/banner.gif);">
    <table style="width:100%">
      <tr>
        <td style="height:26px; text-align:left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User: test</td>
      </tr>
    </table></td>
  </tr>
  <tr>
    <td style="height=33px; text-align:right; background-color:#FD9C11; background-image:url(Images/menu_line1.gif);">
     <#include "navigation.ftl">
    </td>
  </tr>
</table>
    </td>
  </tr>
  <tr>
	<td style="background-color:#FFFFFF">
	<table style="width:100%">
  <tr>
    <td style="vertical-align:top; background-color:#FFFFFF">
      <table style="width:100%; height=510px; float-align:center; background-color:#FFFFFF" class="tableBorder_gray">
  <tr>
    <td style="text-align:center; vertical-align:top; padding:5px">
      <table style="width:738px">
      <tr>
        <td style="height:148px; vertical-align:top">
          <table style="width:738px">
          <tr>
            <td style="width:753px; height:44px; background-image:url(Images/book_in_need.gif);">&nbsp;</td>
          </tr>
          <tr>
            <td style="height:72px; vertical-align:top; background-image:url(Images/book_on_sale_1.gif);">
            <table style="width:740px">
              <tr style="text-align:center">
                <td style="width:25%; height:25px"><b>Name</b></td>
                <td style="width:10%"><b>Edition</b></td>
                <td style="width:25%"><b>Author</b></td>
                <td style="width:10%"><b>ISBN-13</b></td>
                <td style="width:10%"><b>ISBN-10</b></td>
                <td style="width:10%"><b>Requester ID</b></td>
                <td style="width:10%"><b>Post Time</b></td>
              </tr>
        <#list 0..need_bname?size-1 as i>
              <tr>
                <td style="height:25px; text-align:center">${need_bname[i]}</td>
                <td style="text-align:center">${need_edition[i]}</td>
                <td style="text-align:center">${need_author[i]}</td>
                <td style="text-align:center">${need_isbn13[i]}</td>
                <td style="text-align:center">${need_isbn10[i]}</td>
                <td style="text-align:center">${need_pittid[i]}</td>
                <td style="text-align:center">${need_postdate[i]}</td>
              </tr>
        </#list>
            </table></td>
          </tr>
          <tr style="height:25px; text-align:center">
              <td style="color:blue">Note: These will be read from database at the final version.</td>
          </tr>
          <tr>
            <td style="height:19px; background-image:url(Images/book_on_sale_2.gif);">&nbsp;</td>
          </tr>
        </table>
          </td>
      </tr>
    </table>
      <p>&nbsp;</p></td>
  </tr>
</table></td>
  </tr>
</table>
</td>
  </tr>
</table>
</body>
</html>