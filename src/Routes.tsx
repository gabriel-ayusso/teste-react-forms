import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Spinner from "./components/Spinner";
import Formulario from "./pages/Formulario";
import Home from "./pages/Home";

export default function Routes() {
    return (
        <Suspense fallback={<Spinner />}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/formulario" component={Formulario} />
            </Switch>
        </Suspense>
    )
}