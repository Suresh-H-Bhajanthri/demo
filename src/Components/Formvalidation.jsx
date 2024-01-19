import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import "../Styles/Forrmvaldation.css"

const Formvalidation = () => {
    const navigate = useNavigate();

  const [email , setEmail] = useState('');
  const [password ,setPassword] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'admin@gmail.com' && password === 'admin@123' && selectedCategory === 'Library') {
        navigate('/admin');
    } else if (email === 'admin@gmail.com' && password === 'admin@123' && selectedEvent === 'Event') {
        navigate('/event');
    } else {
        alert('Invalid email or password ');
    }
  }
  return (
    <div className="main-container">
    <form action="" onSubmit={handleSubmit} className='form-container'>
        <h3>Login</h3>
      <label htmlFor="email"> Enter email : 
        <input type="email" value={email} placeholder='enter email' onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label htmlFor="password"> Enter password :
        <input type="password" value={password} placeholder='enter password' onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <p>Library or Event</p>
                <label htmlFor="library">Library:
                    <input type="radio" name="category" value="Library" checked={selectedCategory === 'Library'} onChange={() => setSelectedCategory('Library')} />
                </label>
                <label htmlFor="event">Event:
                    <input type="radio" name="category" value="Event" checked={selectedEvent === 'Event'} onChange={() => setSelectedEvent('Event')} />
                </label>
      <button type='submit'>submit</button>
    </form>
    
    </div>
  )
}

export default Formvalidation