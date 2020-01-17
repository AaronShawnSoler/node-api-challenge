/*
play this: https://www.youtube.com/watch?v=d-diB65scQU

Sing along:

here's a little code I wrote, please read the README word for word, don't worry, you got this
in every task there may be trouble, but if you worry you make it double, don't worry, you got this
ain't got no sense of what is REST? just concentrate on learning Express, don't worry, you got this
your file is getting way too big, bring a Router and make it thin, don't worry, be crafty
there is no data on that route, just write some code, you'll sort it out… don't worry, just hack it…
I need this code, but don't know where, perhaps should make some middleware, don't worry, just hack it

Go code!
*/

const express = require('express');

const server = express();
server.use(express.json());

const projectDB = require('./data/helpers/projectModel');
const actionDB = require('./data/helpers/actionModel');

// ACTION ENDPOINTS
server.get('/api/actions', (req, res) => {
    try {

    } catch {
        res.status(500).json({ error: 'an error has occurred'});
    }
});

server.get('/api/actions/:id', (req, res) => {
    try {

    } catch {
        res.status(500).json({ error: 'an error has occurred'});
    }
});

server.post('/api/actions', (req, res) => {
    try {

    } catch {
        res.status(500).json({ error: 'an error has occurred'});
    }
});

server.put('/api/actions/:id', (req, res) => {
    try {

    } catch {
        res.status(500).json({ error: 'an error has occurred'});
    }
});

server.delete('/api/actions/:id', (req, res) => {
    try {

    } catch {
        res.status(500).json({ error: 'an error has occurred'});
    }
});


//PROJECT ENDPOINTS
server.get('/api/projects', (req, res) => {
    try {

    } catch {
        res.status(500).json({ error: 'an error has occurred'});
    }
});

server.get('/api/projects/:id', (req, res) => {
    try {

    } catch {
        res.status(500).json({ error: 'an error has occurred'});
    }
});

server.post('/api/projects', (req, res) => {
    try {

    } catch {
        res.status(500).json({ error: 'an error has occurred'});
    }
});

server.put('/api/projects/:id', (req, res) => {
    try {

    } catch {
        res.status(500).json({ error: 'an error has occurred'});
    }
});

server.delete('/api/projects/:id', (req, res) => {
    try {

    } catch {
        res.status(500).json({ error: 'an error has occurred'});
    }
});

server.get('/api/projects/:id/actions', (req, res) => {
    try {

    } catch {
        res.status(500).json({ error: 'an error has occurred'});
    }
});

server.use(function(req, res) {
    res.status(404).send(`No such route`);
});

// Middleware
function validateActionId(req, res, next) {
    // do your magic!
    const id = req.params.id;
    actionDB.get(id)
    .then(action => {
      if(action) {
        req.post = action.id;
        next();
      } else {
        res.status(400).json({ message: "invalid action id" });
      }
    })
  }

  function validateProjectId(req, res, next) {
    // do your magic!
    const id = req.params.id;
    projectDB.get(id)
    .then(project => {
      if(project) {
        req.post = project.id;
        next();
      } else {
        res.status(400).json({ message: "invalid project id" });
      }
    })
  }

  function validateProject(req, res, next) {
    // do your magic!
    if(req.body.name && req.body.description) {
      next();
    } else {
      res.status(400).json({ message: "missing required fields" });
    }
  }

  function validateAction(req, res, next) {
    // do your magic!
    if(req.body.project_id && req.body.description && req.body.notes) {
      next();
    } else {
      res.status(400).json({ message: "missing required fields" });
    }
  }


const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`Server listening on port ${port}`));