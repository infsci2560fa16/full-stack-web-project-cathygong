window.onload = displayAbout;

function displayAbout()
{
  $.ajax({
    url : "/api/about",
    type : "get",
    success : function(result) {
      sysInfo = result.getElementsByTagName("SystemInfo");
      $("div#about").append(
            '<h1>About iLibrary</h1>'+
              '<p style="font-size:11pt"><b>System:</b>  '+ sysInfo[0].childNodes[0].firstChild.nodeValue +'</p>'+
              '<p style="font-size:11pt"><b>Version:</b>  '+ sysInfo[0].childNodes[1].firstChild.nodeValue +'</p>'+
              '<p style="font-size:11pt"><b>Since:</b>  '+ sysInfo[0].childNodes[2].firstChild.nodeValue +'</p>'+
              '<p style="font-size:11pt"><b>Release Date:</b>  '+ sysInfo[0].childNodes[3].firstChild.nodeValue +'</p>'+
              '<p style="font-size:11pt"><b>Developer:</b>  '+ sysInfo[0].childNodes[4].firstChild.nodeValue +'</p>'+
              '<p style="font-size:11pt"><b>Pitt ID:</b>  '+ sysInfo[0].childNodes[5].firstChild.nodeValue +'</p>'+
              '<p style="font-size:11pt"><b>Emali:</b>  '+ sysInfo[0].childNodes[6].firstChild.nodeValue +'</p>'+
              '<p style="font-size:11pt"><b>Phone:</b>  '+ sysInfo[0].childNodes[7].firstChild.nodeValue +'</p>'+
              '<p style="font-size:11pt"><b>Address:</b>  '+ sysInfo[0].childNodes[8].firstChild.nodeValue +'</p>'+
              '<p style="font-size:11pt"><b>City:</b>  '+ sysInfo[0].childNodes[9].firstChild.nodeValue +'</p>'+
              '<p style="font-size:11pt"><b>State:</b>  '+ sysInfo[0].childNodes[10].firstChild.nodeValue +'</p>'+
              '<p style="font-size:11pt"><b>Country:</b>  '+ sysInfo[0].childNodes[11].firstChild.nodeValue +'</p>');
      }
    });
  }
