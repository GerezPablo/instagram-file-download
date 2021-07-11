import { apiCall, downloadFile, isValidUrl } from '../utils/urlUtils';

export const index = (req, res) => {
    res.status(200).json({ message: 'Is alive!' })
}

export const post_test = (req, res) => {
    const data = req.body;

    res.send({ data });
}

export const getUrl = async (req, res) => {
    const { url } = req.body;
    const formattedUrl = `${url}?__a=1`;

    if (url === null) {
        return res
            .status(400)
            .json({ error: 'Please provide a valid url' })
    }

    const response = await apiCall(formattedUrl);
    const { graphql: { shortcode_media: { is_video, video_url } } } = response;

    if (is_video === null || video_url === null) {
        return res
            .status(404)
            .send({ error: `Sorry there's no video in that link` });
    }

    // await downloadFile('sarasa.mp4', video_url);

    res.status(200).json({ data: video_url });
}