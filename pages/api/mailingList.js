import React from "react";

export default async (req, res) => {

    const fs = require('fs');

    const emailArray = fs.readFileSync('emailList.txt').toString();
    const jsEmailArray = JSON.parse(emailArray);

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
    const mailData = {
        from: 'ariansamouiecoach@outlook.com',
        to: 'ariansamouie@gmail.com',
        subject: "Meditation Session",
        text: `
                <img src="https://ariansamouie.com/images/logo-single.svg" style="max-width: 400px;"/>
                <h1>Arian Samouie Meditation Session</h1>
                <p><strong>28th Dec 8pm (Zoom Call)</strong></p>
                <h3>Hey Guys,</h3> 
                <p>I hope you all had a great Christmas.</p>
                <p>An exiting reminder that the meditation session is <u><strong>TODAY</strong></u>.</p>
                <p>Just in case it helps, Here is the link for the session - <a href="https://us04web.zoom.us/j/76063040928?pwd=c2E2U21sVVNEdjNTWUlXZjNIY1hoUT09">CLICK HERE TO JOIN THE ZOOM CALL</a></p>
                <h2><u>The Plan</u></h2> 
                <p>The call will start at 8pm.</p> 
                <p>The session will start soon after that.</p>
                <p>Remember that all you will need is a pillow, Somewhere comfortable to lay down (maybe a bed), Zoom (the video calling app) and Preferably headphones.</p>
                <p>I'm exited to see you there.</p>
                <br />
                <p>Kind regards,</p>
                <p><strong>Arian Samouie</strong></p>
                <br /> <h4><u>Social Media</u></h4> <p><a href="https://www.youtube.com/channel/UCJLf_QdB9icW3mhCPX66brg">Youtube</a> | <a href="https://www.instagram.com/arian_samouie/">Instagram</a> | <a href="https://www.facebook.com/arian.samouie/">Facebook</a> | <a href="https://www.tiktok.com/@arian_samouie?">TikTok</a> | <a href="https://soundcloud.com/arian_samouie">Soundcloud</a> | <a href="https://ariansamouie.com/">ariansamouie.com</a></p>
        `,

        html: `
                <img src="https://ariansamouie.com/images/logo-single.svg" style="max-width: 400px;"/>
                <h1>Arian Samouie Meditation Session</h1>
                <p><strong>28th Dec 8pm (Zoom Call)</strong></p>
                <h3>Hey Guys,</h3> 
                <p>I hope you all had a great Christmas.</p>
                <p>An exiting reminder that the meditation session is <u><strong>TODAY</strong></u>.</p>
                <p>Just in case it helps, Here is the link for the session - <a href="https://us04web.zoom.us/j/76063040928?pwd=c2E2U21sVVNEdjNTWUlXZjNIY1hoUT09">CLICK HERE TO JOIN THE ZOOM CALL</a></p>
                <h2><u>The Plan</u></h2> 
                <p>The call will start at 8pm.</p> 
                <p>The session will start soon after that.</p>
                <p>Remember that all you will need is a pillow, Somewhere comfortable to lay down (maybe a bed), Zoom (the video calling app) and Preferably headphones.</p>
                <p>I'm exited to see you there.</p>
                <br />
                <p>Kind regards,</p>
                <p><strong>Arian Samouie</strong></p>  
                <br /> <h4><u>Social Media</u></h4> <p><a href="https://www.youtube.com/channel/UCJLf_QdB9icW3mhCPX66brg">Youtube</a> | <a href="https://www.instagram.com/arian_samouie/">Instagram</a> | <a href="https://www.facebook.com/arian.samouie/">Facebook</a> | <a href="https://www.tiktok.com/@arian_samouie?">TikTok</a> | <a href="https://soundcloud.com/arian_samouie">Soundcloud</a> | <a href="https://ariansamouie.com/">ariansamouie.com</a></p>
        `,
    }

    try {
        const emailResponse = await transporter.sendMail(mailData);
        return res.status(200).json({ emailResponse });
    } catch (err) {
        return res.status(500).json(err || { error: 'ERROR' });
    }
}
