import { useState } from "react";
import "./App.scss";
import AddNotesBtn from "./components/note/AddNotesBtn";
import NotesInput from "./components/note/NotesInput";
import NotesRender from "./components/note/NotesRender";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./components/auth/LogIn";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/auth/PrivateRoute";
import { StateProvider } from "./context/StateContext";

function App() {

  return (
    <AuthProvider>
      <StateProvider>
        <Router>
            <Switch>
              <PrivateRoute exact path='/' component={NotesRender}/>
              <Route path="/login" component={LogIn}/>
            </Switch>
        </Router>
      </StateProvider>
    </AuthProvider>
  );
}

export default App;
