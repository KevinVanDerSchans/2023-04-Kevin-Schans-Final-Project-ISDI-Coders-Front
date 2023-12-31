import Login from "../login/login"
import Register from "../register/register"
import { LogInAndSignUpVideo } from "./log.in.and.sign.up.video/log.in.and.sign.up.video";
import { ButtonToHomePage } from "../button.to.home.page/button.to.home.page";
import style from "../logInAndSignUp/log.in.and.sign.up.module.css"


export default function LogInAndSignUp() {
  return (

    <>
      <div>
        <ButtonToHomePage></ButtonToHomePage>
        <LogInAndSignUpVideo></LogInAndSignUpVideo>
      </div>

      <div className={style.logInAndSignUpContainer}>
        <div className={style.logInAndSignUpContainer}>
          <Register></Register>
          <Login></Login>
        </div>
      </div>
    </>
  );
}
