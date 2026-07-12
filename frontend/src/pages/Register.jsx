import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaCarSide,
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import axios from "../api/axios";

function Register() {

    const navigate = useNavigate();

    const [name,setName]=useState("");

    const [email,setEmail]=useState("");

    const [password,setPassword]=useState("");

    const [confirmPassword,setConfirmPassword]=useState("");

    const [showPassword,setShowPassword]=useState(false);

    const [loading,setLoading]=useState(false);

    const handleRegister=async(e)=>{

        e.preventDefault();

        if(password!==confirmPassword){

            toast.error("Passwords do not match");

            return;

        }

        try{

            setLoading(true);

            await axios.post("/auth/register",{

                name,

                email,

                password

            });

            toast.success("Registration Successful");

            setTimeout(()=>{

                navigate("/");

            },1000);

        }

        catch(error){

            toast.error(

                error.response?.data?.message ||

                error.response?.data?.detail ||

                "Registration Failed"

            );

        }

        finally{

            setLoading(false);

        }

    };

    return(

        <>
            {/* Same layout as Login page */}

            {/* We will only change the form */}

        </>

    );

}

export default Register;