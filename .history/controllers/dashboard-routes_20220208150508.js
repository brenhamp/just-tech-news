const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    Post.findAll
    res.render('dashboard', { loggedIn: true });
  });

module.exports = router;