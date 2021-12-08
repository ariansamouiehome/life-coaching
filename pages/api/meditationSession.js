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
    const mailDataToMe = {
        from: process.env.FORM_EMAIL,
        to: 'ariansamouiecoach@yahoo.com',
        subject: `Meditation Session ${req.body.session_date} - ${req.body.first_name} ${req.body.last_name}`,
        text: `<h1>${req.body.first_name} ${req.body.last_name}</h1> <a style="font-size: 20px" href="tel:${req.body.telephone}">${req.body.telephone}</a> <p>${req.body.email}</p> <p>${req.body.mailing_list === true ? 'Add to Mailing List' : ''}</p>`,
        html: `<h1>${req.body.first_name} ${req.body.last_name}</h1> <a style="font-size: 20px" href="tel:${req.body.telephone}">${req.body.telephone}</a> <p>${req.body.email}</p> <p>${req.body.mailing_list === true ? 'Add to Mailing List' : ''}</p>`,
    }

    const mailDataToClient = {
        from: 'ariansamouiecoach@yahoo.com',
        // TODO change 'to' below to (req.body.email)
        to: 'ariansamouiecoach@outlook.com',
        subject: `Arian Samouie's Meditation Session`,
        text: `<img src="https://ariansamouie.com/images/logo-single.svg" /><h1>Arian Samouie's Meditation Session</h1> <p>Great news, your position has been secured for the mediation session on ${req.body.session_date}</p> <p>The session will be an online zoom call. Please make sure you have zoom installed and are ready before the session date and time. Once the session has started we cannot accept any additional people joining as it may disrupt people in the session.</p> <p>Don't forget all you will need is a pillow, Somewhere comfortable to lay down (maybe a bed), Zoom (the video calling app) and Preferably headphones.</p> <p>Below is a link to the zoom call, please keep this safe as it will be what you will need to use to join the call.</p> <a href="https://us04web.zoom.us/j/71925466640?pwd=SktnYmNRZDZONzZTbHdtc1lWbVFmQT09">CLICK HERE TO JOIN THE ZOOM CALL</a> <p>I look forward to seeing you.</p> <p>Kind regards,</p> <h2>Arian Samouie</h2> <br /> <h4>Social Media</h4> <p><a href="https://www.youtube.com/channel/UCJLf_QdB9icW3mhCPX66brg">Youtube</a></p> <p><a href="https://www.instagram.com/arian_samouie/">Instagram</a></p> <p><a href="https://www.facebook.com/arian.samouie/">Facebook</a></p> <p><a href="https://vm.tiktok.com/ZMRQTuLnH/">TikTok</a></p> <p><a href="https://ariansamouie.com/">ariansamouie.com</a></p>`,
        html: `<img src="https://ariansamouie.com/images/logo-single.svg" /><h1>Arian Samouie's Meditation Session</h1> <p>Great news, your position has been secured for the mediation session on ${req.body.session_date}</p> <p>The session will be an online zoom call. Please make sure you have zoom installed and are ready before the session date and time. Once the session has started we cannot accept any additional people joining as it may disrupt people in the session.</p> <p>Don't forget all you will need is a pillow, Somewhere comfortable to lay down (maybe a bed), Zoom (the video calling app) and Preferably headphones.</p> <p>Below is a link to the zoom call, please keep this safe as it will be what you will need to use to join the call.</p> <a href="https://us04web.zoom.us/j/71925466640?pwd=SktnYmNRZDZONzZTbHdtc1lWbVFmQT09">CLICK HERE TO JOIN THE ZOOM CALL</a> <p>I look forward to seeing you.</p> <p>Kind regards,</p> <h2>Arian Samouie</h2> <br /> <h4>Social Media</h4> <p><a href="https://www.youtube.com/channel/UCJLf_QdB9icW3mhCPX66brg">Youtube</a></p> <p><a href="https://www.instagram.com/arian_samouie/">Instagram</a></p> <p><a href="https://www.facebook.com/arian.samouie/">Facebook</a></p> <p><a href="https://vm.tiktok.com/ZMRQTuLnH/">TikTok</a></p> <p><a href="https://ariansamouie.com/">ariansamouie.com</a></p>`,
    }

    try {
        const emailResponse = await transporter.sendMail(mailDataToClient);
        return res.status(200).json({ emailResponse });
    } catch (err) {
        return res.status(500).json(err || { error: 'ERROR' });
    }
}