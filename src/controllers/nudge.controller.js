// const db = require('../config/db');

// // CREATE NUDGE
// exports.createNudge = (req, res) => {
//   const {
//     event_id,
//     title,
//     description,
//     image_url,
//     start_time,
//     end_time,
//     icon
//   } = req.body;

//   if (!event_id || !title) {
//     return res.status(400).json({ message: 'event_id and title are required' });
//   }

//   // Check event exists
//   db.query(
//     'SELECT id FROM events WHERE id = ?',
//     [event_id],
//     (err, event) => {
//       if (err) return res.status(500).json({ error: err.message });
//       if (event.length === 0)
//         return res.status(404).json({ message: 'Event not found' });

//       const sql = `
//         INSERT INTO nudges
//         (event_id, title, description, image_url, start_time, end_time, icon)
//         VALUES (?, ?, ?, ?, ?, ?, ?)
//       `;

//       db.query(
//         sql,
//         [event_id, title, description, image_url, start_time, end_time, icon],
//         (err, result) => {
//           if (err) return res.status(500).json({ error: err.message });

//           res.status(201).json({
//             message: 'Nudge created successfully',
//             nudgeId: result.insertId
//           });
//         }
//       );
//     }
//   );
// };

// // GET NUDGES BY EVENT
// exports.getNudgesByEvent = (req, res) => {
//   const { eventId } = req.params;

//   db.query(
//     'SELECT * FROM nudges WHERE event_id = ? ORDER BY created_at DESC',
//     [eventId],
//     (err, results) => {
//       if (err) return res.status(500).json({ error: err.message });

//       res.json({
//         count: results.length,
//         nudges: results
//       });
//     }
//   );
// };

// // GET ACTIVE NUDGES (TIME-BASED)
// exports.getActiveNudges = (req, res) => {
//   const now = new Date();

//   db.query(
//     `SELECT * FROM nudges
//      WHERE start_time <= ? AND end_time >= ?
//      ORDER BY start_time ASC`,
//     [now, now],
//     (err, results) => {
//       if (err) return res.status(500).json({ error: err.message });

//       res.json({
//         activeCount: results.length,
//         nudges: results
//       });
//     }
//   );
// };



const db = require('../config/db');

// CREATE NUDGE
exports.createNudge = (req, res) => {
  const {
    event_id,
    title,
    description,
    image_url,
    start_time,
    end_time,
    icon
  } = req.body;

  if (!event_id || !title) {
    return res.status(400).json({ message: 'event_id and title are required' });
  }

  db.query(
    'SELECT id FROM events WHERE id = ?',
    [event_id],
    (err, event) => {
      if (err) return res.status(500).json({ error: err.message });
      if (event.length === 0)
        return res.status(404).json({ message: 'Event not found' });

      const sql = `
        INSERT INTO nudges
        (event_id, title, description, image_url, start_time, end_time, icon)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;

      db.query(
        sql,
        [event_id, title, description, image_url, start_time, end_time, icon],
        (err, result) => {
          if (err) return res.status(500).json({ error: err.message });

          res.status(201).json({
            message: 'Nudge created successfully',
            nudgeId: result.insertId
          });
        }
      );
    }
  );
};

// GET NUDGES BY EVENT
exports.getNudgesByEvent = (req, res) => {
  const { eventId } = req.params;

  db.query(
    'SELECT * FROM nudges WHERE event_id = ? ORDER BY created_at DESC',
    [eventId],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });

      res.json({
        count: results.length,
        nudges: results
      });
    }
  );
};

// GET ACTIVE NUDGES
exports.getActiveNudges = (req, res) => {
  const now = new Date();

  db.query(
    `
    SELECT * FROM nudges
    WHERE start_time <= ? AND end_time >= ?
    ORDER BY start_time ASC
    `,
    [now, now],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });

      res.json({
        activeCount: results.length,
        nudges: results
      });
    }
  );
};

// DELETE NUDGE
exports.deleteNudge = (req, res) => {
  const { id } = req.params;

  db.query(
    'DELETE FROM nudges WHERE id = ?',
    [id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.affectedRows === 0)
        return res.status(404).json({ message: 'Nudge not found' });

      res.json({ message: 'Nudge deleted successfully' });
    }
  );
};
