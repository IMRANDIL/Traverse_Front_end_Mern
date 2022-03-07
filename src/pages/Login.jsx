import React, { useState, useEffect } from 'react';

import { FaSignInAlt } from 'react-icons/fa'

import { useSelector, useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';



import { login, reset } from '../features/auth/authSlice'



import Spinner from '../components/Spinner';












const Login = () => {


    const navigate = useNavigate();
    const disptach = useDispatch();


    const { user, isLoading, isSuccess, isError, message } = useSelector((state) => state.auth)



    const [formData, setFormData] = useState({

        email: '',
        password: '',

    });


    const { email, password } = formData;



    const handleInput = (e) => {

        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))

    }




    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email, password
        }

        disptach(login(userData))




    }








    useEffect(() => {

        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate('/')
        }


        disptach(reset())






    }, [user, isError, isSuccess, message, navigate, disptach])






    if (isLoading) {
        return <Spinner />
    }







    return (
        <>

            <section className="heading">

                <h1><FaSignInAlt /> Login</h1>
                <p>Please Login Now</p>
            </section>


            <section className="form">
                <form onSubmit={handleSubmit}>


                    <div className="form-group">


                        <input type="email" className='form-control' id='email' name='email' value={email} placeholder='Your Email...' onChange={handleInput} />
                    </div>

                    <div className="form-group">


                        <input type="password" className='form-control' id='password' name='password' value={password} placeholder='Your Password...' onChange={handleInput} />
                    </div>



                    <div className="form-group">
                        <button type="submit" className='btn btn-block'>Submit</button>
                    </div>
                </form>

            </section>




        </>
    )
}

export default Login