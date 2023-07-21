const LocalStrategy = require("passport-local").Strategy;
const { pool } = require("./database/pgConnections");
const bcrypt = require("bcryptjs");
const queries = require("./login/queries");

const initialize = (passport) => {
  const authenticateUser = (username, password, done) => {
    pool.query(queries.getUserByUsername, [username], (err, result) => {
      if (err) {
        throw err;
      }

      console.log(result.rows);

      if (result.rows.length > 0) {
        const user = result.rows[0];

        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            throw err;
          }

          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      } else {
        return done(null, false);
      }
    });
  };

  passport.use(
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
      },
      authenticateUser
    )
  );

  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser((id, done) => {
    pool.query(queries.getUser, [id], (err, result) => {
      if (err) {
        throw err;
      }
      return done(null, result.rows[0]);
    });
  });
};

module.exports = initialize;
