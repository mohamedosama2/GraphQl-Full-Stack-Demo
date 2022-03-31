import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";

/* mutation{
    addUser(firstName:"mohamed1",age:20,){
      id
    }
  }
 */

function App2() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const ADD_USER = gql`
    # Increments a back-end add user and gets its resulting value
    mutation AddUser($name: String!, $age: Int!) {
      addUser(firstName: $name, age: $age) {
        id
      }
    }
  `;
  const [addUserHandler, { data }] = useMutation(ADD_USER);

  const [desc, setDesc] = useState("");
  return (
    <div>
      <h2>Create a new User</h2>
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
      />
      <input
        type={"number"}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Your Age"
      />
      <input
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Your Describtion"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          addUserHandler({
            variables: { name: name, age: parseInt(age) },
          });
        }}
      >
        Add a User
      </button>
    </div>
  );
}

export default App2;
