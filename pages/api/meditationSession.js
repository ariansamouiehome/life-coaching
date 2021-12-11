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

    const mailDataToClient = {
        from: 'ariansamouiecoach@yahoo.com',
        to: req.body.email,
        bcc: 'ariansamouiecoach@outlook.com',
        subject: `Arian Samouie's Meditation Session`,
        text: `<img src="https://ariansamouie.com/images/logo-single.svg" /><h1>Arian Samouie's Meditation Session</h1> <p>Great news, your position has been secured for the mediation session on ${req.body.session_date}</p> <p>The session will be an online Zoom call. Please make sure you have Zoom installed and are ready before the session date and time. Once the session has started we cannot accept any additional people joining as it may disrupt people in the session.</p> <p>Don't forget all you will need is a pillow, Somewhere comfortable to lay down (maybe a bed), Zoom (the video calling app) and Preferably headphones.</p> <p>Below is a link to the zoom call, please keep this safe as it will be what you will need to use to join the call.</p> <a href="https://us04web.zoom.us/j/76063040928?pwd=c2E2U21sVVNEdjNTWUlXZjNIY1hoUT09">CLICK HERE TO JOIN THE ZOOM CALL</a> <p>I look forward to seeing you.</p> <p>Kind regards,</p> <h2>uArian Samouie</h2> <br /> <h4><u>Social Media</u></h4> <p><a href="https://www.youtube.com/channel/UCJLf_QdB9icW3mhCPX66brg">Youtube</a> | <a href="https://www.instagram.com/arian_samouie/">Instagram</a> | <a href="https://www.facebook.com/arian.samouie/">Facebook</a> | <a href="https://www.tiktok.com/@arian_samouie?">TikTok</a> | <a href="https://ariansamouie.com/">ariansamouie.com</a></p><h3><u>Your details</u></h3><p>Name: ${req.body.first_name} ${req.body.last_name}</p><p>Tel: ${req.body.telephone}</p><p>Email: ${req.body.email}</p><p>Added to mailing List: ${req.body.mailing_list === true ? 'Yes' : 'No'}</p>`,
        html: `<img src="https://ariansamouie.com/images/logo-single.svg" /><h1>Arian Samouie's Meditation Session</h1> <p>Great news, your position has been secured for the mediation session on ${req.body.session_date}</p> <p>The session will be an online Zoom call. Please make sure you have Zoom installed and are ready before the session date and time. Once the session has started we cannot accept any additional people joining as it may disrupt people in the session.</p> <p>Don't forget all you will need is a pillow, Somewhere comfortable to lay down (maybe a bed), Zoom (the video calling app) and Preferably headphones.</p> <p>Below is a link to the zoom call, please keep this safe as it will be what you will need to use to join the call.</p> <a href="https://us04web.zoom.us/j/76063040928?pwd=c2E2U21sVVNEdjNTWUlXZjNIY1hoUT09">CLICK HERE TO JOIN THE ZOOM CALL</a> <p>I look forward to seeing you.</p> <p>Kind regards,</p> <h2>Arian Samouie</h2> <br /> <h4><u>Social Media</u></h4> <p><a href="https://www.youtube.com/channel/UCJLf_QdB9icW3mhCPX66brg">Youtube</a> | <a href="https://www.instagram.com/arian_samouie/">Instagram</a> | <a href="https://www.facebook.com/arian.samouie/">Facebook</a> | <a href="https://www.tiktok.com/@arian_samouie?">TikTok</a> | <a href="https://ariansamouie.com/">ariansamouie.com</a></p><h3><u>Your details</u></h3><p>Name: ${req.body.first_name} ${req.body.last_name}</p><p>Tel: ${req.body.telephone}</p><p>Email: ${req.body.email}</p><p>Added to mailing List: ${req.body.mailing_list === true ? 'Yes' : 'No'}</p>`,
    }

    try {
        const emailResponse = await transporter.sendMail(mailDataToClient);
        return res.status(200).json({ emailResponse });
    } catch (err) {
        return res.status(500).json(err || { error: 'ERROR' });
    }
}