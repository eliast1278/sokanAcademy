import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Switch } from "react-router-dom";
import Route from "react-router-dom/es/Route";
import { ToastContainer } from "react-toastify";

//components
import NotFound from "./components/main/notFound";
//private route includes header and footer
import PrivateRoute from "./components/public/privateRoute";
import Dashboard from "./components/pages/dashboard/dashboard";

function App() {
  return (
    <>
      <Switch>
        <PrivateRoute path="/" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
      <ToastContainer rtl className="rtl toast-style" />
    </>
  );
}

export default App;
