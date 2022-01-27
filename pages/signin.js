import style from "../styles/Signin.module.css"
import Link from "next/link"

function signin() {
    return (
        <div className={style.signhead}>
          <div className={style.signheadinner}>
            
            <label className={style.signinput} htmlFor="email">
              Email
            </label>
            <input
              autoComplete="off"
              className={style.signinput}
              name="email"
              type="email"
              // onChange={input}
              // value={registration.email}
            ></input>
            <label className={style.signinput} htmlFor="password">
              Password
            </label>
            <input
              autoComplete="off"
              className={style.signinput}
              name="password"
              type="password"
              // onChange={input}
              // value={registration.password}
            ></input>
           
           <a href="/headlines"> <button className ={style.signbtn}>
              Log in
            </button></a> 
            <Link href="/" ><a><div className={style.link}>Register</div></a></Link>
          </div>
         
        </div>
        
      );
}

export default signin;
