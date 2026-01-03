export default function Notifications() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Notifications</h1>
      <ul>
        <li>Notification 1: You were tagged in a memory (1h ago)</li>
        <li>Notification 2: New story added to an event (3h ago)</li>
        {/* Add more dynamic notifications later */}
      </ul>
      <a href="/">Back</a>
    </div>
  );
}
