import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../home";
import BrowserLayout from "../../components/Layouts/Browser";
import repository from "../tags/repository";

class App extends React.Component {
    render() {
        repository.getAll();
        return (
            <Router>
                <BrowserLayout>
                    <Route path="/" exact strict component={Home} />
                </BrowserLayout>
            </Router>
        );
    }
}

export default App;