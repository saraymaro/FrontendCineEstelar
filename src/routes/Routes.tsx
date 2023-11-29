
import { Route, Router } from "react-router-dom";
import { Home } from "../views/Home/Home";

{/* <Router> */}
function Routes(): React.JSX.Element {
    return (
            <Routes>
                <Route path="/cartelera" element={ <Home /> } />
            </Routes>
    );
}

export { Routes }