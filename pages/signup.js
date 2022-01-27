import style from "../styles/Signup.module.css"
import Link from "next/link"

function signup() {
    return (
      <>
       <div className={style.title}>
         <div className={style.news}>News App</div>
        
       </div>
        <div className={style.signhead}>
       
          <div className={style.signheadinner}>
          
            <label className={style.signinput} htmlFor="username">
              Username
            </label>
            <input
              autoComplete="off"
              className={style.signinput}
              name="username"
              type="text"
              // onChange={input}
              // value={registration.username}
            ></input>
            <label className={style.signinput}htmlFor="email">
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
            <label className={style.signlabel} htmlFor="phone">
              Mobile
            </label>
            <input
              className={style.signinput}
              name="phone"
              type="text"
              // onChange={input}
              // value={registration.phone}
            ></input>
            <button className={style.signbtn} /*onClick={submit}*/>
              Submit
            </button>
            <Link href="/signin" ><a><div className={style.link}>Already have an account</div></a></Link>
          </div>
         
        </div>
        </>
        
      );
}

export default signup;
