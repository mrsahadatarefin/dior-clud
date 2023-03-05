import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/ContextProvider';

const SignUp = () => {

    const [signupError, SetSingUpError] = useState("");
   
    const provider = new GoogleAuthProvider();
    const { handleSubmit, register,formState:{errors} } = useForm();
    const {createUser,updateUser,  googleSign} = useContext(AuthContext)
    const  navigate = useNavigate()
    
    const handleSignUp = (data) => {
        console.log(data);
        createUser(data.email,data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
            const userInfo = {
              displayName: data.name,
            };
            updateUser(userInfo)
            .then(()=>{

            })
            .catch(err => console.log(err))
            navigate('/')

        })
        .catch(err =>{ console.log(err)
            SetSingUpError(err.message)
        });

       

       

      };



      const signInGoogle = ()=>{

        googleSign(provider)
        .then(result =>{

          const user = result.user;
          console.log(user) 
          navigate('/')   
        })
        .catch(err => console.log(err))

      }

    return (
        <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 bg-[#f2f7ff] rounded-lg p-7">
        <h2 className="text-3xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
              <toast></toast>
            </label>
            <input
              {...register("name", { required: "*Name is required" })}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p role="alert" className="text-red-600">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "*Email is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p role="alert" className="text-red-600">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: "*password is required" })}
              className="input input-bordered w-full max-w-xs"
            />

            {errors.password && (
              <p role="alert" className="text-red-600">
                {errors.password?.message}
              </p>
            )}
          </div>

          <input
            className="btn btn-accent text-white bg-[#125294] w-full mt-5 "
            value="sign up"
            type="submit"
          />
          {signupError && <p className="text-red-600">{signupError}</p>}
        </form>
        <p>
         Have an account {" "}
          <Link className="text-primary  " to="/login">
            {" "}
          Go TO Login
          </Link>
        </p>

        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
          <button className="btn btn-outline" onClick={signInGoogle}>CONTINUE WITH GOOGLE </button>
        </div>
      </div>
    </div>
    );
};

export default SignUp;