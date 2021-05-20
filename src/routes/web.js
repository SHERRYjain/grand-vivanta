const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Grand Vivanta'
    })
})

router.get('/about', (req, res) => {
    res.render('about-us', {
        about: true,
        title: 'About us'
    })
})

router.get('/contact', (req, res) => {
    res.render('contact', {
        contact: true,
        title: 'Contact'
    })
})

router.get('/travel-desk', (req, res) => {
    res.render('contact', {
        travelDesk: true,
        title: 'Travel Desk'
    })
})

router.get('*', (req,res) => {
    res.render('404');
})

module.exports = router