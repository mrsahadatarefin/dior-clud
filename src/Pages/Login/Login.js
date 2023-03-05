import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/ContextProvider';

const Login = () => {
    const [loginError,setLoginError]=useState('')

    const provider = new GoogleAuthProvider();
  const { register, handleSubmit,formState:{errors} } = useForm();
  const {signIn, googleSign}=useContext(AuthContext)
  
  const location = useLocation();
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'

  const handleLogin = data =>{
    setLoginError('')
  console.log(data)
  
  signIn(data.email,data.password)
  .then(result =>{
    const user = result.user;
    console.log(user)
    navigate( from,{replace: true})

  })
  .catch(err => {
    
    console.log(err.message)
    setLoginError(err.message)

})
   
   
   }
   
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
      <h2 className="text-3xl text-center">Login</h2>
      <form onSubmit={ handleSubmit (handleLogin)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email",{required:'*Email is required'})}
            className="input input-bordered w-full max-w-xs" />
          {errors.email && <p role='alert' className="text-red-600">{errors.email?.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password",{required:'*password is required'})}
            className="input input-bordered w-full max-w-xs" />
            {errors.password && <p role='alert' className="text-red-600">{errors.password?.message}</p>}
            <label className="label">
            <span className="label-text">Forget password</span>
          </label>
        </div>

  
        <input className="btn btn-accent text-white bg-[#125294] w-full "value='login'  type="submit" />
      <div>
        {
          loginError&&<p className='text-red-600'>{loginError}</p>
        }
      </div>
      </form>
      <p>New to  Dior <Link className="text-primary" to='/signup'> Create new account</Link></p>
    
      <div className="flex flex-col w-full border-opacity-50">

         <div className="divider">OR</div>
      <button className="btn btn-outline" onClick={signInGoogle}>CONTINUE WITH GOOGLE </button>
</div>
    </div>
  </div>
    );
};

export default Login;