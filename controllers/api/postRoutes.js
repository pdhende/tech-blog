const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/newpost', withAuth, (req, res) => {
    try {
        console.log(req.session.user_id);
        res.render('newpost', {
            logged_in: true
        });
    }catch(err) {
        res.status(400).json(err);
    }
});

// POST route
router.post('/', withAuth, async (req, res) => {
    try {

        // console.log("in path");
        const title = req.body.title;
        const description = req.body.content;
        // console.log(title, description);
        console.log(req.session.user_id);
        console.log(req.body);
        const newPostVal = await Post.create({
            // title: req.body.title,
            // description: req.body.content,
            ...req.body,
            user_id: req.session.user_id,
        });
        console.log(newPostVal);

        res.status(200).json(newPostVal);

        // const allPosts = await Post.findAll({
        //     where: {
        //         user_id: user.id
        //     },
        // });
        // res.render('dashboard', {
        //     allPosts,
        //     logged_in: true
        // });
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;