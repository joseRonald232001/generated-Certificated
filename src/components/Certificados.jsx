import axios from "axios";
import React, { useEffect, useState } from "react";

const Certificados = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => setUsers(res.data));
  }, []);
  console.log(users);

  return (
    <div>
      <h1 className="text-center mt-3 font-semibold">
        CERTIFICADO DE ESTUDIANTES REGISTRADOS
      </h1>

      <div className="m-auto  text-center  ">
        {users.map((user) => (
          <div
            key={user.id}
            className=" relative w-[70%] max-w-[900px] min-w-[850px] h-[450px] border m-auto my-5 p-2"
          >
            <h1 className="textgreen font-bold text-xl">
              INSTITUTO TENOLÓGICO SACABA{" "}
            </h1>
            <p className="text-[5px] font-semibold">R.M. N-º 999/2023</p>

            <img
              className="w-28 absolute right-3 top-1"
              src="https://formaciontecnicabolivia.org/sites/default/files/institutos/logosacaba.png"
              alt=""
            />
            <img
              className="w-32 absolute -top-2 left-2"
              src="https://assets.stickpng.com/thumbs/580b57fbd9996e24bc43be11.png"
              alt=""
            />
            <img
              className="absolute top-10 right-0 bottom-0 left-0 m-auto w-52 opacity-30 -z-10"
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRw6frj-YpnOLfm-qt6ASVPtesXDepGrXq1UICW90IrU9a7LSFE"
              alt=""
            />

            <p className="text-[6px]">
              FDO. 21 DE AGOSTO 2003 SACABA-COCHABAMBA-BOLIVIA
            </p>
            <h2 className="font-extrabold pb-6 z-20">
              CARRERA DE INFORMÁTICA INDUSTRIAL
            </h2>

            <p className="text-left pl-5">Confiere el presente</p>
            <h2 className="font-extrabold text-4xl">CERTIFICADO</h2>

            <p className="z-50 font-semibold font-mono  text-zinc-950  uppercase pt-2 tracking-wider text-lg ">
              {user.firstName} {user.lastName}
            </p>
            <div className="flex items-center  ">
              <span className="pl-4">A :</span>
              <div className="w-[70%] m-auto h-[1px] bg-yellow-400 "> </div>
            </div>

            <h3 className="py-3 font-bold">
              POR SU PARTICIPACION EN EL EXAMEN ITSa - 2023
            </h3>
            <p>Realizado en los ambientes del instituto Tecnológico Sacaba</p>
            <p>Sacaba, 9 de agosto de 2023</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificados;
