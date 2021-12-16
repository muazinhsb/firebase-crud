import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users"); //get all collection

  const createUser = async () => {
    await addDoc(usersCollectionRef, {name: newName, age: Number(newAge)});
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newField = {age: age + 1};
    await updateDoc(userDoc, newField);
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="App">
      <input
        placeholder="Name"
        type="text"
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <input
        placeholder="Age"
        type="number"
        onChange={(e) => {
          setNewAge(e.target.value);
        }}
      />
      <button onClick={createUser}>Create User</button>
      {users.map((user) => {
        return (
          <div>
            {" "}
            <h1>Name: {user.name} </h1>
            <h1>Age: {user.age} </h1> <br />
            <button onClick={() => {updateUser(user.id, user.age)}}>Increase Age</button>
            <button onClick={() => {deleteUser(user.id)}}>Delete User</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
