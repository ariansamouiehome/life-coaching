export default async (req, res) => {
    try {
        return res.status(200).json({ data:'basic' });
    } catch (err) {
        return res.status(500).json(err || { error: 'ERROR' });
    }
}