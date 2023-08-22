import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AllUsers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => setData(res.data));
  }, []);

  return (
    <>
      <div style={{ background: "#F5F5F5" }} className="h-screen w-full p-10">
        <div className="container  px-2 m-auto">
          <h1 className="text-center font-bold ">USUARIOS REGISTRADOS </h1>

          <table className="m-auto">
            <thead>
              <tr>
                <th class="px-4 py-2">Nombre</th>
                <th class="px-4 py-2">Apellido</th>
                <th class="px-4 py-2">Email</th>
              </tr>
            </thead>
            {data.map((user) => (
              <tbody>
                <tr>
                  <td class="border px-4 py-2">{user.firstName}</td>
                  <td class="border px-4 py-2">{user.lastName}</td>
                  <td class="border px-4 py-2">{user.email}</td>
                </tr>
              </tbody>
            ))}
          </table>

          <div className="w-96 text-center m-auto my-3">
            <Link to={"/"}>
              <button className="buttonAll mx-2 ">registrar</button>
            </Link>
            <Link to={"/certificados"}>
              <button className="buttonAll ">certificados</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default AllUsers;
