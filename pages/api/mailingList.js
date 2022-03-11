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
    const subject = 'New Podcast Series';
    const bodyText = `
        <img src="https://ariansamouie.com/images/logo-single.svg" style="max-width: 320px;"/>
        <h1>Arian Talks - Podcast Series.</h1>
        <br />
        <h2>Hi ${req.body.firstName}.</h2>   
        <p>Great news, my new podcast series (Arian Talks) is <strong style="color:#d2a94e;">now live</strong>.</p>
        <p>The goal of this podcast series is to be able to give you a better understanding of how you work as a human and what your healing journey will look like.</p>
        <p>I am going to upload this series on all podcast platforms but for now you guys get an early sneak peek of it on YouTube.</p>
        
        
        <br/>
        <p>Watch the first episode titled "Why We Feel The Way We Do"</p>
        <a href="https://youtu.be/ycRuRUYyZ5g" target="_blank"
            style="width: 100%; max-width: 320px; display: block; padding: 15px; text-align: center; color: #fff; background: #c4302b; text-decoration: none; border-radius: 5px;"
        >
            Watch Episode One
        </a>
        
        <br />
        <hr>
        <br />
        <h2><strong>MeetUp</strong></h2>
        <p>To stay up to date with all the news about my new meditation sessions, join my MeetUp group.</p>
        <a href="https://www.meetup.com/online-healing-meditation/" target="_blank"
            style="width: 100%; max-width: 320px; display: block; padding: 15px; text-align: center; color: #fff; background: #e51937; text-decoration: none; border-radius: 5px;"
        >
            Join MeetUp Group
        </a>
       
        
        <br />
        <br />
        <p>To learn more about why we do what we do, visit my <a href="https://www.youtube.com/channel/UCJLf_QdB9icW3mhCPX66brg" style="color:#d2a94e;">YouTube channel</a> to watch my videos.</p>
        
        <br /> 
        <h4><u>Social Media</u></h4> <p><a href="https://www.youtube.com/channel/UCJLf_QdB9icW3mhCPX66brg" style="color:#d2a94e;">Youtube</a> | <a href="https://www.instagram.com/arian_samouie/" style="color:#d2a94e;">Instagram</a> | <a href="https://www.facebook.com/arian.samouie/" style="color:#d2a94e;">Facebook</a> | <a href="https://www.tiktok.com/@arian_samouie?" style="color:#d2a94e;">TikTok</a> | <a href="https://soundcloud.com/arian_samouie" style="color:#d2a94e;">Soundcloud</a> | <a href="https://ariansamouie.com/" style="color:#d2a94e;">ariansamouie.com</a></p>
        
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
