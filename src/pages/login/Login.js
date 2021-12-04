import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Formik, ErrorMessage, Field, Form } from "formik";
import { useHistory } from 'react-router';
import * as Yup from "yup";
import axios from "axios";

function Login() {
    const initialValues = {
        username: "",
        password: "",
      };

      const validationSchema = Yup.object().shape({
        username: Yup.string().min(3, 'must be more than 3 characters').max(20, 'must be less than 20 characters').required('required'),
        password: Yup.string().min(7, 'must be more than 7 characters').required('required'),
      });

    const { setAuth } = useContext(AuthContext)


    const history = useHistory();

    

    const onSubmit = (data) => {
        axios.post("https://my-running-log-api.herokuapp.com/api/auth/login", data)
        .then((response) => {
            if (response.data.error) {
                alert(response.data.error)
            } else{
          localStorage.setItem("token", response.data.token);
          setAuth({
            username: response.data.username,
            userId: response.data.id,
            expiresAt: response.data.expiresAt,
            isLoggedIn: true 
          })
          history.push('/')
        }
    })
}

    return (
<>
<div class="flex flex-col h-screen">
    
    <div class="grid place-items-center mx-2 my-20 sm:my-auto">
     
        <div class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg border-2 shadow-md border-2 border-opacity-50 lg:shadow-lg">

            <img alt="logo-running-man" className="text-center mx-auto h-10 w-10"
            src="https://cdn-icons-png.flaticon.com/512/1248/1248287.png"
            />
            <br/>
            <h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                Login
            </h2>

            <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
            <Form className="mt-10">
              
                <label for="username" className="block text-xs font-semibold text-gray-600 uppercase">Username</label>
                <ErrorMessage name="username">
            { msg => <div className="text-red-600 text-xs">{msg}</div> }
            </ErrorMessage>
            <Field  className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
            type="text"
            id="inputUsername"
            name="username"
            placeholder="Enter username"
          />
                    
                <label for="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                <ErrorMessage name="password">
                { msg => <div className="text-red-600 text-xs">{msg}</div> }
            </ErrorMessage>
            <Field className="block w-full py-3 px-1 mt-2 mb-4
            text-gray-800 appearance-none 
            border-b-2 border-gray-100
            focus:text-gray-500 focus:outline-none focus:border-gray-200"
            type="password"
            id="inputPassword"
            name="password"
            placeholder="Enter password"
          />

                
                <button type="submit"
                    className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none">
                    Login
                </button>
          
                <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                <p>Don't have an account?<Link to="/signup" className="flex-2 underline pl-2">
                        sign up
                    </Link></p>
                </div>
                </Form>
            </Formik>
        </div>
    </div>
</div>
</>
    )
}

export default Login
