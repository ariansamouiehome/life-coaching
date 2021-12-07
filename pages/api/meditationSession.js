export default async (req, res) => {

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
        from: process.env.FORM_EMAIL,
        to: 'ariansamouiecoach@yahoo.com',
        subject: `Website - ${req.body.first_name} ${req.body.last_name}`,
        text: `<h1>${req.body.first_name} ${req.body.last_name}</h1> <a style="font-size: 20px" href="tel:${req.body.telephone}">${req.body.telephone}</a> <p>${req.body.email}</p> <p>${req.body.message}</p> <p>${req.body.mailing_list === true ? 'Add to Mailing List' : ''}</p>`,
        html: `<h1>${req.body.first_name} ${req.body.last_name}</h1> <a style="font-size: 20px" href="tel:${req.body.telephone}">${req.body.telephone}</a> <p>${req.body.email}</p> <p>${req.body.message}</p> <p>${req.body.mailing_list === true ? 'Add to Mailing List' : ''}</p>`,
    }

    try {
        const emailResponse = await transporter.sendMail(mailData);
        return res.status(200).json({ emailResponse });
    } catch (err) {
        return res.status(500).json(err || { error: 'ERROR' });
    }
}