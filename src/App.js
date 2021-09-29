import { useMockUser } from "./hooks/useMockUser";

function App() {
  const { loading, error, data } = useMockUser();
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="App">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
