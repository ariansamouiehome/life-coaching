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
        subject: 'Why We Seek External Validation? - New Youtube Video',
        text: `
                <img src="https://ariansamouie.com/images/logo-single.svg" style="max-width: 400px;"/>
                <h1>Why we seek external validation?</h1>
                
                <p>We live in a society that has not caught up yet with how "the norms" are truly affecting us.</p>
                <p>It can be very easy to get lost looking in the direction of what has been done to us and finding someone or something to blame for it.</p>
                <p>To bring the reason to the light of our awareness is no doubt a step in our healing journey, but we need to be very aware of that we don't get stuck in this part of the journey.</p>
                <br />
                <p>There are many ways in how we have been programmed into seeking external validation, as adults and most humans that have lived on this planet have learnt that validation comes from the outside and not within.</p>
                <p>One of the biggest reasons we have fallen into this category is to do with the way society brings up their children.</p>
                <p>The good behaviour = reward, bad behaviour = punishment social control technique has many unwanted teachings that come with it.</p>
                <p>There are multiple reason we feel like this, but this is one of the biggest reasons why we are programmed into seeking validation externally.</p>                
                <br />
                <p>Our healing is <strong>OUR</strong> responsibility.</p>
                <p>No one has the ability to do it for us.</p>
                <p>Just for being a living human, means that you have the ability to heal from anything that you have been through.</p>
                <p>That strength is inside you, weather you choose to believe it or not.</p>
                
                <br />
                <p>To learn more about external validation watch my YouTube video titled  <a href="https://www.youtube.com/watch?v=SaJq3Yx436M" target="_blank">"Why We Seek External Validation?"</a></p>
                
                <br />
                <h2>To get involved with my <strong><u>FREE</u></strong> online meditation session <a href="https://ariansamouie.com/meditation-sessions" target="_blank">CLICK HERE</a></h2>
                
                <br />
                <h2><strong>Life Coach</strong></h2>
                <p>If you would like to work 121 with me then <a href="https://ariansamouie.com/book-a-call" target="_blank">Book a Call</a>, and I will get back to you.</p>
                
                <br />
                <p>Kind regards,</p>
                <p><strong>Arian Samouie</strong></p>
                <br /> <h4><u>Social Media</u></h4> <p><a href="https://www.youtube.com/channel/UCJLf_QdB9icW3mhCPX66brg" style="color:#d2a94e;">Youtube</a> | <a href="https://www.instagram.com/arian_samouie/" style="color:#d2a94e;">Instagram</a> | <a href="https://www.facebook.com/arian.samouie/" style="color:#d2a94e;">Facebook</a> | <a href="https://www.tiktok.com/@arian_samouie?" style="color:#d2a94e;">TikTok</a> | <a href="https://soundcloud.com/arian_samouie" style="color:#d2a94e;">Soundcloud</a> | <a href="https://ariansamouie.com/" style="color:#d2a94e;">ariansamouie.com</a></p>
        `,

        html: `
                <img src="https://ariansamouie.com/images/logo-single.svg" style="max-width: 400px;"/>
                <h1>Why we seek external validation?</h1>
                
                <p>We live in a society that has not caught up yet with how "the norms" are truly affecting us.</p>
                <p>It can be very easy to get lost looking in the direction of what has been done to us and finding someone or something to blame for it.</p>
                <p>To bring the reason to the light of our awareness is no doubt a step in our healing journey, but we need to be very aware of that we don't get stuck in this part of the journey.</p>
                <br />
                <p>There are many ways in how we have been programmed into seeking external validation, as adults and most humans that have lived on this planet have learnt that validation comes from the outside and not within.</p>
                <p>One of the biggest reasons we have fallen into this category is to do with the way society brings up their children.</p>
                <p>The good behaviour = reward, bad behaviour = punishment social control technique has many unwanted teachings that come with it.</p>
                <p>There are multiple reason we feel like this, but this is one of the biggest reasons why we are programmed into seeking validation externally.</p>                
                <br />
                <p>Our healing is <strong>OUR</strong> responsibility.</p>
                <p>No one has the ability to do it for us.</p>
                <p>Just for being a living human, means that you have the ability to heal from anything that you have been through.</p>
                <p>That strength is inside you, weather you choose to believe it or not.</p>
                
                <br />
                <p>To learn more about external validation watch my YouTube video titled  <a href="https://www.youtube.com/watch?v=SaJq3Yx436M" target="_blank">"Why We Seek External Validation?"</a></p>
                
                <br />
                <h2>To get involved with my <strong><u>FREE</u></strong> online meditation session <a href="https://ariansamouie.com/meditation-sessions" target="_blank">CLICK HERE</a></h2>
                
                <br />
                <h2><strong>Life Coach</strong></h2>
                <p>If you would like to work 121 with me then <a href="https://ariansamouie.com/book-a-call" target="_blank">Book a Call</a>, and I will get back to you.</p>
                
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
