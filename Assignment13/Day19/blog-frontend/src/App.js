import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App(){
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({title:'', body:''});

  useEffect(() => {
    axios.get('http://localhost:5000/posts')
    .then(res=> setPosts(res.data))
    .catch(err=> console.error("Error fetching posts:", err));
  }, []);

  const handleChange = (e) =>{
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/posts', form)
    .then(res=>{
      setPosts([...posts, res.data]);
      setForm({title:'', body:''})
    })
    .catch(err=>console.error("Error submitting the post:", err));
  };

  const handleDelete = (_id) => {

    axios.delete(`http://localhost:5000/posts/${_id}`)
      .then(() => {
        setPosts(posts.filter(post => post._id !== _id));
      })
      .catch(err => console.error("Error deleting the post:", err));
  };

  const handleUpdate = (_id) => {
    axios.put(`http://localhost:5000/posts/${_id}`)
    .then(() =>{
        
    })
    .catch(err => console.error("Error updating the post:", err))
  }

  return(
    <div style={{padding:'20px', maxWidth:'600px', margin:'auto'}}>
      <h2>Create a Blog Post</h2>
      <form onSubmit={handleSubmit} style={{marginBotton: '2rem'}}>
        <input 
        name = "title" 
        placeholder="Post Title" 
        value={form.title} 
        onChange={handleChange} 
        style ={{width: '100%', padding: '10px', marginBottom: '10px'}}/>

        <textarea 
        name="body"
        placeholder="Post Body"
        value = {form.body}
        onChange={handleChange}
        style={{width:'100%', padding:'10px', height:'10px', marginBottom:'10px'}}/>

        <button type="submit" style={{padding: '10px 20px'}}>Submit Post</button>
      </form>

      <h2>Blog Posts</h2>

      {posts.map(post => (
        <div key={post._id} style={{border: '1px solid #ccc', padding:'10px', marginBottom:'15px'}}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button 
            onClick={() => handleDelete(post._id)} style={{padding: '5px 10px', backgroundColor: 'red', color: 'white', border: 'none'}}>
            Delete
          </button>
          </div>
      ))}
    </div>
  )
}

export default App;