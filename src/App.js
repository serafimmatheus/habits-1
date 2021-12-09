import "./App.css";

import { Route, Switch, useHistory } from "react-router-dom";

import api from "./services/api";

import Habits from "./Pages/Habits";
import Groups from "./Pages/Groups";

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
      <button onClick={() => history.push("/habits")}>HABITS</button>
      <button onClick={() => history.push("/groups")}>GROUPS</button>
      <Switch>
        <Route path="/habits" component={Habits} />
        <Route path="/groups" component={Groups} />
      </Switch>
    </div>
  );
}

export default App;
