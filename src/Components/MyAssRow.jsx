import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyAssRow = ({ assignment }) => {
    const { title, mark, } = assignment || {};
    const { user } = useContext(AuthContext);
    return (

        <tr>
            <td>{user.displayName}</td>
            <td>{title}</td>
            <td>pending</td>
            <td>{mark}</td>
            <td>12/16/2020</td>
            <td>aksobis</td>
        </tr>

    );
};

export default MyAssRow;