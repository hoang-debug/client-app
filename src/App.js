import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Edit from "./Components/Edit/Edit";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ModalPost from "./Components/Posts/ModalPost";
import Posts from "./Components/Posts/Posts";

function App() {
  const [isEdit, setEdit] = React.useState(false);
  const [isOpenPost, setOpenPost] = React.useState(false);
  const isLoading = useSelector((state) => state.user.pending);
  const isError = useSelector((state) => state.user.error);
  return (
    <div className="App">
      {isEdit ? (
        <Edit setEdit={setEdit} />
      ) : !isEdit && !isOpenPost ? (
        <>
          <Header setEdit={setEdit} />
          <div className="posts-container">
          <Posts />
          </div>
          <Footer isOpenPost={isOpenPost} setOpenPost={setOpenPost} />
        </>
      ) : (
        <>
          <Header setEdit={setEdit} />
          <ModalPost setOpenPost={setOpenPost} />
          <Footer isOpenPost={isOpenPost} setOpenPost={setOpenPost} />
        </>
      )}

      {isLoading && <p className="loading">Loading...</p>}
      {!isEdit && isError && <p className="error">Something went wrong</p>}
    </div>
  );
}

export default App;
