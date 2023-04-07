import React from "react";
import { Link } from "react-router-dom";

const TableRow = ({ ind, data , delFun }) => {

  return (
    <tr>
      <td>{ind + 1}</td> <td>{data.title}</td>{" "}
      <td className="rounded-lg font-semibold">TRUE</td>
      <td>
        <Link to={`/posts/${data.id}`} className="bg-sky-600 rounded-lg mx-2 my-1 px-1 text-white focus:ring-2 px-2 py-1 font-semibold">
          View
        </Link>
      </td>
      <td>
        <button onClick={()=>delFun(data.id)} className="bg-red-500 font-semibold rounded-lg text-slate-200 px-1 py-1">
          DELETE
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
