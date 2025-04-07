import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Hobbies() {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/hobbies')
      .then(res => setHobbies(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Hobbies</h2>
      <ul>
        {hobbies.map((h) => (
          <li key={h.id}>
            <strong>{h.title}</strong>: {h.description}
          </li>
        ))}
      </ul>
    </div>
  );
}