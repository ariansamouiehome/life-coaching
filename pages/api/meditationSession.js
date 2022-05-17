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
    const bodyText = `
        <img src="https://ariansamouie.com/images/logo-single.svg" />
        <h1>Arian Samouie's Meditation Session</h1> 
        <p>Great news, your position for <span style="font-style: italic; font-weight: bold;">"${req.body.session_name}"</span> on <span style="font-style: italic; font-weight: bold;">${req.body.session_date}</span> has been secured.</p> 
        <p>The session will be an online Zoom call. Please make sure you have Zoom installed and are ready before the session date and time. Once the session has started we cannot accept any additional people joining as it may disrupt people in the session.</p> 
        
        <p>Don't forget all you will need is Zoom, the video calling app and Preferably headphones.</p>
        <p>Below is a link to the Zoom call, please keep this safe as it will be what you will need to use to join the call.</p> 
        <a href="https://us02web.zoom.us/j/89773315386?pwd=alNhZi9nUW1qMnAvNWFNc1FpeHU4dz09" target="_blank"
            style="width: 100%; max-width: 320px; display: block; padding: 15px; text-align: center; color: #fff; background: #2D8CFF; text-decoration: none; border-radius: 5px;"
        >
            Join Zoom Call
        </a>
        
        <br />
        <p>I look forward to seeing you.</p> 
        <p>Kind regards,</p> 
        <h2>Arian Samouie</h2> 
        <br /> 
        <h4><u>Social Media</u></h4> 
        
        <p><a href="https://www.youtube.com/channel/UCJLf_QdB9icW3mhCPX66brg">Youtube</a> | <a href="https://www.instagram.com/arian_samouie/">Instagram</a> | <a href="https://www.facebook.com/arian.samouie/">Facebook</a> | <a href="https://www.tiktok.com/@arian_samouie?">TikTok</a> | <a href="https://soundcloud.com/arian_samouie">Soundcloud</a> | <a href="https://ariansamouie.com/">ariansamouie.com</a></p><h3><u>Your details</u></h3><p>Name: ${req.body.first_name} ${req.body.last_name}</p><p>Tel: ${req.body.telephone}</p><p>Email: ${req.body.email}</p>
        
        <p>Added to mailing List: ${req.body.mailing_list === true ? 'Yes' : 'No'}</p>
    `;
    const mailDataToClient = {
        from: 'ariansamouiecoach@outlook.com',
        to: req.body.email,
        bcc: 'ariansamouiecoach@outlook.com',
        subject: `Arian Samouie's Meditation Session`,
        text: bodyText,
        html: bodyText,
    }

    try {
        const emailResponse = await transporter.sendMail(mailDataToClient);
        return res.status(200).json({ emailResponse });
    } catch (err) {
        return res.status(500).json(err || { error: 'ERROR' });
    }
}