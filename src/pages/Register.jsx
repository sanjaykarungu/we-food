import React,{useEffect, useRef, useState} from "react"
import App from "../App";
import { Link } from "react-router-dom";


const Register = () => {

  const name=useRef()
  const email=useRef()
  const password=useRef()
  const [showHome,setShowHome] = useState(false)
  const [show,setShow] = useState(false)

    const localRegister=localStorage.getItem("Register")
    const localEmail=localStorage.getItem("email")
    const localpassword=localStorage.getItem("password")



  useEffect(()=>{
    if(localRegister){
        setShowHome(true)
    }
    if(localEmail){
      setShow(true)
    }
  })

  const handleClick=()=> {
    if(name.current.value&&email.current.value&&password.current.value)
    {
      localStorage.setItem("name",name.current.value)
      localStorage.setItem("email",email.current.value)
      localStorage.setItem("password",password.current.value)
      localStorage.setItem("Register",email.current.value)
      alert("Account successfully created!")
      window.location.reload()
    }
  }

  const handleSignIn=()=>{
    if(email.current.value==localEmail&&password.current.value==localpassword){
      localStorage.setItem("Register",email.current.value)
      window.location.reload()
    }else{
      alert("Please enter valid data!")
    }
  }

  return (
    <div>
       {showHome?<App/>:
       (show?
      <div className=" flex justify-center">
      <div className=" w-100  h-120 flex justify-center mt-13 mb-10 shadow-2xl ">
        
      <form>
        
        <div className="mt-15 mb-7">
          <h1 className="font-bold text-xl ml-18">Register Here</h1>
        </div>

        <div className="mt-15">
          <h1>Email</h1>
            <div className="w-70 h-13 rounded mt-2 mb-4 bg-gray-100">

            <input className="ml-2 mt-3 outline-none" type="text" placeholder="Email" ref={email}/>
          </div>
        </div>
        <div>
          <h1>Password</h1>
          <div className="w-70 h-13 rounded mt-2 mb-4 bg-gray-100">

            <input className="ml-2 mt-3 outline-none" type="password" placeholder="password" ref={password}/>
          </div>
        </div>
        <div className="flex justify-center mt-10 mb-5">
          <button className="bg-gray-500 w-70 h-10 rounded" onClick={handleSignIn}><Link to="signin">SignIn</Link></button>
          
          
        </div>
        
      </form>
    </div>
    </div>
    :
    <div className=" flex justify-center">
      <div className=" w-100  h-140 flex justify-center mt-8 mb-10 shadow-2xl ">
        
      <form>
        <div className="mt-20 mb-7">
          <h1 className="font-bold text-xl ml-18">Register Here</h1>
        </div>

        <div>
          <h1>Name</h1>
          <div className="w-70 h-13 rounded mt-2 mb-4 bg-gray-100 ">
            <input className="ml-2 mt-3 outline-none" type="text" placeholder="Name" ref={name}/>
          </div>
        </div>
        <div>
          <h1>Email</h1>
            <div className="w-70 h-13 rounded mt-2 mb-4 bg-gray-100">

            <input className="ml-2 mt-3 outline-none" type="text" placeholder="Email" ref={email}/>
          </div>
        </div>
        <div>
          <h1>Password</h1>
          <div className="w-70 h-13 rounded mt-2 mb-4 bg-gray-100">

            <input className="ml-2 mt-3 outline-none" type="password" placeholder="password" ref={password}/>
          </div>
        </div>
        <div className="flex justify-center mt-10 mb-5">
          <button className="bg-gray-500 w-70 h-10 rounded" onClick={handleClick}>Register</button>
          
          
        </div>
        
      </form>
    </div>
    </div>)
}
    </div>
  );
};

export default Register;
