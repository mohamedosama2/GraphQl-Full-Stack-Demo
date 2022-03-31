import "./App.css";
import { gql, useQuery } from "@apollo/client";

 const EXCHANGE_RATES = gql`
  {
    users {  
      firstName
      id
      age
    }
  }
`;

function App() {
  const { data } = useQuery(EXCHANGE_RATES);
  console.log(data)
  return (
    <div className="App">
      {data?.users.map((user) => (
        <h1 key={user.id}>{user.firstName}</h1>
      ))}
    </div>
  );
}

export default App;
