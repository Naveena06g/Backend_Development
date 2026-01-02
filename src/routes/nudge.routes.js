// const express = require('express');
// const router = express.Router();
// const nudgeController = require('../controllers/nudge.controller');


// router.post('/nudges', nudgeController.createNudge);
// router.get('/nudges/event/:eventId', nudgeController.getNudgesByEvent);
// router.get('/nudges/active', nudgeController.getActiveNudges);

// module.exports = router;


const express = require('express');
const router = express.Router();
const nudgeController = require('../controllers/nudge.controller');

router.post('/nudges', nudgeController.createNudge);
router.get('/nudges/event/:eventId', nudgeController.getNudgesByEvent);
router.get('/nudges/active', nudgeController.getActiveNudges);
router.delete('/nudges/:id', nudgeController.deleteNudge);

module.exports = router;
