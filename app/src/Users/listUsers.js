import '../App.css';
import React, { useEffect, useState } from 'react';


const ListUsers = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('/user')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-intro">
          <h2>USERS List</h2>
          {users.map(user =>
            <div key={user.id}>
              {user.name}
            </div>
          )}
        </div>
      </header>
    </div>
  );

};
export default ListUsers;