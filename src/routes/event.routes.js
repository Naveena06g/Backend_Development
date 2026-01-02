// const express = require('express');
// const router = express.Router();
// const eventController = require('../controllers/event.controller');

// router.post('/events', eventController.createEvent);
// router.get('/events', eventController.getAllEvents);
// router.get('/events/:id', eventController.getEventById);
// router.delete('/events/:id', eventController.deleteEvent);

// module.exports = router;

const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event.controller');

router.post('/events', eventController.createEvent);
router.get('/events', eventController.getAllEvents);
router.put('/events/:id', eventController.updateEvent);
router.get('/events/:id', eventController.getEventById);
router.delete('/events/:id', eventController.deleteEvent);

module.exports = router;






