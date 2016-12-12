window.onload = displayBooks;
function displayBooks ()
{
  $.ajax({
    url : "/api/book_on_sale",
    success : function(result) {
      var books = JSON.parse(result);
      if(books.sale_bname.length>0){
        $("div#books").append(
            '<table style="width:740px">'+
              '<tr style="text-align:center">'+
                '<td style="width:25%; height:25px"><b>Name</b></td>'+
                '<td style="width:10%"><b>Edition</b></td>'+
                '<td style="width:25%"><b>Author</b></td>'+
                '<td style="width:10%"><b>ISBN-13</b></td>'+
                '<td style="width:10%"><b>ISBN-10</b></td>'+
                '<td style="width:10%"><b>Seller ID</b></td>'+
                '<td style="width:10%"><b>Post Time</b></td>'+
              '</tr>');
        for ( var i = 0; i < books.sale_bname.length; i++) {
          $("div#books").append(
            '<tr>'+
                '<td style="width:25%; height:25px; text-align:center">'+ books.sale_bname[i] +'</td>' +
                '<td style="width:10%; text-align:center">'+ books.sale_edition[i] +'</td>' +
                '<td style="width:25%; text-align:center">'+ books.sale_author[i] +'</td>' +
                '<td style="width:10%; text-align:center">'+ books.sale_isbn13[i] +'</td>' +
                '<td style="width:10%; text-align:center">'+ books.sale_isbn10[i] +'</td>' +
                '<td style="width:10%; text-align:center"><a href=/showowner/'+ books.sale_pittid[i]+' class="a3">'+ books.sale_pittid[i]+'</a></td>' +
                '<td style="width:10%; text-align:center">'+ books.sale_postdate[i] +'</td>'+
            '</tr>'
          );
        }
        $("div.books").append(
          '</table>');
      }
    }
  });
}
