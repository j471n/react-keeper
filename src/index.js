import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AddNote from "./components/AddNote";
import Error from "./components/Error";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/add">
                    <AddNote />
                </Route>
                <Route exact path="/">
                    <App />
                </Route>
                <Route path="*">
                    <Error></Error>
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
