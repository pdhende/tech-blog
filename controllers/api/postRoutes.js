const router = require('express').Router();
const { Post } = require('../../models/Posts');

router.get('/newpost', (req, res) => {
    res.render('newpost');
});

module.exports = router;