var express = require('express');
var http = require('http');
var path = require('path');
var nodemailer = require('nodemailer');
var cors = require('cors');



var app = express();
var server = http.Server(app);
var port = 5000;

app.set("port", port);
//initialize web server
server.listen(port, function () {
    console.log("Starting server on port:"  + port)
})

//middleware
app.use(cors({origin:"*"}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "page/index.html")));

//routing

app.get("/", function (req, response) {
    response.sendFile(path.join(__dirname, "page/index.html"))
})
app.post("/api/sendemail", async function (req, response) {


    const { senderemail, sendername, sendermessage } = req.body


    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "ac0a20ca30e93d",
            pass: "4b02b0e77d978d"
        }
    });
    var mailOptions = {
        from: "sharon@gmail.com",
        to: senderemail,
        subject: `Test email from ${sendername}`,
        text: sendermessage
    }

    transport.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log("Email Send: " + info.response)
        }
        response.redirect("/")
    })

})


