import serverPath from "/utils/resolveFiles";
const fs = require('fs');

export default async (req, res) => {

    const array = fs.readFileSync(serverPath('public') + '/info/emailList.txt').toString();

    try {
        return res.status(200).json({ data:JSON.parse(array) });
    } catch (err) {
        return res.status(500).json(err || { error: 'ERROR' });
    }
}