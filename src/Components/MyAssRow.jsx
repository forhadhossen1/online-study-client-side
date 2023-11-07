import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyAssRow = ({ assignment }) => {
    const { title, mark, } = assignment || {};
    const { user } = useContext(AuthContext);
    return (

        <tr>
            <td  className="py-5">{user.displayName}</td>
            <td>{title}</td>
            <td>pendign</td>
            <td>{mark}</td>
            <td>Pending</td>
            <td>Pending</td>
        </tr>

    );
};

export default MyAssRow;