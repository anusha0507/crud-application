import { Link } from "react-router-dom";
import styles from "./User.module.css";
const User = () => {
  return (
    <div className={styles.userTable}>
      <Link to={"/add"} className={styles.addBtn}>Add User</Link>
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
        <tr>
          <th scope="row">1</th>
          <td>Anusha Sahu</td>
          <td>anusha@gmail.com</td>
          <td className={styles.actionBtn}>
          <button>Delete</button>
          <Link to={"/edit"}>Edit</Link>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
