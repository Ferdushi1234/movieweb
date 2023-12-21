"use client"
import Link from "next/link";
import Style from "./login.css";
import Image from "next/image";
import {useState} from 'react'


const Login= () => {
  //define a state!

  
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  
  

  return (
    
    <>
      <div className="container">
        <div className="login">
          <form>
            <h1>Login</h1>
            <hr />
            <p>Explore the World!</p>
            <label>Email</label>
            <input  type="email" placeholder="abc@exampl.com"
              value={email}
              onChange={(e)=>setEmail(e.target.value)} />

            <label>Password</label>
            <input
              
              type="password"
              placeholder="enter your password!"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <button
            //call the function named addData
            >
              Submit
            </button>

            <p>
              Forgot
              <a href="/signup" style={{ color: "blue" }}>
                {" "}
                Password?
              </a>
            </p>
            <closeform />
          </form>
        </div>
        <div className="pic">
          <Image src="/image.jpg" alt="Login Image" width={800} height={600} />
        </div>
      </div>
      
    </>
    
  );
};export default Login;
