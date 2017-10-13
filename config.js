module.exports = {
    'secretKey': "12345-67890-09876-54321",
    'mongoUrl': "mongodb://MANOJ_PATRA:MAN1991@ds113825.mlab.com:13825/blogapp",
    'facebook': {
        //App ID
        clientID: "2001884613356439",
        clientSecret: "a01a7bc3d1e742eed3b1c665d905797f",
        callbackURL: "http://localhost:3000/users/facebook/callback",
        profileFields: ['displayName', 'emails', 'name'],
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    }
};