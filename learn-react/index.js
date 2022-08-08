import { React } from "react";
import { ReactDOM } from "react-dom";


const navbar =(
    
        <nav>
            <h1>Website</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Conact</li>
            </ul>
        </nav>
    );

   console.log("Teste")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<navbar />);

//ReactDOM.render(navbar, document.getElementById("root"))
//ReactDOM.createRoot(document.getElementById("root")).render(navbar)

