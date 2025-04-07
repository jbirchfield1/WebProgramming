import express from 'express';
const router = express.Router();

router.get('/personalinfo', async (req, res) => {
  const db = req.app.locals.personalDB;
  const result = await db.query('SELECT * FROM details');
  res.json(result.rows);
});

router.get('/hobbies', async (req, res) => {
  const db = req.app.locals.hobbiesDB;
  const result = await db.query('SELECT * FROM hobby_list');
  res.json(result.rows);
});

export default router;
