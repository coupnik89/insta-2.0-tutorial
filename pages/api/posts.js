import nc from "next-connect";

import axios from "axios";

const handler = nc()

handler.get(async (req, res) => {
    try {
        const {data} = await axios('https://jsonplaceholder.typicode.com/posts')

        res.status(200).json(data)
    } catch (error) {
        console.log(error);
    }
})

export default handler