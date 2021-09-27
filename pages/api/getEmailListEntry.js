const fs = require('fs');

export default async (req, res) => {

    const array = fs.readFileSync('files/emailList.txt').toString();

    try {
        return res.status(200).json({ data:JSON.parse(array) });
    } catch (err) {
        return res.status(500).json(err || { error: 'ERROR' });
    }
}