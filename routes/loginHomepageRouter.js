const express = require('express')
const loginHomepageRouter = express.Router()

const loginHomepageService = require('../services/loginHomepageService')
const UserService = require('../services/userService');

loginHomepageRouter.get('/:user_uid', async (req, res) => {
    const { user_uid } = req.params
    const user = await UserService.readUserByUid(user_uid)
    loginHomepageService.getUserID
    loginHomepageService.getTrips(user.id)
    .then( trips => {

        let upcomingTrips = []
        let pastTrips = []

        trips.forEach( e => {
            if ( e.departure_date >= Date.now() ) {
                upcomingTrips.push(e)
            } else {
                pastTrips.push(e)
            }
        })
        res.json({ upcoming_trips:upcomingTrips, past_trips:pastTrips })
    }, err => {
        console.log(err)
        res.status(400)
        res.send({msg:'Could not get trips'})
    })
})

module.exports = loginHomepageRouter