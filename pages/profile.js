export default function Profile() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Profile</h1>
      <p>Username: @yourusername</p>
      <p>Bio: Memory collector since 2026</p>
      <h2>My Memories</h2>
      <ul>
        <li>Birthday Party</li>
        <li>Prom Night</li>
        {/* Add dynamic list later */}
      </ul>
      <a href="/">Back</a>
    </div>
  );
}
