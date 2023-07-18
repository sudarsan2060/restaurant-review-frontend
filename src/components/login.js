import React, { useState } from "react";

const Login = (props) => {
  const initialUserState = {
    name: "",
    id: "",
  };

  const [user, setUser] = useState(initialUserState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const login = () => {
    props.login(user);
    props.history.push("/");
  };

  return (
    <div
      className="submit-form card m-auto "
      style={{ width: "50%", background: "#C5DFF8" }}
    >
      <div className="card-body  ">
        <div className="form-group">
          <h4 className="card-title text-center">Login</h4>
          <label htmlFor="user">Username : </label>
          <input
            type="text"
            className="form-control rounded-pill"
            id="name"
            placeholder="Username"
            required
            value={user.name}
            onChange={handleInputChange}
            name="name"
          />
        </div>

        <div className="form-group ">
          <label htmlFor="id">Password :</label>
          <input
            type="text"
            className="form-control rounded-pill"
            id="id"
            placeholder="enter a Password"
            required
            value={user.id}
            onChange={handleInputChange}
            name="id"
          />
        </div>

        <div className="text-center m-1">
          <button onClick={login} className="btn btn-success m-1">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
