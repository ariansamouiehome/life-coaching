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
    const subject = 'You Are Good Enough';
    const bodyText = `
        <img src="https://ariansamouie.com/images/logo-single.svg" style="max-width: 320px;"/>
        <h1>Arian Talks - Podcast Series.</h1>
        <br />
        <h2>Hi ${req.body.firstName}.</h2>   
        <p>Great news, episode two of Arian Talks is <strong style="color:#d2a94e;">now live</strong>.</p>
        <p>In this episode I talk about how our up bringing make us develop the belief that we are not good enough.</p>
        <p>You are good enough to be loved just for being who you are.</p>
        <br/>
        <p>This is something that every generation has been suffering from due to the way we have been brought up.</p>
        <p>You were good enough when you were born without needing to prove it to anyone. The only reason you feel like that now is because of the way you have been programmed.</p>
        <p>To get a much better understanding of this, watch my new YouTube video.</p>
        
        <br/>
        <p>Watch Episode 2 Titled - The "I'm Not Good enough" Belief</p>
        <a href="https://youtu.be/S8MwB6GqHWE" target="_blank"
            style="width: 100%; max-width: 320px; display: block; padding: 15px; text-align: center; color: #fff; background: #d2a94e; text-decoration: none; border-radius: 5px;"
        >
            Watch Episode Two
        </a>
        
        <br />
        <hr>
        <br />
        <h2><strong>MeetUp - FREE Online Meditation</strong></h2>
        <p>To stay up to date with all the news about my FREE meditation sessions, join my MeetUp group.</p>
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
