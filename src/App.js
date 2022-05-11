import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Edit from "./Components/Edit/Edit";
import Header from "./Components/Header/Header";

function App() {
  const [isEdit, setEdit] = React.useState(false);
  const isLoading = useSelector((state)=>state.user.pending);
  const isError = useSelector((state)=>state.user.error);
  return (
    <div className="App">
      {isEdit ? <Edit setEdit={setEdit}/> : <Header setEdit={setEdit} />}
      {isLoading && <p className="loading">Loading...</p>}
      {!isEdit && isError && <p className="error">Something went wrong</p>}
    </div>
  );
}

export default App;
