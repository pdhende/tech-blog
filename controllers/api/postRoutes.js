const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

// GET route to render form to create new post
router.get('/newpost', withAuth, (req, res) => {
    try {
        console.log(req.session.user_id);
        res.render('newpost', {
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// GET route to get one post by the id
router.get('/:id', withAuth, async (req, res) => {
    try {
        console.log('in get route');
        const pid = req.params.id.slice(-1);
        const isPath = req.params.id.slice(0, 2);
        console.log(pid);
        const postById = await Post.findByPk(pid, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
            // raw: true,
        });
        // console.log(postById);
        const post = postById.get({ plain: true });
        // res.render('/dashboard');
        // console.log(postID);
        if (isPath === 'hp') //if this GET request is from the Dashboard page
        {
            res.render('viewpost', {
                post,
                logged_in: req.session.logged_in
            });
        } else {
            res.render('updatepost', {
                post,
                logged_in: req.session.logged_in
            });
            // console.log('Make that new view!');
        }
        // res.status(200).json(postById);
    } catch (err) {
        res.status(400).json(err);
    }
});

// POST route to add new post to the database
router.post('/', withAuth, async (req, res) => {
    try {
        const title = req.body.title;
        const description = req.body.content;

        const newPostVal = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        console.log(newPostVal);

        res.status(200).json(newPostVal);
    } catch (err) {
        res.status(400).json(err);
    }
});

// PUT route to update a post by ID
router.put('/', withAuth, async (req, res) => {
    try {
        console.log('in put route');
        const updatdPost = await Post.update({
            title: req.body.title,
            description: req.body.content
            },
            {
                where: {
                    id: req.body.postID
                }
            });
            console.log(updatdPost);
            res.status(200).json(updatdPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE route to delete a post by ID
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const deletdPost = await Post.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(deletdPost);
    }catch(err) {
        res.status(400).json(err);
    }
});

module.exports = router;