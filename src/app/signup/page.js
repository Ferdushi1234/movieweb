"use client"
import Link from "next/link";
import Style from "./signup.css";
import Image from "next/image";
import {useState} from 'react';
import { useRouter } from 'next/router';



const signup =()=> {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  

  const userSignup = async(e)=>{
    e.preventDefault()
    const res =   await fetch(`${baseUrl}/api/signup`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        email,
        password
      })
    })
  }
  return (
      <div className="container">
        <div className="login">
          <form onSubmit={(e)=>userSignup(e)}>
            <h1>SignUp</h1>
            <hr />
            <p>Explore the World!</p>

            <label>Username</label>
            <input type="text" placeholder="enter Username"
            value={name}
            onChange={(e)=>setName(e.target.value)} />

            <label>Email</label>
            <input type="email" placeholder="abc@exampl.com"
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
              type="submit"
              //call the function named addData
            >
              Submit
            </button>

            <p>
              Already Have Account{" "}
              <Link style={{ color: "blue" }} href="/login">
                Login
              </Link>
            </p>
            <closeform />
          </form>
        </div>
        <div className="pic">
          <Image src="/image.jpg" alt="Login Image" width={800} height={600} />
        </div>
      </div>
  );
};export default signup;
