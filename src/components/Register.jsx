import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();
  const updatePage = () => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((error) => {
        console.log(error);
      });
  };
  
  const submit = (data) => {
    axios.post(`http://localhost:3000/users`, data).then(() => {
      updatePage(), clear(), nextPage();
    });
  };

  const clear = () => {
    reset({
      email: "",
      firstName: "",
      lastName: "",
    });
  };

  const nextPage = () => {
    navigate("/users");
  };

  return (
    <>
      <div style={{ background: "#F5F5F5" }} className="h-screen w-full p-10">
        <div className="w-[600px] mx-auto  p-2 ">
          <h1 className="text-center">Registro de estudiantes </h1>
          <form
            className="flex flex-col text-center"
            onSubmit={handleSubmit(submit)}
          >
            <input
              className="input"
              type="text"
              placeholder="firstName"
              {...register("firstName")}
            />
            <input
              className="input"
              type="text"
              placeholder="lastName"
              {...register("lastName")}
            />
            <input
              className="input "
              type="email"
              placeholder="email"
              {...register("email")}
            />
            <button className="button " type="supmit">
              Registrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
