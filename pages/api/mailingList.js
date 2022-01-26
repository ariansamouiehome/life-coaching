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
    const bodyText = `
        <img src="https://ariansamouie.com/images/logo-single.svg" style="max-width: 320px;"/>
        <h1>We all experience trauma!</h1>
        
        <h2>Hi ${req.body.firstName}</h2>
        
        <p>Have you ever thought why you feel the way you do?</p>
        <p>How can we get rid of the anxiety that we feel?</p>
        <p>Ever wonder how much control you're actually in of yourself?</p>
        
        <p>Your personality and how you feel has to do with the experiences you have had in your past more than anything else.</p>
        <h2>What actually is TRAUMA?</h2>
        <p>We all experience trauma throughout our lives. It's one of the most normal things we go through as a living human being.</p>
        <p>We have been brought up in a society that has tought us to be embarresed about having mental trauma. But that couldn't be further from what it actually is.</p>
        
        <p>Once you get an understanding of what trauma actually is, as well as what happens at the time of trauma, you see that it's a very normal thing.</p> 
        <p>Something we all go through. But something we all need to <strong>heal</strong> from.</p>
        
        <p>If you fell out of a tree and broke your legs, you would need to heal your broken legs.</p>
        <p>So it's very normal, as well as the most helpful thing a human can do for themselves, to <strong>heal</strong> the mental trauma too.</p>
        <br />
        <p><strong>To get a better understanding of what happens to us and how we deal with our traumatic experiences, watch my new video on YouTube by licking on the button below</strong></p>
        
        <a href="https://www.youtube.com/watch?v=v8GP6tn4798" target="_blank"
            style="width: 100%; max-width: 320px; display: block; padding: 15px; text-align: center; color: #fff; background: #c4302b; text-decoration: none; border-radius: 5px;"
        >
            Watch YouTube Video
        </a>
        
        <p>It's ok to work like a human</p>
        <p>You're doing great, keep going.</p>
        
        <br />
        <p><strong>To join my <u>FREE</u> online meditation session, click the button below. 8th Feb - 8:00pm (Zoom call)</strong></p>
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
        subject: 'What is Trauma?',
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
