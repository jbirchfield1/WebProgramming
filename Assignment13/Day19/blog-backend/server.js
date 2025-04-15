const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

//middleware

app.use(cors());
app.use(express.json());

//connect to MongoDB

mongoose.connect('mongodb://localhost:27017/blogDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>console.log('MongoDB Connected'))
.catch((err)=>console.error('MongoDB error', err));

//Define schema and model

const postSchema = mongoose.Schema({
    title: String,
    body: String,
});

const Post = mongoose.model('Post', postSchema);

//Add routes

app.get('/posts', async (req, res) =>{
    try{
        const posts = await Post.find();
        res.json(posts);
    } catch(err){
        res.status(500).json({message: 'Failed to fetch posts'});
    }
});

app.post('/posts', async (req, res) => {
    try{
        const {title, body} = req.body;
        const newPost = new Post({title, body});
        await newPost.save();
        res.json(newPost);
    } catch(err){
        res.status(500).json({message: 'Failed to save post!'});
    }
});

app.delete('/posts/:id', async (req, res) => {
    try {
      const deleted = await Post.findByIdAndDelete(req.params.id);
      if (!deleted) return res.status(404).send("Post not found");
      res.status(200).send("Post deleted");
    } catch (err) {
      res.status(500).send("Error deleting post");
    }
  });

app.put('/posts/:id', async (req, res) =>{
    try{
        const updated = await Post.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send("Post Updated");
    } catch(err){
        res.status(500).send("Error updating post");
    }
})

//start server

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
