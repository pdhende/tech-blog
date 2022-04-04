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
    }catch(err) {
        res.status(400).json(err);
    }
});

// GET route to get one post by the id
router.get('/:id', withAuth, async (req, res) => {
    try {
        console.log('in get route');
        const postById = await Post.findByPk(req.params.id, {
            include: [
              {
                model: User,
                attributes: ['name'],
              },
            ],
          });
        console.log(postById);

        res.status(200).json(postById);
    }catch(err) {
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

module.exports = router;