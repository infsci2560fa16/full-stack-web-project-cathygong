import java.sql.*;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.Map;

import java.net.URI;
import java.net.URISyntaxException;

import static spark.Spark.*;
import spark.template.freemarker.FreeMarkerEngine;
import spark.ModelAndView;
import static spark.Spark.get;

import com.heroku.sdk.jdbc.DatabaseUrl;

public class Main {

  public static void main(String[] args) {

    port(Integer.valueOf(System.getenv("PORT")));
    staticFileLocation("/public");

    get("/hello", (req, res) -> "Hello World");

    get("/", (request, response) -> {
            Map<String, Object> attributes = new HashMap<>();
            attributes.put("message", "Hello World!");

            return new ModelAndView(attributes, "index.ftl");
        }, new FreeMarkerEngine());

    get("/db", (req, res) -> {
      Connection connection = null;
      Map<String, Object> attributes = new HashMap<>();
      try {
        connection = DatabaseUrl.extract().getConnection();

        Statement stmt = connection.createStatement();
        stmt.executeUpdate("CREATE TABLE IF NOT EXISTS ticks (tick timestamp)");
        stmt.executeUpdate("INSERT INTO ticks VALUES (now())");
        //ResultSet rs = stmt.executeQuery("SELECT tick FROM ticks");
        ResultSet rs = stmt.executeQuery("select * from userinfo, booklist, book_owner where booklist.bid=book_owner.bid and userinfo.uid=book_owner.uid and book_owner.status = 'TRUE' order by book_owner.post_date desc limit 3");

        ArrayList<String> output = new ArrayList<String>();
        while (rs.next()) {
          //output.add( "Read from DB: " + rs.getTimestamp("tick"));
          output.add( "Read from DB: " + rs.getString("bname"));
        }

        attributes.put("results", output);
        return new ModelAndView(attributes, "db.ftl");
      } catch (Exception e) {
        attributes.put("message", "There was an error: " + e);
        return new ModelAndView(attributes, "error.ftl");
      } finally {
        if (connection != null) try{connection.close();} catch(SQLException e){}
      }
    }, new FreeMarkerEngine());

    get("/home", (req, res) ->
    {
      Connection connection = null;
      Map<String, Object> attributes = new HashMap<>();
      try{
      connection = DatabaseUrl.extract().getConnection();
      Statement stmt = connection.createStatement();
      //stmt.executeUpdate("CREATE TABLE IF NOT EXISTS (user_email varchar(100),  user_password  varchar(30),  user_name  varchar(30) )");
    //  stmt.executeUpdate("INSERT INTO users_info VALUES ('user_email','user_password','user_name')");
      ResultSet book_sale = stmt.executeQuery("select * from userinfo, booklist, book_owner where booklist.bid=book_owner.bid and userinfo.uid=book_owner.uid and book_owner.status = 'TRUE' order by book_owner.post_date desc limit 3");
      ArrayList<String> sale_bname = new ArrayList<String>();
      ArrayList<String> sale_author = new ArrayList<String>();
      ArrayList<String> sale_edition = new ArrayList<String>();
      ArrayList<String> sale_isbn13 = new ArrayList<String>();
      ArrayList<String> sale_isbn10 = new ArrayList<String>();
      ArrayList<String> sale_pittid = new ArrayList<String>();
      ArrayList<String> sale_postdate = new ArrayList<String>();
      ResultSet book_need = stmt.executeQuery("select * from userinfo, booklist, book_owner where booklist.bid=book_owner.bid and userinfo.uid=book_owner.uid and book_owner.status = 'FALSE' order by book_owner.post_date desc limit 3");
      ArrayList<String> need_bname = new ArrayList<String>();
      ArrayList<String> need_author = new ArrayList<String>();
      ArrayList<String> need_edition = new ArrayList<String>();
      ArrayList<String> need_isbn13 = new ArrayList<String>();
      ArrayList<String> need_isbn10 = new ArrayList<String>();
      ArrayList<String> need_pittid = new ArrayList<String>();
      ArrayList<String> need_postdate = new ArrayList<String>();

    while(book_sale.next())
    {
       sale_bname.add(book_sale.getString("bname"));
       sale_author.add(book_sale.getString("author"));
       sale_edition.add(book_sale.getString("edition"));
       sale_isbn13.add(book_sale.getString("isbn13"));
       sale_isbn10.add(book_sale.getString("isbn10"));
       sale_pittid.add(book_sale.getString("pittid"));
       sale_postdate.add(book_sale.getString("post_date"));
     }
     attributes.put("sale_bname",sale_bname);
     attributes.put("sale_author",sale_author);
     attributes.put("sale_edition",sale_edition);
     attributes.put("sale_isbn13",sale_isbn13);
     attributes.put("sale_isbn10",sale_isbn10);
     attributes.put("sale_pittid",sale_pittid);
     attributes.put("sale_postdate",sale_postdate);

    while(book_need.next())
    {
       need_bname.add(book_need.getString("bname"));
       need_author.add(book_need.getString("author"));
       need_edition.add(book_need.getString("edition"));
       need_isbn13.add(book_need.getString("isbn13"));
       need_isbn10.add(book_need.getString("isbn10"));
       need_pittid.add(book_need.getString("pittid"));
       need_postdate.add(book_need.getString("post_date"));
     }
     attributes.put("need_bname",need_bname);
     attributes.put("need_author",need_author);
     attributes.put("need_edition",need_edition);
     attributes.put("need_isbn13",need_isbn13);
     attributes.put("need_isbn10",need_isbn10);
     attributes.put("need_pittid",need_pittid);
     attributes.put("need_postdate",need_postdate);
     return new ModelAndView(attributes, "home.ftl");
     } catch (Exception e) {
     attributes.put("message", "There was an error: " + e);
     return new ModelAndView(attributes, "error.ftl");
     } finally {
     if (connection != null) try{connection.close();} catch(SQLException e){}
    }}, new FreeMarkerEngine());
    

  }

}
