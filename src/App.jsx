import { createRoot } from "react-dom/client";
import Info from "./Info";
import SearchParams from "./SearchParams";
import AnimalDropdown from "./AnimalDropdown";
import "./style.css";

const App = () => {
    return (
        <div className="App">

            <div className="about-container">
                <h1>About Us!</h1>

                <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Work</th>
                    </tr>

                    <Info name="Ajay" age="23" work="Web Developer" />
                    <Info name="Shivay" age="25" work="Freelancer" />
                    <Info name="Pawan" age="22" work="SDE" />

                </table>
            </div>
            <hr />
            <div className="search-params-container">
                <SearchParams />
            </div>
            <hr />
            <div className="animal-container">
                <AnimalDropdown />
            </div>
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
