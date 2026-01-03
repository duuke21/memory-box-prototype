import { useState } from 'react';

export default function Home() {
  const [events, setEvents] = useState([
    { id: 1, title: 'My 10th Birthday Party - 2005', snippet: 'I remember the cake...', tagged: ['@friend1', '@friend2'] },
    { id: 2, title: 'Prom Night 2018', snippet: 'Dancing under the stars...', tagged: ['@date', '@bestie'] },
  ]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Memory Box</h1>
      <p>Welcome back!</p>
      <a href="/create" style={{ display: 'block', marginBottom: '20px' }}>Start a New Memory</a>
      {events.map(event => (
        <div key={event.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h2>{event.title}</h2>
          <p>{event.snippet}</p>
          <p>Tagged: {event.tagged.join(', ')}</p>
          <button>Like</button> <button>Comment</button> <a href={`/event/${event.id}`}>Add Your Story</a>
        </div>
      ))}
      <nav style={{ position: 'fixed', bottom: 0, width: '100%', display: 'flex', justifyContent: 'space-around' }}>
        <a href="/">Home</a> <a href="/search">Search</a> <a href="/create">Create</a> <a href="/notifications">Notifications</a> <a href="/profile">Profile</a>
      </nav>
    </div>
  );
}
