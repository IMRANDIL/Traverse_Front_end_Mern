import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { register, reset } from '../features/auth/authSlice'

import { FaUser } from 'react-icons/fa'

import Spinner from '../components/Spinner';



const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });


    const { name, email, password, password2 } = formData;


    const navigate = useNavigate();
    const disptach = useDispatch();


    const { user, isLoading, isSuccess, isError, message } = useSelector((state) => state.auth)





    useEffect(() => {

        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate('/')
        }


        disptach(reset())






    }, [user, isError, isSuccess, message, navigate, disptach])







    const handleInput = (e) => {

        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))

    }




    const handleSubmit = (e) => {
        e.preventDefault()



        if (password !== password2) {
            toast.error('Password do not match')
        } else {
            const userData = {
                name, email, password
            }

            disptach(register(userData))
        }



    }



    if (isLoading) {
        return <Spinner />
    }





    return (
        <>

            <section className="heading">

                <h1><FaUser /> Register</h1>
                <p>Please create an account</p>
            </section>


            <section className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">


                        <input type="text" className='form-control' id='name' name='name' value={name} placeholder='Your Name...' onChange={handleInput} />
                    </div>

                    <div className="form-group">


                        <input type="email" className='form-control' id='email' name='email' value={email} placeholder='Your Email...' onChange={handleInput} />
                    </div>

                    <div className="form-group">


                        <input type="password" className='form-control' id='password' name='password' value={password} placeholder='Your Password...' onChange={handleInput} />
                    </div>


                    <div className="form-group">


                        <input type="password" className='form-control' id='password2' name='password2' value={password2} placeholder='Confirm Password...' onChange={handleInput} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className='btn btn-block'>Submit</button>
                    </div>
                </form>

            </section>




        </>
    )
}

export default Register