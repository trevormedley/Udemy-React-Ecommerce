import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home/HomeComponent";
import Navigation from "./Routes/Navigation/NavigationComponent";
import SignIn from "./Routes/SignIn/SignInComponent";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path="sign-in" element={<SignIn />}/>
      </Route>
    </Routes>
  );
};

export default App;
