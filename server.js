// This file sets up the entire project.  It sets up the user session details.  Requires sequelize.  Will use the proper port for Heroku if it's there, otherwise port 3001.  It requires the express middleware, handlebars, handlebars helper file, routes.  It also puts a listener on the port.
const express = require('express');
const session = require('express-session');
const exhbs = require('express-handlebars');
const path = require('path');
const routes = require('./controllers');
const hbs = exhbs.create();

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine("handlebars",hbs.engine);
app.set("view engine", "handlebars")

hbs.handlebars.registerHelper('dateFormat', require('handlebars-dateformat'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening http://localhost:${PORT}/`));
});