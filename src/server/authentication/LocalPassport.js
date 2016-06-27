// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const usersCtrl = require('../controllers/usersCtrl.js');
// const config = require('../config.js');
// const db = require('../db/connection.js');

// var isValidPassword = function(user, password) {
//     return bCrypt.compareSync(password, user.password);
//   };
// // use the Local Strategy (locally saved username and password, i.e. not OAuth)
// passport.use('local-login', new LocalStrategy({
//   passReqToCallback: false 
// },
//   (username, password, done) => {
//     process.nextTick(() => {
//       db.one('select * from users where username=$1', [username])
//       .then(data => {
//         console.log('found user');
//         console.log('this is data and pass', data, data.password);
//         if(data.password === password) {
//           return done(null, data.username);
//         }
//       })
//       .catch(function(error) {
//         console.log(error);
//         return done(error, null);
//       });
//     });
//   })
// );

// // Configure Passport authenticated session persistence.
// //
// // In order to restore authentication state across HTTP requests, Passport needs
// // to serialize users into and deserialize users out of the session.  The
// // typical implementation of this is as simple as supplying the user ID when
// // serializing, and querying the user record by ID from the database when
// // deserializing.
// passport.serializeUser(function(user, cb) {
//   cb(null, user.id);
// });

// passport.deserializeUser(function(id, cb) {
//   db.users.findById(id, function (err, user) {
//     if (err) { return cb(err); }
//     cb(null, user);
//   });
// });

// module.exports = passport;

// const passport = require('passport');
// const FitbitStrategy = require('passport-fitbit-oauth2').FitbitOAuth2Strategy;
// const usersCtrl = require('../controllers/usersCtrl.js');
// const config = require('../config.js');
// const db = require('../db/connection.js');

// passport.use(new FitbitStrategy({
//   clientID: config.Fitbit.clientID,
//   clientSecret: config.Fitbit.clientSecret,
//   scope: ['activity', 'heartrate', 'location', 'profile'],
//   callbackURL: config.Fitbit.callbackURL
// }, 
//   (accessToken, refreshToken, profile, done) => {
//     const userData = {
//       name: profile._json.user.fullName,
//       username: profile._json.user.displayName,
//       password: profile._json.user.displayName,
//       email: profile._json.user.gender,
//       weight: profile._json.user.weight,
//       bmi: 21.3,
//       goal: accessToken,
//       points: 0
//     };
//     process.nextTick(() => {
//       db.one('insert into users(name, username, password, email, weight, bmi, goal)' +
//         'values(${name}, ${username}, ${password}, ${email}, ${weight}, ${bmi}, ${goal})  returning username',
//          userData)
//       .then(data => {
//         console.log('data inside nexttick', data);
//         return done(null, data.username);
//       })
//       .catch((error) => {
//         console.log(error);
//         return done(error, null);
//       });
//      });
//    }
//   )
// );

// passport.serializeUser((user, done) => {

//   done(null, user);
// });

// passport.deserializeUser((obj, done) => {
//   done(null, obj);
// });

// module.exports = passport;

