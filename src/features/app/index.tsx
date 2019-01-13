import * as React from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Home from "../home";
import Tags from "../tags";
import Single from "../tags/Single";

const HomeWithRouter = withRouter(Home);

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <HomeWithRouter />
                    <Route path="/" exact strict component={Tags} />
                    <Route path="/:id" component={Single} />
                </div>
            </Router>
        );
    }
}

export default App;