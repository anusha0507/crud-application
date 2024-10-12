// import React from 'react'
import styles from './Add.module.css'

import { Link } from "react-router-dom"

const Add = () => {
  return (
    <div className={styles.addUser}>
        <Link to={"/"}>Back</Link>
        <h4>Add a new user</h4>
        <div className={styles.formContainer}>
            <div className={styles.inputGrp}>
                <label>First Name</label>
                <input type="text" name="fname" id="fname" autoComplete="off" placeholder="First Name" />
            </div>
            <div className={styles.inputGrp}>
                <label>Last Name</label>
                <input type="text" name="lname" id="lname" autoComplete="off" placeholder="Last Name" />
            </div>
            <div className={styles.inputGrp}>
                <label>Email Address</label>
                <input type="email" name="email" id="email" autoComplete="off" placeholder="Email" />
            </div>
            <div className={styles.inputGrp}>
                <label>Password</label>
                <input type="text" name="fname" id="password" autoComplete="off" placeholder="Password" />
            </div>
            <div className={styles.inputGrp}>
                <button type="submit">Add User</button>
            </div>
        </div>
    </div>
  )
}

export default Add