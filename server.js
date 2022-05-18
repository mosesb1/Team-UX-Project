const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const projectRouter = require('./routes/api/projects');
const collaboratorRouter = require('./routes/api/collaborators');
const messageRouter = require('./routes/api/messages');
const messageThreadRouter = require('./routes/api/messageThreads');


require('dotenv').config();
require('./config/database');

const app = express();



app.use(logger('dev'));
// there's no need to mount express.urlencoded middleware
// why is that?
app.use(express.json());
// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Check if token and create req.user
app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));

const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/projects', ensureLoggedIn, projectRouter);
app.use('/api/collaborators', ensureLoggedIn, collaboratorRouter);
app.use('/api/messages', ensureLoggedIn, messageRouter);
app.use('/api/messageThreads', ensureLoggedIn, messageThreadRouter);



// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`I hear you backend ${port}`)
})