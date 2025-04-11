import express from 'express';
const router = express.Router();

//GETting information form database
router.get('/personalinfo', async (req, res) => {
  try{
  const db = req.app.locals.personalDB;
  const result = await db.query('SELECT * FROM details');
  res.json(result.rows);
  }catch(err){
    console.error(err.message);
    res.status(500).send("Server Error!");
}
});

router.get('/hobbies', async (req, res) => {
  try{
  const db = req.app.locals.hobbiesDB;
  const result = await db.query('SELECT * FROM hobby_list');
  res.json(result.rows);
  }catch(err){
    console.error(err.message);
    res.status(500).send("Server Error!");
}
});

//exporting routes
export default router;
