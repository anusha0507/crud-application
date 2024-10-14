// import React from 'react'
import { Link, useNavigate, useParams } from "react-router-dom"
import styles from "./Edit.module.css"
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Edit = () => {

    const navigate = useNavigate();

    const users = {
        fname:"",
        lname:"",
        email:"",
    }

    const {id} = useParams();
    const [user, setUser] = useState(users);

    const inputChangeHandler = (e) =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value});
        console.log(user);
    }

    useEffect(() =>{
        axios.get(`http://localhost:3000/api/getUser/${id}`)
        .then((response) =>{
            console.log(response);
            setUser(response.data)
        })
        .catch((error) =>{
            console.log(error);
            
        })
    },[id])

    const submitForm = async (e) => {

        e.preventDefault();
        
        try {
            const response = await axios.put(`http://localhost:3000/api/update/${id}`, user);
            console.log(response.data.msg);
            
            toast.success(response.data.msg, {position:"top-right"});
            navigate("/");
            
        } catch (error) {
            console.log(error);
            toast.error("An error occurred while submitting the form", { position: "top-right" });
        }
      }


  return (
    <div className={styles.editUser}>
      
      <h4>Add a new user</h4>
      <form className={styles.formContainer} onSubmit={submitForm}>
        <div className={styles.inputGrp}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="fname"
            id="fname"
            value={user.fname}
            onChange={inputChangeHandler}
            autoComplete="off"
            placeholder="First Name"
          />
        </div>
        <div className={styles.inputGrp}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="lname"
            id="lname"
            value={user.lname}
            onChange={inputChangeHandler}
            autoComplete="off"
            placeholder="Last Name"
          />
        </div>
        <div className={styles.inputGrp}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={inputChangeHandler}
            autoComplete="off"
            placeholder="Email"
          />
        </div>
        <div className={styles.btnGrp}>
          <Link to={"/"}>Back</Link>
          <button type="submit">Update</button> 
        </div>
      </form>
    </div>
  )
}

export default Edit