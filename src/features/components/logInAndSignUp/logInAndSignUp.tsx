import Register from "../register/register"
import style from "./logInAndSignUp.module.css"

export default function LogInAndSignUp() {
  return (
    <div className={style.body}>
      <Register></Register>
    </div>
  )
}
