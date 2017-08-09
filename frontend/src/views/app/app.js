import { h } from 'hyperapp';

export default ({ state, logout, deleteUser }) =>
  <div>
    <h1>App</h1>
    <button onclick={deleteUser}>Delete User</button>
    <button onclick={logout}>Logout</button>
  </div>;
