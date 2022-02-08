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
    const subject = 'What Is Crying?';
    const bodyText = `
        <img src="https://ariansamouie.com/images/logo-single.svg" style="max-width: 320px;"/>
        <h1>STOP trying to STOP people crying!</h1>
        
        <h2>I know it can sound crazy ${req.body.firstName}.</h2>   
        <h2>But let me explain...</h2>
        
        <p>Crying is not a social thing. It's a biological thing. It's how we as humans work.</p> 
        
        <p>We release emotions by crying. And by stopping the crying we're stopping that release, which means those emotions are still within us. We're still keeping a hold of them. And that is not a healthy state of being.</p>
        
        <p>There are two main reasons why we tell people to stop crying.</p>
        
        <ul>
            <li>1) Because of social conditioning. This is what ever generation has been taught for the longest time. Especially the men. </li>
            <li>2) We actually relate to that bad feeling of someone crying, and it triggers those feelings in us. So because it makes us feel bad that they're crying, we try and stop them.</li>
        </ul>
   
        <p>The goal when we get a bad feeling isn't to get rid of it. Feelings are the bodies way of communicating with us. This is how we work.</p>
        
        <p>Allow people to be who they are. Kids and adults.</p>
        
        <p>If someone is crying for any reason, it's not unreasonable, it's how they feel. It's who they are in that moment. By telling them not to cry you're telling them to be someone other than who they are.</p>
        
        <p>Just be there with their emotions and allow them to express themselves. We all feel the way we do and that's ok and normal.</p>
        
        <p>Should and shouldn't cry are subjective. Crying is a healthy way of releasing our emotions. It's also the way we work as humans.</p>
        
        <p>It's ok to work like a normal human.</p>
        <p>You're doing great, keep going.</p>
        
        
        <a href="https://youtu.be/VimTmPvsT6U" target="_blank"
            style="width: 100%; max-width: 320px; display: block; padding: 15px; text-align: center; color: #fff; background: #c4302b; text-decoration: none; border-radius: 5px;"
        >
            Watch YouTube Short Video
        </a> 
        
        <br />
        <br />
        <p><strong>To join my <u>FREE</u> online "How To Let Go" meditation session, click the button below. 8th Feb - 8:00pm (Zoom call)</strong></p>
        <a href="https://ariansamouie.com/meditation-sessions" target="_blank"
            style="width: 100%; max-width: 320px; display: block; padding: 15px; text-align: center; color: #fff; background: #d2a94e; text-decoration: none; border-radius: 5px;"
        >
            Reserve Your Position
        </a>
        
        <br />
        <p><strong>To join my MeetUp group about all meditation sessions I will be hosting, click on the button below.</strong></p>
        <a href="https://www.meetup.com/online-healing-meditation/" target="_blank"
            style="width: 100%; max-width: 320px; display: block; padding: 15px; text-align: center; color: #fff; background: #e51937; text-decoration: none; border-radius: 5px;"
        >
            Join MettUp Group
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
