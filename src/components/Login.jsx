import React from "react";
import restaurantImage from "../imgs/logo.png";
import google from "../imgs/google.png";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      {/* Image Section */}
      <div
        style={{
          width: "100%",
          maxWidth: "200px",
          marginBottom: "20px",
        }}
      >
        <img
          src={restaurantImage}
          alt="Restaurant"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>

      {/* Login Form Section */}
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          padding: "30px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            color: "#333",
            fontSize: "3rem",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          Login
        </h2>
        <form style={{ marginBottom: "20px" }}>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="email"
              placeholder="Enter Email"
              style={{
                width: "100%",
                padding: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <input
              type="password"
              placeholder="Enter Password"
              style={{
                width: "100%",
                padding: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
              }}
              required
            />
          </div>
          <button
            type="button"
            style={{
              width: "100%",
              padding: "15px",
              backgroundColor: "#333",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#cc6600")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#333")}
          >
            Login Now
          </button>
        </form>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            padding: "15px",
            backgroundColor: "#4285F4",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src={google}
            alt="Google logo"
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
          />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
