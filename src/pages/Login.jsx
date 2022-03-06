import React, { useState, useEffect } from 'react';

import { FaSignInAlt } from 'react-icons/fa'





const Login = () => {
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