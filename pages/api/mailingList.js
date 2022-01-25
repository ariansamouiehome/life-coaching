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
    const mailData = {
        from: 'ariansamouiecoach@outlook.com',
        to: req.body.email,
        subject: 'TODAY IS THE DAY!',
        text: `
                <img src="https://ariansamouie.com/images/logo-single.svg" style="max-width: 320px;"/>
                <h1>Meditation Session</h1>
                
                <h2>Hi ${req.body.firstName}</h2>
                
                <p>Great news.</p>
                
                <p>It's the day of the "Letting go online meditation session".</p>
                
                <p>In the session today we will talk about our thoughts, how we become addicted to them and how the stress caused by them plays its role of pushes the genetic buttons of disease in our bodies.</p>
                
                <p>Then we will get into the meditation and start learning how to observe our thoughts in order to be able to release ourselves from the stress caused by them.</p>
                
                <p>I will also ask a couple of questions for you to answer <strong>to yourself</strong>. It might be worth having a pen and pad ready to assist yourself.</p>
                
                <p>These questions are built so that they can assist you with being able to align with better thinking thoughts.</p>
                
                <p>I'm very ecxited to see you all there.</p>
                
                <br />
                <p>Here is the link for the meeting.</p>
                <h2><strong>25th January <u>(Today)</u> 8pm (GMT)</strong></h2>
                <a href="https://us04web.zoom.us/j/76063040928?pwd=c2E2U21sVVNEdjNTWUlXZjNIY1hoUT09" target="_blank"
                    style="width: 100%; max-width: 320px; display: block; padding: 15px; text-align: center; color: #fff; background: #2D8CFF; text-decoration: none; border-radius: 5px;"
                >
                    Join Zoom Call
                </a>
                
                <br />
                <p>To learn more about why we do what we do, visit my <a href="https://www.youtube.com/channel/UCJLf_QdB9icW3mhCPX66brg" style="color:#d2a94e;">YouTube channel</a> to watch my videos.</p>
                
                
                <br /> <h4><u>Social Media</u></h4> <p><a href="https://www.youtube.com/channel/UCJLf_QdB9icW3mhCPX66brg" style="color:#d2a94e;">Youtube</a> | <a href="https://www.instagram.com/arian_samouie/" style="color:#d2a94e;">Instagram</a> | <a href="https://www.facebook.com/arian.samouie/" style="color:#d2a94e;">Facebook</a> | <a href="https://www.tiktok.com/@arian_samouie?" style="color:#d2a94e;">TikTok</a> | <a href="https://soundcloud.com/arian_samouie" style="color:#d2a94e;">Soundcloud</a> | <a href="https://ariansamouie.com/" style="color:#d2a94e;">ariansamouie.com</a></p>
                
                <br />
                <p>Kind regards,</p>
                <br />
                <p><strong>Arian Samouie</strong></p>
        `,

        html: `
                <img src="https://ariansamouie.com/images/logo-single.svg" style="max-width: 320px;"/>
                <h1>Meditation Session</h1>
                
                <h2>Hi ${req.body.firstName}</h2>
                
                <p>Great news.</p>
                
                <p>It's the day of the "Letting go online meditation session".</p>
                
                <p>In the session today we will talk about our thoughts, how we become addicted to them and how the stress caused by them plays its role of pushes the genetic buttons of disease in our bodies.</p>
                
                <p>Then we will get into the meditation and start learning how to observe our thoughts in order to be able to release ourselves from the stress caused by them.</p>
                
                <p>I will also ask a couple of questions for you to answer <strong>to yourself</strong>. It might be worth having a pen and pad ready to assist yourself.</p>
                
                <p>These questions are built so that they can assist you with being able to align with better thinking thoughts.</p>
                
                <p>I'm very ecxited to see you all there.</p>
                
                <br />
                <p>Here is the link for the meeting.</p>
                <h2><strong>25th January <u>(Today)</u> 8pm (GMT)</strong></h2>
                <a href="https://us04web.zoom.us/j/76063040928?pwd=c2E2U21sVVNEdjNTWUlXZjNIY1hoUT09" target="_blank"
                    style="width: 100%; max-width: 320px; display: block; padding: 15px; text-align: center; color: #fff; background: #2D8CFF; text-decoration: none; border-radius: 5px;"
                >
                    Join Zoom Call
                </a>
                
                <br />
                <p>To learn more about why we do what we do, visit my <a href="https://www.youtube.com/channel/UCJLf_QdB9icW3mhCPX66brg" style="color:#d2a94e;">YouTube channel</a> to watch my videos.</p>
                
                
                <br /> <h4><u>Social Media</u></h4> <p><a href="https://www.youtube.com/channel/UCJLf_QdB9icW3mhCPX66brg" style="color:#d2a94e;">Youtube</a> | <a href="https://www.instagram.com/arian_samouie/" style="color:#d2a94e;">Instagram</a> | <a href="https://www.facebook.com/arian.samouie/" style="color:#d2a94e;">Facebook</a> | <a href="https://www.tiktok.com/@arian_samouie?" style="color:#d2a94e;">TikTok</a> | <a href="https://soundcloud.com/arian_samouie" style="color:#d2a94e;">Soundcloud</a> | <a href="https://ariansamouie.com/" style="color:#d2a94e;">ariansamouie.com</a></p>
                
                <br />
                <p>Kind regards,</p>
                <br />
                <p><strong>Arian Samouie</strong></p>
        `,
    }

    try {
        const emailResponse = await transporter.sendMail(mailData);
        return res.status(200).json({emailResponse});
    } catch (err) {
        return res.status(500).json(err || {error: 'ERROR'});
    }
}
