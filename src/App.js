import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Book from "./components/Dashboard/Book/Book";
import BookingList from "./components/Dashboard/BookingList/BookingList";
import Review from "./components/Dashboard/Review/Review";
import Login from "./components/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import OrderList from "./components/Dashboard/Admin/OrderList/OrderList";
import AddService from "./components/Dashboard/Admin/AddService/AddService";
import MakeAdmin from "./components/Dashboard/Admin/MakeAdmin/MakeAdmin";
import ManageService from "./components/Dashboard/Admin/ManageService/ManageService";

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/book/:id">
            <Book></Book>
          </PrivateRoute>
          <Route path="/booking-list">
            <BookingList></BookingList>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>


          <Route path="/order-list">
            <OrderList></OrderList>
          </Route>

          <Route path="/add-service">
            <AddService></AddService>
          </Route>

          <Route path="/make-admin">
            <MakeAdmin></MakeAdmin>
          </Route>

          <Route path="/manage-service">
            <ManageService></ManageService>
          </Route>








          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}
export default App;
