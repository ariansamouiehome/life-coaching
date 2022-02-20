import React from "react";

export default async (req, res) => {

    // const fs = require('fs');
    // const emailArray = fs.readFileSync('emailList.txt').toString();
    // const jsEmailArray = JSON.parse(emailArray);

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.FORM_EMAIL,
            pass: process.env.FORM_PASSWORD,
        },
        secure: true,
    })
    const subject = 'New Meditation Sessions';
    const bodyText = `
        <img src="https://ariansamouie.com/images/logo-single.svg" style="max-width: 320px;"/>
        <h1>What do they do?</h1>
        
        <h2>Hi ${req.body.firstName}.</h2>   
        
        <p>I'm hosting 3 meditation sessions.</p>
        <br/>
        <p>I've moved to MeetUp and will be using this platform for all my onlne meditation sessions.</p>
        <p>In this video I explain what these sessions are for and how each meditation helps you heal yourself.</p>

        <a href="https://www.youtube.com/watch?v=dB4-nvmaPoY" target="_blank"
            style="width: 100%; max-width: 320px; display: block; padding: 15px; text-align: center; color: #fff; background: #c4302b; text-decoration: none; border-radius: 5px;"
        >
            Watch Video
        </a> 
        <br />
        <br />
        
        <p>To stay up to date with everything that is going on and be notified when I create new sessions, join my MeetUp group.</p>
        <br />
        <p><strong>To join my MeetUp group about all meditation sessions I will be hosting, click on the button below.</strong></p>
        <a href="https://www.meetup.com/online-healing-meditation/" target="_blank"
            style="width: 100%; max-width: 320px; display: block; padding: 15px; text-align: center; color: #fff; background: #e51937; text-decoration: none; border-radius: 5px;"
        >
            Join MeetUp Group
        </a>
        
        
        <br />
        <p><strong>Alternativley you can join by reserving your place on my website, click the button below.</strong></p>
        <a href="https://ariansamouie.com/meditation-sessions" target="_blank"
            style="width: 100%; max-width: 320px; display: block; padding: 15px; text-align: center; color: #fff; background: #d2a94e; text-decoration: none; border-radius: 5px;"
        >
            Reserve Your Position
        </a>
        
        <br />
        <p>To learn more about why we do what we do, visit my <a href="https://www.youtube.com/channel/UCJLf_QdB9icW3mhCPX66brg" style="color:#d2a94e;">YouTube channel</a> to watch my videos.</p>
        
        
        <br /> <h4><u>Social Media</u></h4> <p><a href="https://www.youtube.com/channel/UCJLf_QdB9icW3mhCPX66brg" style="color:#d2a94e;">Youtube</a> | <a href="https://www.instagram.com/arian_samouie/" style="color:#d2a94e;">Instagram</a> | <a href="https://www.facebook.com/arian.samouie/" style="color:#d2a94e;">Facebook</a> | <a href="https://www.tiktok.com/@arian_samouie?" style="color:#d2a94e;">TikTok</a> | <a href="https://soundcloud.com/arian_samouie" style="color:#d2a94e;">Soundcloud</a> | <a href="https://ariansamouie.com/" style="color:#d2a94e;">ariansamouie.com</a></p>
        
        <br />
        <p>Kind regards,</p>
        <br />
        <p><strong>Arian Samouie</strong></p>
    `;


    const mailData = {
        from: 'ariansamouiecoach@outlook.com',
        to: req.body.email,
        subject: subject,
        text: bodyText,
        html: bodyText,
    }

    try {
        const emailResponse = await transporter.sendMail(mailData);
        return res.status(200).json({emailResponse});
    } catch (err) {
        return res.status(500).json(err || {error: 'ERROR'});
    }
}
