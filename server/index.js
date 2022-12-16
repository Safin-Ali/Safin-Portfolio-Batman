const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const smtpTransport = require('nodemailer-smtp-transport');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://PORTFOLIO-SA:yFzRSWPAJVp3csJa@cluster01.rhyj5nw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run () {
    
    const prtDB = client.db('portfolio-data');
    const projectsData = prtDB.collection('projects-data');
    const skillsData = prtDB.collection('skills-data');
    const services = prtDB.collection('services');

        app.get('/projects',async (req,res)=>{
            const filter = {};
            const result = await projectsData.find(filter).toArray();
            res.send(result)
        });

        app.get('/skills',async (req,res)=>{
            const filter = {};
            const result = await skillsData.find(filter).toArray();
            res.send(result)
        });

        app.get('/services',async (req,res)=>{
            const filter = {};
            const result = await services.find(filter).toArray();
            res.send(result)
        });
        
        app.get('/project/:id',async (req,res)=>{
            const filter = {_id: ObjectId(req.params.id)};
            const result = await projectsData.findOne(filter);
            res.send(result)
        });
}

run().catch(console.dir)

    //  send email using Nodemailer
    app.post('/sendEmail',(req,res)=>{

            const reqBody = req.body;

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth:{
                    user: process.env.MY_EMAIL,
                    pass: process.env.MY_PASS
                }
            });

            // sender email and name
            const sender = {
                name: reqBody.visitorName,
                address: reqBody.visitorEmail
            }
    
            // email template
            const mailOptions = {
                from: sender,
                to: process.env.MY_EMAIL,
                subject: `${reqBody.visitorSubject} (My Portfolio)`,
                html: `
                <div>
                    <h3 style="text-align: center;">From : <span style="color: #181D31">${reqBody.visitorEmail}</span></h3>
                </div>
                <div style="margin:25px">
                    ${reqBody.visitorDesc}
                </div>
                `
            };
    
            // send email targeted person
            transporter.sendMail(mailOptions,(err,info)=>{
                if (err) {
                    return console.log('mail sending',err);
                  }
                  res.send(info)
            })
})

app.listen(port,()=>{
    console.log('api running on',port)
})