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
        <h3>Add to Course Interest List</h3>
        <p><strong>Customer Name:</strong><br /> ${req.body.courseInterestName}</p>
        <p><strong>Customer Email:</strong><br /> ${req.body.courseInterestEmail}</p>
        <p><strong>Product Name:</strong><br /> ${req.body.courseName}</p>
    `;
    const mailData = {
        from: 'ariansamouiecoach@outlook.com',
        to: 'ariansamouiecoach@outlook.com',
        subject: 'ADD TO INTEREST LIST!',
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
