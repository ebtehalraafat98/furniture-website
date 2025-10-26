
import { useForm } from "react-hook-form";
import styles from './Login.module.css';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => { console.log(data); }

  return (
    <div className={styles.login}>
      <h2 className={styles.title}>Login</h2>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <label>Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p className={styles.error}>{errors.password.message}</p>}
        </div>

        <button type="submit" className={styles.submitBtn}>Login</button>
      </form>
    </div>
  )
}


export default Login;