 var express  = require("express"),
 app = express(),
 bodyParser = require("body-parser"),
 mongoose = require("mongoose");

// app config
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//Mongoose/model config
var blobSchema = new mongoose.Schema({
	title: String,
	image: {type: String, default: "placeholderimage.jpeg"},
	body: String,
	created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// Routs (Restful routs)




app.listen(8080, function () {
    console.log("server has started");
});