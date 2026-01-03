import { useRouter } from 'next/router';
import { useState } from 'react';

// Reuse the fakeDB from create.js (in a real app, this would be a shared module)
const fakeDB = [];

export default function EventDetail() {
  const router = useRouter();
  const { id } = router.query;
  const event = fakeDB.find(e => e.id === parseInt(id)) || { title: 'Not Found', contributions: [] };
  const [newContribution, setNewContribution] = useState('');

  const addContribution = () => {
    if (newContribution) {
      event.contributions.push({ user: 'Friend', text: newContribution });
      setNewContribution('');
      alert('Story added!'); // Simulate tag notification
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>{event.title}</h1>
      <h2>Stories:</h2>
      {event.contributions.map((contrib, idx) => (
        <div key={idx} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
          <p><strong>{contrib.user}:</strong> {contrib.text}</p>
          <button>Like</button> <button>Comment</button>
        </div>
      ))}
      <h2>Add Your Perspective:</h2>
      <textarea value={newContribution} onChange={e => setNewContribution(e.target.value)} style={{ width: '100%', height: '100px' }} /><br />
      <button onClick={addContribution}>Post</button>
      <a href="/">Back to Home</a>
    </div>
  );
}
