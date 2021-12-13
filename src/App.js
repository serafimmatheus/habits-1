import "./App.css";

import { Route, Switch, useHistory } from "react-router-dom";

import api from "./services/api";

import Habits from "./Pages/Habits";

function App() {
  //Código criado para teste da feature Habits
  const history = useHistory();

  const testUser = {
    username: "testador-teste",
    password: "123456",
  };

  const loginTest = (user) => {
    api
      .post("/sessions/", user)
      .then((response) => {
        const { access } = response.data;
        localStorage.setItem("@Habits:token", access);
        history.push("/habits");
      })
      .catch((err) => console.log(err));
  };

  //Código criado para teste da feature Habits

  return (
    <div className="App">
      <button onClick={() => loginTest(testUser)}>LOGIN</button>
      <Switch>
        <Route path="/habits" component={Habits} />
      </Switch>
    </div>
  );
}

export default App;
