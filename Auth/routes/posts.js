const router = require('express').Router();


router.get('/', (req,res) => {
    res.json({
        posts: {
            title: 'My Post', 
            Description: 'Random data'
        }
    });
});

module.exports = router;