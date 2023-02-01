import axios from 'axios';
import { useState } from 'react';

const url = 'http://localhost:5000/api';

function App() {

  const [students, setStudents] = useState([]);

  async function getHomeData() {
    try {
      const response = await axios.get(url + '/home');
      const data = response.data;
      setStudents(data);
    } catch (error) {
      console.error('Error', error.message);
    }
  };

  getHomeData();


  return (
    <>
      <ul>
        {
          students.map((student) => {
            return (
              <>
                <li>
                  <h3>Name:{student.name}</h3>
                  <h4>Age:{student.age}</h4>
                  <h4>Gender:{student.gender}</h4>
                </li>
              </>
            )
          })
        }
      </ul>
    </>
  )
}

export default App