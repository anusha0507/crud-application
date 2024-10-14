import { Link } from "react-router-dom";
import styles from "./User.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/api/getAll");
      setUsers(response.data);
    };
    fetchData();
  },[]);

  const deleteUser = async (userId) =>{
    await axios.delete(`http://localhost:3000/api/delete/${userId}`)
    .then((response) =>{
      setUsers((prevUser)=> prevUser.filter((user)=> user._id != userId))
      toast.success(response.data.msg);
    })
    .catch((error) =>{
      console.log(error);
      toast.error("Something went wrong");
    })
  }
  return (
    <div className={styles.userTable}>
      <Link to={"/add"} className={styles.addBtn}>
        Add User
      </Link>
      <table className={`${styles.tableContainer} table table-hover`}>
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Username</th>
            <th scope="col">Email Address</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="table-group-dividers">
          {users.map((user, index) => {
            return(
              <tr key={user._id}>
              <th scope="row">{index+1}</th>
              <td>
                {user.fname} {user.lname}
              </td>
              <td>{user.email}</td>
              <td className={styles.actionBtn}>
                <button onClick={() =>deleteUser(user._id)}>Delete</button>
                <Link to={`/edit/${user._id}`}>Edit</Link>
              </td>
            </tr>
            )
          })
          }
        </tbody>
      </table>
    </div>
  );
};

export default User;
