const { Router } = require('express');
const router = Router();

const webpush = require('../webpush');
let pushSubscription;

router.post('/subscription', async (req, res) => {
    pushsubscription = req.body;
    console.log(pushSubscription);


    res.status(200).json();

});

router.post('/new-message', async (req, res) => {
    const { message } = req.body;

    const payload = JSON.stringify({
        title: 'Web notifications',
        message
    });

    res.status(200).json();

    try {
        await webpush.sendNotification(pushSubscription, payload);
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;