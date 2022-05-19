import "./App.css";
import "./index.css";
import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@mui/material";
import Todo from "./components/Todo";
import gif from "./images/4K-1.gif";
import axios from "axios";

function App() {
  const [ctime, setCtime] = useState();
  const UpdateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(UpdateTime, 1000);

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [inputvar, setInputvar] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await axios.get("/api/todos/");
      setTodos(res.data);
    };
    fetchTodos();
  }, []);
  // useEffect(() => {
  //   db.collection('todos').orderBy('timestamp','asc').onSnapshot(snapshot=>{
  //     setTodos(snapshot.docs.map(doc =>({id: doc.id, todo: doc.data().todo})))
  //   });
  // }, []);

  const addTodo = async (event) => {
    event.preventDefault();
    // db.collection('todos').add({
    //   todo: input,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp()
    // })

    const createData = {
      todotext: input,
    };
    try {
      await axios.post("/api/todos/", createData);
      setTodos([...todos, input]);
      setInputvar("");
      // window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="application">
      <center>
        <div class="top">
          <a
            id="icons"
            class="animate__animated animate__fadeInRightBig"
            href="https://www.instagram.com/"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            id="icons"
            class="animate__animated animate__fadeInRightBig"
            href="https://www.facebook.com/"
          >
            <i class="fab fa-facebook"></i>
          </a>
          <a
            id="icons"
            class="animate__animated animate__fadeInRightBig"
            href="https://www.linkedin.com/feed/"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            id="icons"
            class="animate__animated animate__fadeInRightBig"
            href="https://pict.ethdigitalcampus.com/DCWeb/form/jsp_common/dashBoardDetails.jsp"
          >
            <i class="fas fa-user"></i>
          </a>
          <a
            id="icons"
            class="animate__animated animate__fadeInRightBig"
            href="https://account.mongodb.com/account/login?n=%2Fv2%2F61945f521622673f60c6c47f&nextHash=%23metrics%2FreplicaSet%2F619460dce780e170ad42c720%2Fexplorer%2FpicityUsers%2Fusers%2Ffind"
          >
            <i class="fas fa-server"></i>
          </a>
          {/* <a
          id="icons"
          class="animate__animated animate__fadeInRightBig"
          href="https://www.youtube.com/"
          ><i class="fab fa-youtube"></i
        ></a> */}
          <a
            id="icons"
            class="animate__animated animate__fadeInRightBig"
            href="https://web.whatsapp.com/"
          >
            <i class="fab fa-whatsapp"></i>
          </a>
          {/* <a
          id="icons"
          class="animate__animated animate__fadeInRightBig"
          href="https://mail.google.com/mail/u/0/#inbox"
          ><i class="far fa-envelope"></i
        ></a> */}
        </div>
      </center>
      <div className="clock" style={{ color: "aqua" }}>
        <p>{ctime}</p>
      </div>
      <center>
        <img class="mobilebg" src={gif} alt="" />
      </center>
      <div className="App">
        <form>
          <FormControl>
            <InputLabel style={{ color: "aqua" }}>Write a Todo</InputLabel>
            <Input
              style={{ color: "aqua", borderBottom: "1px solid aqua" }}
              value={inputvar}
              onChange={(event) => (setInput(event.target.value) , setInputvar(event.target.value))}
            />
          </FormControl>
          <Button
            style={{
              color: "aqua",
              border: "1px solid aqua",
              marginTop: "5px",
            }}
            disabled={!input}
            type="submit"
            variant="contained"
            color="primary"
            onClick={addTodo}
          >
            Add TODO
          </Button>
        </form>
        <center>
          <div className="listsitems">
            {todos.map((todo) => (
              <Todo todo={todo} latest = {input} />
            ))}
          </div>
        </center>
      </div>
    </div>
  );
}

export default App;
