/* React */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router";
import Button from "../../Components/Button/Button.component";
/* Styling */
import styles from "./ValidateUser.module.scss";

/* Icons/Images */
import theImage from "../../Assets/LoginImage.png";
import brokenBrowser from "../../Assets/brokenbrowser.png";
// import { RegisterContext } from '../../Contexts/Register.context';

const ValidateUser = () => {
  // const { currentUser } = useContext(RegisterContext)
  const [searchParams] = useSearchParams();
  const user = useParams();
  // const curr = currentUser.currentUser
  const navigate = useNavigate();
  const [content, setContent] = useState();
  const [login, setLogin] = useState(false);
  console.log(searchParams.get("id"));

  useEffect(() => {
    axios
      .patch(`http://localhost:5001/api/validateUser/${searchParams.get("id")}`)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setContent(
            <h3>
              Welcome new user!
              <br />
              Your account has succesfully verified! Let's login and get
              started!
            </h3>
          );
          setLogin(true);
        } else {
          setContent(
            <>
              <h3>OOPS!</h3>
              <h5>
                We could not verify your new account, please try again or
                contact support at mail@openoverflow.co.za
              </h5>
            </>
          );
          setLogin(false);
        }
      })
      .catch((err) => {
        console.log(err);

        setContent(
          <>
            <h3>OOPS!</h3>
            <h5>
              We could not verify your new account, please try again or contact
              support at mail@openoverflow.co.za
            </h5>
          </>
        );
        setLogin(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img
          className="img"
          src={login ? theImage : brokenBrowser}
          alt={"ValidationImage"}
        />
      </div>
      <div className={styles.right}>
        {content}
        <div className={styles.buttonContainer}>
          {/* Link didnt work because it is looking for a local path to redirect ti, a href takes anylink */}
          {login ? (
            <Button
              buttonType={"primary"}
              children={"Go to Login"}
              onClick={() => {
                navigate("/");
              }}
            />
          ) : (
            <Button
              buttonType={"black"}
              children={"Register Again"}
              onClick={() => {
                navigate("/Register");
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ValidateUser;
