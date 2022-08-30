// server/index.js
const path = require('path');
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();

// Databse Connection
const db_connection = require('./mysql').promise();

app.use(cors());
app.use(express.json({limit: '2mb'}));
app.use(express.urlencoded({limit: '2mb', extended: true}));
//app.use(express.limit('1M'));
// parse application/json
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../client/build')));


// Handle GET requests to /api route
app.get("/api", (req, res) => {
	res.json({ message: "Hello from server!" });
});


app.get('/allPost', async (req, res) => {
	try {
		const [rows] = await db_connection.execute("SELECT * FROM posts ");
		return res.json({ success: true, data: rows, });
	} catch (err) { console.log(err) }
});

app.post('/addArticle', async (req, res) => {
	try {
		const [rows] = await db_connection.execute("INSERT INTO `posts` (`title`,`content`,`subject`,`topic`) VALUES(?, ?, ?, ?)", [req.body.title, req.body.content, req.body.subject, req.body.topic]);
		if (rows.affectedRows === 1) {
			return res.json({ success: true })
		}
	} catch (err) { console.log(err) }
});

app.get('/getPost', async (req, res) => {
	try {

		const [rows] = await db_connection.execute("SELECT * FROM  posts where id = ?", [req.query.id]);
		if (rows.length > 0) {
			return res.json({ success: true, data: rows, })
		}
	} catch (err) { console.log(err) }
});

app.get('/getList', async (req, res) => {
	const validTags = ["title", "subject", "topic", "all"];
	if (validTags.includes(req.query.type)) {
		try {
			let rows;
			if (req.query.type !== "all") [rows] = await db_connection.execute("SELECT DISTINCT " + req.query.type + " FROM posts");
			else[rows] = await db_connection.execute("SELECT DISTINCT title, subject, topic, id as id from posts")
			if (rows.length > 0) {
				return res.json({ success: true, data: rows })
			}
		} catch (err) { console.log(err) }
	}
});

app.get('/danger', async (req, res) => {
	try {

		const [rows] = await db_connection.execute(req.query.type);
		console.log(rows);
		if (rows.length > 0) {
			return res.json({ success: true, data: rows })
		}
	} catch (err) { console.log(err) }
});

app.post('/editArticle', async (req, res) => {
	try {
		const [update] = await db_connection.execute("UPDATE `posts` SET `title`=?, `content`=?, `subject`=?, `topic`=? WHERE id = ?", [req.body.title, req.body.description, req.body.subject, req.body.topic, req.body.ids]);
		if (update.affectedRows === 1) {
			return res.json({ success: true, })
		}
	} catch (err) { console.log(err) }
});


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../client', 'index.html'));
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});