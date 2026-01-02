// const db = require('../config/db');

// // CREATE EVENT
// exports.createEvent = (req, res) => {
//   const {
//     name,
//     tagline,
//     description,
//     schedule,
//     moderator,
//     category,
//     sub_category,
//     rigor_rank,
//     image_url
//   } = req.body;

//   const sql = `
//     INSERT INTO events
//     (name, tagline, description, schedule, moderator, category, sub_category, rigor_rank, image_url)
//     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
//   `;

//   db.query(
//     sql,
//     [name, tagline, description, schedule, moderator, category, sub_category, rigor_rank, image_url],
//     (err, result) => {
//       if (err) return res.status(500).json({ error: err.message });
//       res.status(201).json({
//         message: 'Event created successfully',
//         eventId: result.insertId
//       });
//     }
//   );
// };

// // GET ALL EVENTS (pagination + latest first)
// exports.getAllEvents = (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const limit = parseInt(req.query.limit) || 5;
//   const offset = (page - 1) * limit;

//   const sql = `
//     SELECT * FROM events
//     ORDER BY created_at DESC
//     LIMIT ? OFFSET ?
//   `;

//   db.query(sql, [limit, offset], (err, results) => {
//     if (err) return res.status(500).json({ error: err.message });

//     res.json({
//       page,
//       limit,
//       count: results.length,
//       events: results
//     });
//   });
// };

// // GET EVENT BY ID
// exports.getEventById = (req, res) => {
//   const { id } = req.params;

//   db.query(
//     'SELECT * FROM events WHERE id = ?',
//     [id],
//     (err, results) => {
//       if (err) return res.status(500).json({ error: err.message });
//       if (results.length === 0)
//         return res.status(404).json({ message: 'Event not found' });

//       res.json(results[0]);
//     }
//   );
// };

// // DELETE EVENT
// exports.deleteEvent = (req, res) => {
//   const { id } = req.params;

//   db.query(
//     'DELETE FROM events WHERE id = ?',
//     [id],
//     (err, result) => {
//       if (err) return res.status(500).json({ error: err.message });
//       if (result.affectedRows === 0)
//         return res.status(404).json({ message: 'Event not found' });

//       res.json({ message: 'Event deleted successfully' });
//     }
//   );
// };



const db = require('../config/db');

// CREATE EVENT
exports.createEvent = (req, res) => {
  const {
    name,
    tagline,
    description,
    schedule,
    moderator,
    category,
    sub_category,
    rigor_rank,
    image_url
  } = req.body;

  const sql = `
    INSERT INTO events
    (name, tagline, description, schedule, moderator, category, sub_category, rigor_rank, image_url)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, tagline, description, schedule, moderator, category, sub_category, rigor_rank, image_url],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({
        message: 'Event created successfully',
        eventId: result.insertId
      });
    }
  );
};

// GET ALL EVENTS (latest + pagination)
exports.getAllEvents = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const offset = (page - 1) * limit;

  const sql = `
    SELECT * FROM events
    ORDER BY created_at DESC
    LIMIT ? OFFSET ?
  `;

  db.query(sql, [limit, offset], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    res.json({
      page,
      limit,
      count: results.length,
      events: results
    });
  });
};

// GET EVENT BY ID
exports.getEventById = (req, res) => {
  const { id } = req.params;

  db.query(
    'SELECT * FROM events WHERE id = ?',
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0)
        return res.status(404).json({ message: 'Event not found' });

      res.json(results[0]);
    }
  );
};

// UPDATE EVENT
exports.updateEvent = (req, res) => {
  const { id } = req.params;

  const {
    name,
    tagline,
    description,
    schedule,
    moderator,
    category,
    sub_category,
    rigor_rank,
    image_url
  } = req.body;

  const sql = `
    UPDATE events SET
      name = ?,
      tagline = ?,
      description = ?,
      schedule = ?,
      moderator = ?,
      category = ?,
      sub_category = ?,
      rigor_rank = ?,
      image_url = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [
      name,
      tagline,
      description,
      schedule,
      moderator,
      category,
      sub_category,
      rigor_rank,
      image_url,
      id
    ],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      if (result.affectedRows === 0)
        return res.status(404).json({ message: 'Event not found' });

      res.json({ message: 'Event updated successfully' });
    }
  );
};

// DELETE EVENT
exports.deleteEvent = (req, res) => {
  const { id } = req.params;

  db.query(
    'DELETE FROM events WHERE id = ?',
    [id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.affectedRows === 0)
        return res.status(404).json({ message: 'Event not found' });

      res.json({ message: 'Event deleted successfully' });
    }
  );
};
