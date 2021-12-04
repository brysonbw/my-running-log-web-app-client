import React, {useEffect} from 'react'
import { Formik, ErrorMessage, Field, Form } from "formik";
import { useHistory } from 'react-router';

import * as Yup from "yup";
import axios from 'axios';

function CreateRunLog() {
    const initialValues = {
        title: "",
        miles: "",
        location: "",
        duration: "",
        date: "",
      };

    
      const validationSchema = Yup.object().shape({
        title: Yup.string().required('required & must be alphabetic(string)'),
        miles: Yup.string().required('required & must be alphabetic(string)'),
        location: Yup.string().required('required & must be alphabetic(string)'),
        duration: Yup.string().required('required & must be alphabetic(string)'),
        date: Yup.string().required('required & must be alphabetic(string)'),

      });

      const history = useHistory()

      useEffect(() => {
        if (!localStorage.getItem("token")) {
          history.push("/login");
        }
      }, [])

      const onSubmit = (data) => {
        axios
      .post("https://my-running-log-api.herokuapp.com/api/user/runLog/create", data, {
        headers: {token: localStorage.getItem("token") },
      })
      .then((response) => {
        console.log(response.data)
        history.push("/");
      })
      }

    return (
        <>
<div class="flex flex-col h-screen">
    
    <div class="grid place-items-center mx-2 my-20 sm:my-auto">
     
        <div class="mt-10 mb-10 w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg">

            <img alt="logo-running-man" className="text-center mx-auto h-10 w-10"
            src="https://cdn-icons-png.flaticon.com/512/1248/1248287.png"
            />
            <br/>
            <h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                Add Running Log
            </h2>

            <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
            <Form className="mt-10">

              
                <label for="title" className="block text-xs font-semibold text-gray-600 uppercase">Title</label>
                <ErrorMessage name="title">
            { msg => <div className="text-red-600 text-xs">{msg}</div> }
            </ErrorMessage>
            <Field  className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
            type="text"
            id="inputTitle"
            name="title"
            placeholder="Enter title"
          />
                    
                <label for="location" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Location</label>
                <ErrorMessage name="location">
                { msg => <div className="text-red-600 text-xs">{msg}</div> }
            </ErrorMessage>
            <Field className="block w-full py-3 px-1 mt-2 mb-4
            text-gray-800 appearance-none 
            border-b-2 border-gray-100
            focus:text-gray-500 focus:outline-none focus:border-gray-200"
            type="text"
            id="inputLocation"
            name="location"
            placeholder="Enter location"
          />

<label for="miles" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Miles</label>
                <ErrorMessage name="miles">
                { msg => <div className="text-red-600 text-xs">{msg}</div> }
            </ErrorMessage>
            <Field className="block w-full py-3 px-1 mt-2 mb-4
            text-gray-800 appearance-none 
            border-b-2 border-gray-100
            focus:text-gray-500 focus:outline-none focus:border-gray-200"
            type="text"
            id="inputMiles"
            name="miles"
            placeholder="Enter miles"
          />

<label for="duration" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Duration</label>
                <ErrorMessage name="duration">
                { msg => <div className="text-red-600 text-xs">{msg}</div> }
            </ErrorMessage>
            <Field className="block w-full py-3 px-1 mt-2 mb-4
            text-gray-800 appearance-none 
            border-b-2 border-gray-100
            focus:text-gray-500 focus:outline-none focus:border-gray-200"
            type="text"
            id="inputDuration"
            name="duration"
            placeholder="Enter duration"
          />

<label for="date" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Date</label>
                <ErrorMessage name="date">
                { msg => <div className="text-red-600 text-xs">{msg}</div> }
            </ErrorMessage>
            <Field className="block w-full py-3 px-1 mt-2 mb-4
            text-gray-800 appearance-none 
            border-b-2 border-gray-100
            focus:text-gray-500 focus:outline-none focus:border-gray-200"
            type="text"
            id="inputDate"
            name="date"
            placeholder="Enter date"
          />
                
                <button type="submit"
                    className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none">
                    Add
                </button>

              
            </Form>
            </Formik>
        </div>
    </div>
</div>
        </>
    )
}

export default CreateRunLog
