var express = require('express');
var router = express.Router();

router.route('/comment')
    .get(function(req, res) {
        res.end("comment get");
    })
    .post(function(req, res) {
        res.end("comment post");
    })
    .put(function(req, res) {
        res.end("comment put");
    })
    .delete(function(req, res) {
        res.end("comment delete");
    });

router.route('/stock')
    .get(function(req, res) {
        res.end("stock get");
    })
    .post(function(req, res) {
        res.end("stock post");
    })
    .put(function(req, res) {
        res.end("stock put");
    })
    .delete(function(req, res) {
        res.end("stock delete");
    });

router.get('/products', (req, res) => {
    res.end('Get Product by KS-Dev');
});
router.post('/products', (req, res) => {
    res.end('Post Product by KS-Dev');
});


module.exports = router;