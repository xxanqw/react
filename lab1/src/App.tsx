import DataTable from './DataTable';
import './App.css';

function App() {
  const data = [
    { name: 'Alice', age: 25, email: 'alice@example.com' },
    { name: 'Bob', age: 30, email: 'bob@example.com' },
    { name: 'Charlie', age: 35, email: 'charlie@example.com' },
  ];

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'email', label: 'Email' },
  ];

  return (
    <div>
      <h1>Data Table</h1>
      <DataTable data={data} columns={columns} />
    </div>
  );
}

export default App;