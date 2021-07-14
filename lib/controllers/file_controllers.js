import Insta from 'scraper-instagram';

export const index = (req, res) => {
    res.status(200).json({ message: 'Is alive!' })
}

export const post_test = (req, res) => {
    const data = req.body;

    res.send({ data });
}

export const getUrl = async (req, res) => {
    try {
        const InstaClient = new Insta();
        const { url } = req.body;

        if (!url) {
            return res
                .status(400)
                .json({ error: 'Please provide a valid url' })
        }

        const formattedUrl = url.split('/');
        const shortCode = formattedUrl[4];
        const { contents: [data] } = await InstaClient.getPost(shortCode);

        if (!data) {
            return res
                .status(404)
                .send({ error: `Sorry there's no video in that link` });
        }

        res.status(200).json({ data: data.url });
    } catch (err) {
        console.log(err);
    }
}