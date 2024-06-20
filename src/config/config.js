require('dotenv').config();

const config = {
    publicVapidKey: process.env.PUBLIC_VAPID_KEY,
    privateVapidKey: process.env.PRIVATE_VAPID_KEY
}

module.exports = { config };