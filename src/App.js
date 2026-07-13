import logo from './logo.svg';
import Header from './components/Header/Header';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import {Routes, Route} from 'react-router-dom';
import Scanner from './pages/Scanner/Scanner';
import Login from './pages/Login/Login';
import EnterAmount from './pages/EnterAmount/EnterAmount';
import Expenses from './pages/Expenses/Expenses';
import EditBudget from './pages/EditBudget/EditBudget';

function App() {


  return (
    <Routes>
      <Route path = {"/"} element = {<Dashboard />}></Route>
      <Route path = {"/scan"} element = {<Scanner />}></Route>
      <Route path = {"/login"} element = {<Login />}></Route>
      <Route path = {"/enter-amount"} element = {<EnterAmount />}></Route>
      <Route path = {"/my-expenses"} element = {<Expenses />}></Route>
      <Route path = {"/edit-budget"} element = {<EditBudget />}></Route>
    </Routes>
  );
}

export default App;
