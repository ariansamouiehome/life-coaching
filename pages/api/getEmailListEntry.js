import serverPath from "/utils/resolveFiles";
const fs = require('fs');
const path = require("path");

export default async (req, res) => {

    const array = fs.readFileSync(
        path.join(serverPath('public/info'), "emailList.txt"),
        "utf8"
    ).toString();

    // const array = fs.readFileSync(serverPath('public') + '/info/emailList.txt').toString();

    try {
        return res.status(200).json({ data:JSON.parse(array) });
    } catch (err) {
        return res.status(500).json(err || { error: 'ERROR' });
    }
}