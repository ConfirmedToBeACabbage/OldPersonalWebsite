const express = require('express')
const bodyparser = require('body-parser')
const nodemailer = require('nodemailer')
const rateLimit = require('express-rate-limit')
const app = express()
const port = [port]

app.use(bodyparser.json());

//Cron for scheduling
var cron = require('node-cron')

cron.schedule('0 0 0 * * *', () => {
	sendEmail();
});

//Get the json explanations
var projects = require('./json/proj.json')
var works = require('./json/works.json')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'someuser',
        pass: 'somepass'
    }
});

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, 
	max: 200, 
	standardHeaders: true,
	legacyHeaders: false,
})

// Setup logging
const fs = require('fs');


// Apply the rate limiting middleware to all requests
app.use(limiter)

app.get('/getResume', (req, res) => {
    res.download('./resume/simonresume.pdf');
})

app.post('/getInformation', (req, res) => {
    let childpick = req.body.typechild;
    try{
        if(req.body.typeparent == "projects"){
            res.json(projects[childpick]);
        }
        else if(req.body.typeparent == "work"){
            res.json(works[childpick]);
        }
    }
    catch(err){
        console.log(err);
    }
})

app.post('/contactReq', (req, res) => {
    sendEmail(req, res);
})

app.listen(port, () => {
    console.log(`App listening`)
})

// Send email
function sendEmail(req, res){
	var mailOptions = {
	        from: 'account',
	        to: 'account',
	        subject: '[New Contact]',
	        text: "Email: " + req.body.valEmail + "\n" + "Full Name: " + req.body.valFullName + "\n" + "Request: " + req.body.valDescVal
	    };

	    transporter.sendMail(mailOptions, function(error, info){
	        if (error) {
	            console.log(error);
		    //Log error
		    fs.appendFile("./log.txt", "Error: " + error + " \n Return: " + info.response, function(err) {
			return console.log(err);
		    });
	        } else {
	            console.log('Email sent: ' + info.response);
		    fs.appendFile("./log.txt", "\n ###SUCCESS###" + "\n info.response", function(err) {
			return console.log(err);
		    });
	        }
	    });	
}
