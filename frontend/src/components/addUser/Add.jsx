// import React from 'react'
import { useState } from "react";
import styles from "./Add.module.css";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Add = () => {
  const users = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const [user, setUser] = useState(users);
  const inputHandler = (e) => {

    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const submitForm = async (e) => {

    e.preventDefault();
    console.log("Sending data:", user);
    try {
        const response = await axios.post("http://localhost:3000/api/create/", user);
        console.log(response.data.msg);
        
        toast.success(response.data.msg, {position:"top-right"});
        navigate("/");
        
    } catch (error) {
        console.log(error);
        toast.error("An error occurred while submitting the form", { position: "top-right" });
    }
  }
  return (
    <div className={styles.addUser}>
      <Link to={"/"}>Back</Link>
      <h4>Add a new user</h4>
      <form  onSubmit={submitForm} className={styles.formContainer}>
        <div className={styles.inputGrp}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="fname"
            onChange={inputHandler}
            id="fname"
            autoComplete="off"
            placeholder="First Name"
          />
        </div>
        <div className={styles.inputGrp}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="lname"
            onChange={inputHandler}
            id="lname"
            autoComplete="off"
            placeholder="Last Name"
          />
        </div>
        <div className={styles.inputGrp}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            onChange={inputHandler}
            id="email"
            autoComplete="off"
            placeholder="Email"
          />
        </div>
        <div className={styles.inputGrp}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={inputHandler}
            id="password"
            autoComplete="off"
            placeholder="Password"
          />
        </div>
        <div className={styles.inputGrp}>
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
