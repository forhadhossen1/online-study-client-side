
const SubAssRow = ({ assignment , handleDelete}) => {

    const { mark, title, _id } = assignment || {};
    return (
        <tr>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                {title}
            </td>
            <td>
                {mark}
            </td>
            <td>Pending</td>
            <th>
                <button className="btn btn-ghost btn-xs">Give Mark</button>
            </th>
        </tr>
    );
};

export default SubAssRow;