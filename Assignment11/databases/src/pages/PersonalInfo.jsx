import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Personal() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/personalinfo')
      .then(res => setInfo(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Personal Info</h2>
      <ul>
        {info.map((p) => (
          <li key={p.id}>{p.name} - {p.age} - {p.email}</li>
        ))}
      </ul>
    </div>
  );
}