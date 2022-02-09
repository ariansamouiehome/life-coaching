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
        <h3>Testimonials - ${req.body.subject}</h3>
        <p>${req.body.testimonialName}</p>
        <p>${req.body.testimonialMessage}</p>
    `;

    const mailData = {
        from: 'ariansamouiecoach@outlook.com',
        to: 'ariansamouiecoach@outlook.com',
        subject: 'Testimonials',
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
