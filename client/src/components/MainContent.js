import React from "react";
import {
  HomePage,
  Login,
  SignUp,
  ListPlant,
  Steps,
  AddPlant,
  EditPlant,
  AddStep,
  EditStep,
  EditComment,
  ListTutorial,
  Profile,
  EditPassword,
  EditProfile,
  EditAvatar,
  ListProfile,
  AddTutorial,
  EditTutorial,
} from "../pages";
import { Routes, Route } from "react-router-dom";

const MainContent = (props) => {
  const { loginCbHandler } = props;
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="users" element={<ListProfile></ListProfile>}></Route>
        <Route path="users">
          <Route path="detail" element={<Profile></Profile>}></Route>
          <Route
            path="login"
            element={<Login loginCbHandler={loginCbHandler}></Login>}
          ></Route>
          <Route path="register" element={<SignUp></SignUp>}></Route>
          <Route path="edit">
            <Route path="profile" element={<EditProfile></EditProfile>}></Route>
            <Route
              path="password"
              element={<EditPassword></EditPassword>}
            ></Route>
            <Route path="avatar" element={<EditAvatar></EditAvatar>}></Route>
          </Route>
        </Route>
        <Route path="/plants" element={<ListPlant></ListPlant>}></Route>
        <Route path="/plants">
          <Route path='add' element={<AddPlant></AddPlant>}></Route>
          <Route path='delete'>
            <Route path=':plantId' element={<ListPlant></ListPlant>}></Route>
          </Route>
          <Route path='edit'>
            <Route path=':plantId' element={<EditPlant></EditPlant>}></Route>
          </Route>
        </Route>
        <Route path="/tutorials" element={<ListTutorial></ListTutorial>}></Route>
        <Route path="/tutorials">
          <Route path="add" element={<AddTutorial></AddTutorial>}></Route>
          <Route path="edit">
            <Route path=":tutorialId" element={<EditTutorial></EditTutorial>}></Route>
          </Route>
        </Route>
        <Route path="/steps/:stepId" element={<Steps></Steps>}></Route>
        <Route path="/steps">
          <Route path="add" element={<AddStep></AddStep>}></Route>
          <Route path='edit'>
            <Route path=":stepId" element={<EditStep></EditStep>}></Route>
          </Route>
        </Route>
        <Route path='/comments'>
          <Route path='edit/:commentId' element={<EditComment></EditComment>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default MainContent;
