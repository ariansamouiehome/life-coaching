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
        subject: 'Meditation Session',
        text: `
                <img src="https://ariansamouie.com/images/logo-single.svg" style="max-width: 320px;"/>
                <h3>Arian Samouie's</h3>
                <h1>Meditation Session - Today 8pm (Zoom)</h1>
                
                <h2>Hi Guys</h2>
                
                <p>Great news, today is the day for the next meditation session.</p>
                <p>In today's session we will talk about how our thoughts play such a big role in our lives and how they actually play a huge role in how we are feeling on a daily basis.</p>
                
                <p>Doing the meditation will show that we can choose to align with certain thoughts and feelings.</p>
                
                <p>I will also be providing some exercises you can do which will help rewire your mind into thinking different thoughts.</p>
                
                <p>To get a better understanding of how important it is to control our thoughts, watch my <a href="https://www.youtube.com/watch?v=3UGEfefw_CY" style="color:#d2a94e;">YouTube video</a> where I explain in more detail what happens in our mind and body.</p>
                
                <br />
                <h2>Here is the link for the Zoom call.</h2>
                <a href="https://us04web.zoom.us/j/76063040928?pwd=c2E2U21sVVNEdjNTWUlXZjNIY1hoUT09" target="_blank"
                    style="width: 100%; max-width: 320px; display: block; padding: 15px; text-align: center; color: #fff; background: #2D8CFF; text-decoration: none; border-radius: 5px;"
                >
                    JOIN ZOOM CALL
                </a>
                
                <p>I look forward to seeing you all there.</p>
                
                <br />
                <h2><strong>Life Coach / Trauma Healing</strong></h2>
                <p>If you would like to work one on one with me regarding healing yourself and how your past trauma is playing a role in your mental and physical health, click below to book a call</p>
                <a href="https://ariansamouie.com/book-a-call" target="_blank"
                    style="width: 100%; max-width: 320px; display: block; padding: 15px; text-align: center; color: #fff; background: #d2a94e; text-decoration: none; border-radius: 5px;"
                >
                    Book A Call
                </a>
                
                <br />
                <p>To learn more about why we do what we do, visit my <a href="https://www.youtube.com/channel/UCJLf_QdB9icW3mhCPX66brg" style="color:#d2a94e;">YouTube channel</a> to watch my videos.</p>
                
                <br />
                <p>Kind regards,</p>
                <p><strong>Arian Samouie</strong></p>
                <br /> <h4><u>Social Media</u></h4> <p><a href="https://www.youtube.com/channel/UCJLf_QdB9icW3mhCPX66brg" style="color:#d2a94e;">Youtube</a> | <a href="https://www.instagram.com/arian_samouie/" style="color:#d2a94e;">Instagram</a> | <a href="https://www.facebook.com/arian.samouie/" style="color:#d2a94e;">Facebook</a> | <a href="https://www.tiktok.com/@arian_samouie?" style="color:#d2a94e;">TikTok</a> | <a href="https://soundcloud.com/arian_samouie" style="color:#d2a94e;">Soundcloud</a> | <a href="https://ariansamouie.com/" style="color:#d2a94e;">ariansamouie.com</a></p>
        `,

        html: `
                <img src="https://ariansamouie.com/images/logo-single.svg" style="max-width: 320px;"/>
                <h3>Arian Samouie's</h3>
                <h1>Meditation Session - Today 8pm (Zoom)</h1>
                
                <h2>Hi Guys</h2>
                
                <p>Great news, today is the day for the next meditation session.</p>
                <p>In today's session we will talk about how our thoughts play such a big role in our lives and how they actually play a huge role in how we are feeling on a daily basis.</p>
                
                <p>Doing the meditation will show that we can choose to align with certain thoughts and feelings.</p>
                
                <p>I will also be providing some exercises you can do which will help rewire your mind into thinking different thoughts.</p>
                
                <p>To get a better understanding of how important it is to control our thoughts, watch my <a href="https://www.youtube.com/watch?v=3UGEfefw_CY" style="color:#d2a94e;">YouTube video</a> where I explain in more detail what happens in our mind and body.</p>
                
                <br />
                <h2>Here is the link for the Zoom call.</h2>
                <a href="https://us04web.zoom.us/j/76063040928?pwd=c2E2U21sVVNEdjNTWUlXZjNIY1hoUT09" target="_blank"
                    style="width: 100%; max-width: 320px; display: block; padding: 15px; text-align: center; color: #fff; background: #2D8CFF; text-decoration: none; border-radius: 5px;"
                >
                    JOIN ZOOM CALL
                </a>
                
                <p>I look forward to seeing you all there.</p>
                
                <br />
                <h2><strong>Life Coach / Trauma Healing</strong></h2>
                <p>If you would like to work one on one with me regarding healing yourself and how your past trauma is playing a role in your mental and physical health, click below to book a call</p>
                <a href="https://ariansamouie.com/book-a-call" target="_blank"
                    style="width: 100%; max-width: 320px; display: block; padding: 15px; text-align: center; color: #fff; background: #d2a94e; text-decoration: none; border-radius: 5px;"
                >
                    Book A Call
                </a>
                
                <br />
                <p>To learn more about why we do what we do, visit my <a href="https://www.youtube.com/channel/UCJLf_QdB9icW3mhCPX66brg" style="color:#d2a94e;">YouTube channel</a> to watch my videos.</p>
                
                <br />
                <p>Kind regards,</p>
                <p><strong>Arian Samouie</strong></p>
                <br /> <h4><u>Social Media</u></h4> <p><a href="https://www.youtube.com/channel/UCJLf_QdB9icW3mhCPX66brg" style="color:#d2a94e;">Youtube</a> | <a href="https://www.instagram.com/arian_samouie/" style="color:#d2a94e;">Instagram</a> | <a href="https://www.facebook.com/arian.samouie/" style="color:#d2a94e;">Facebook</a> | <a href="https://www.tiktok.com/@arian_samouie?" style="color:#d2a94e;">TikTok</a> | <a href="https://soundcloud.com/arian_samouie" style="color:#d2a94e;">Soundcloud</a> | <a href="https://ariansamouie.com/" style="color:#d2a94e;">ariansamouie.com</a></p>
        `,
    }

    try {
        const emailResponse = await transporter.sendMail(mailData);
        return res.status(200).json({ emailResponse });
    } catch (err) {
        return res.status(500).json(err || { error: 'ERROR' });
    }
}
