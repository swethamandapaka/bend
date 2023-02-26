const express = require('express')
const postsModel = require('../models/posts')


const router = express.Router()

router.get('/posts', async (req, res) => {

    try {
        const { page = 1, pagesize = 5 } = req.query;

        const posts = await postsModel.find().skip((page - 1) * pagesize).limit(pagesize);
        res.status(200).json(posts)
    }
    catch (e) {
        if (e) { res.status(500).json({ message: e.message }) }
    }
})


router.post('/posts', async (req, res) => {
    try {
        const { image, author, location, description } = req.body

        const createdPost = await postsModel.create({
            name: author,
            location,
            likes: 0,
            description,
            PostImage: image,
            date: Date.now()
        })
        console.log(createdPost)
        res.status(200).json(createdPost)
    }
    catch (e) {
        if (e) { res.status(500).json({ message: e.message }) }
    }
})

module.exports = router;