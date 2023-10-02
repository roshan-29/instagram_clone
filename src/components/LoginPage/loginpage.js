import React from "react";
import Grid from "@mui/material/Grid";
import "./loginPage.css";
import insta_image from "../../images/9364675fb26a.svg";
import insta_logo from "../../images/logoinsta.png";
import fb from "../../images/fb.png";
import appstore from "../../images/gplay.png";
import playstore from "../../images/playstore.png";

function LoginPage() {
  return (
    <div>
      <Grid container direction="row">
        <Grid item xs={3}></Grid>

        <Grid item xs={6}>
          <div className="loginpage_main">
            <div>
              <img src={insta_image} width="400" alt="Insta" />
            </div>

            <div>
              <div className="loginpage_rightcomponent">
                <img className="loginpage_logo" src={insta_logo} alt="Insta" />

                <div className="loginpage_signin">
                  <input
                    className="loginpage_text"
                    type="text"
                    placeholder="Phone number, username or email"
                  />
                  <input
                    className="loginpage_text"
                    type="password"
                    placeholder="Password"
                  />
                  <button className="loginpage_button">Log In</button>
                </div>

                <div className="login__ordiv">
                  <div className="login__dividor"></div>
                  <div className="login__or">OR</div>
                  <div className="login__dividor"></div>
                </div>

                <div className="login__fb">
                  <img src={fb} width="15px" alt="" /> Log in with Facebook
                </div>
                <div className="login__forgt">Forgot Password?</div>
              </div>

              <div className="loginpage__signupoption">
                <div className="loginPage__signup">
                  Don't have an account? Sign up
                </div>

                <div className="loginPage__getapp"> Get the app.</div>
              </div>

              <div className="loginPage__option">
                <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DC5826F5A-3460-47EB-897F-3F9FAD9D829F%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge">
                  <img
                    className="loginPage__dwimg"
                    src={appstore}
                    width="134.28px"
                    height="43px"
                    alt=""
                  />
                </a>
                <a href="https://apps.microsoft.com/store/detail/instagram/9NBLGGH5L9XT?hl=en-in&gl=in">
                  <img
                    className="loginPage__dwimg"
                    src={playstore}
                    width="134.28px"
                    height="43px"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
}

export default LoginPage;
