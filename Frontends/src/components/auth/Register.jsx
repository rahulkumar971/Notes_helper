import React from 'react'
import styles from "./Auth.module.css"
import {useForm} from "react-hook-form"

const Register = () => {
    const {
        register,handleSubmit,
        formState:{errors}
    }=useForm()
    const submitCall=(data)=>{
        console.log(data)
    }
  return (
    <div className={styles.authContainer}>
        <form className={styles.authForm} onSubmit={handleSubmit(submitCall)}>
            <h2 className={styles.authTitle}>Create an Account</h2>
            <div className={styles.inputGroup}>
                <label htmlFor='name'className={styles.label}>Full Name</label>
                <input id="name" {...register("name" ,{required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Name must be at least 3 characters',
            }})} 
            type="text"className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor='email'className={styles.label}>Email</label>
                <input id="email" {...register("email")} type="text"className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor='mobile'className={styles.label}>Mobile</label>
                <input id="mobile" {...register("mobile")} type="text"className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor='password'className={styles.label}>Password</label>
                <input id="password"type="text"className={styles.input} />
            </div>
            <button className={styles.submitButton}>
               Register
            </button>
             <p className={styles.toggleText}>Already have an account? Login</p>
        </form>
    </div>
  )
}

export default Register