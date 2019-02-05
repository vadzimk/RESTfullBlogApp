 var express  = require("express"),
 app = express(),
 bodyParser = require("body-parser"),
 mongoose = require("mongoose");

// app config
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs"); //so that we don't need to type .ejs when render
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//Mongoose/model config
var blogSchema = new mongoose.Schema({
	title: String,
	image: {type: String, default: "placeholderimage.jpeg"},
	body: String,
	created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

Blog.create({
	title: "Test Blog",
	image: "https://unsplash.com/photos/K4mSJ7kc0As",
	body: "hello this is a blog-post"
});

// Routs (Restful routs)

app.get("/", function(req, res){
	res.redirect("/blogs");
});
app.get("/blogs", function(req, res){
	Blog.find({}, function(err, blogs){
		if(err){
			console.log(err);
		}else{
			res.render("index.ejs", {blogs: blogs});
		}
	})
	
});
// we need a template called index.ejs in the views directory




app.listen(8080, function () {
    console.log("server has started");
});