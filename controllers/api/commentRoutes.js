const router = require('express').Router();
const { Comment, User, Post } = require('../../models');
const withAuth = require('../../utils/auth');

// GET route
router.get('/viewcomment/:postId', withAuth, async (req, res) => {
    try {
        console.log('in get route');
        console.log(req.params.postId);
        const allComments = await Comment.findAll({
            include: [{
                model: User,
                attributes: ['name']
        }],
            where: {
                post_id: req.params.postId
            }
        });

        const comments = allComments.map((comment) => comment.get({ plain: true}));
        console.log(comments);

        const postById = await Post.findByPk(req.params.postId, {
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
          console.log(post);
        res.render('viewcomment', {
            post,
            comments,
            // commentFlg: true,
            logged_in: req.session.logged_in
        });
        // console.log('in viewpost');
        // res.render('viewcomment', {

        // });
    } catch(err) {
        res.status(500).json(err);
    }
});

// POST route
router.post('/', withAuth, async (req, res) => {
    try {
        console.log('in post route');
        console.log(req.body);
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        // console.log(req.body.id);

        console.log(newComment);
        res.status(200).json(newComment);
        // const allComments = await Comment.findAll({
        //     include: [{
        //         model: User,
        //         attributes: ['name']
        //     },
        // {
        //     model: Post
        // }],
        //     where: {
        //         post_id: req.body.post_id
        //     }
        // });

        // const comments = allComments.map((comment) => comment.get({ plain: true}));
        // console.log(comments);

        // res.render('viewcomment', {
        //     comments,
        //     commentFlg: true,
        //     logged_in: req.session.logged_in
        // });

    }catch(err){
        res.status(400).json(err);
    }
});

module.exports = router;