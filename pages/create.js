import { useState } from 'react';
import { useRouter } from 'next/router';

let fakeDB = []; // Simulated database

export default function Create() {
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    const newEvent = { id: fakeDB.length + 1, title, story, tags, contributions: [{ user: 'You', text: story }] };
    fakeDB.push(newEvent);
    alert('Memory created!'); // Simulate notification
    router.push('/');
  };

  const addTag = () => {
    if (tagInput) {
      setTags([...tags, tagInput]);
      setTagInput('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Create New Memory</h1>
      <label>Title:</label><br />
      <input value={title} onChange={e => setTitle(e.target.value)} style={{ width: '100%', marginBottom: '10px' }} /><br />
      <label>Your Story:</label><br />
      <textarea value={story} onChange={e => setStory(e.target.value)} style={{ width: '100%', height: '100px', marginBottom: '10px' }} /><br />
      <label>Tag People:</label><br />
      <input value={tagInput} onChange={e => setTagInput(e.target.value)} />
      <button onClick={addTag}>Add Tag</button>
      <p>Tagged: {tags.join(', ')}</p>
      <button onClick={handleSubmit}>Share Memory</button>
      <a href="/">Back</a>
    </div>
  );
}
