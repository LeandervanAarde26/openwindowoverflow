import React from "react";
import styles from "./Contact.module.scss";
import SideNavigation from "../../Components/sideNavigation/SideNavigation.component";
import ContactCard from "../../Components/Contact/ContactCard";
import Avatar from "@mui/material/Avatar";
import Button from "../../Components/Button/Button.component";
import FlaggedComment from "../../Components/FlaggedComment/FlaggedComment.component";
export default function Contact() {
  return (
    <>
      <div className={styles.container}>
        <SideNavigation />
        <div>
          <h2>Contact</h2>
          <h4>Staff</h4>
          <div style={{ float: "left" }}>
            <Avatar
              id="avatar"
              sx={{
                width: 100,
                height: 100,
                marginTop: 5,
                marginLeft: "130px",
              }}
            />
            <p style={{ marginLeft: "110px", fontWeight: 900 }}>
              Armand Pretorius
            </p>
            <p style={{ marginLeft: 85, fontWeight: 500 }}>
              Armand@openwindow.co.za
            </p>

            <div
              style={{
                height: "20px",
                width: "80px",
                marginLeft: "140px",
                marginBottom: "50px",
                marginTop: "10px",
              }}
            >
              <Button buttonType={"black"}>
                <h3>Email</h3>
              </Button>
            </div>
          </div>
          <div style={{ float: "left", alignItems: "center" }}>
            <Avatar
              id="avatar"
              sx={{
                width: 100,
                height: 100,
                marginTop: 5,
                marginLeft: "120px",
              }}
            />
            <p>Mike Maynard (Subject head)</p>
            <p style={{ marginLeft: 85, fontWeight: 500 }}>
              mike@openwindow.co.za
            </p>

            <div
              style={{
                height: "20px",
                width: "80px",
                marginLeft: "130px",
                marginBottom: "50px",
                marginTop: "10px",
              }}
            >
              <Button buttonType={"black"}>
                <h3>Email</h3>
              </Button>
            </div>
          </div>
          <div style={{ float: "left", alignItems: "center" }}>
            <Avatar
              id="avatar"
              sx={{
                width: 100,
                height: 100,
                marginTop: 5,
                marginLeft: "140px",
              }}
            />
            <p style={{ marginLeft: "125px" }}>Tsungai Katsuro</p>
            <p style={{ marginLeft: 100, fontWeight: 500 }}>
              Tsungai@openwindow.co.za
            </p>

            <div
              style={{
                height: "20px",
                width: "80px",
                marginLeft: "150px",
                marginBottom: "50px",
                marginTop: "10px",
              }}
            >
              <Button buttonType={"black"}>
                <h3>Email</h3>
              </Button>
            </div>
          </div>
          <div style={{ float: "left", alignItems: "center" }}>
            <Avatar
              id="avatar"
              sx={{
                width: 100,
                height: 100,
                marginTop: 5,
                marginLeft: "140px",
              }}
            />
            <p style={{ marginLeft: "140px" }}>Leo Kuyper</p>
            <p style={{ marginLeft: 100, fontWeight: 500 }}>
              leo@openwindow.co.za
            </p>

            <div
              style={{
                height: "20px",
                width: "80px",
                marginLeft: "150px",
                marginBottom: "50px",
                marginTop: "10px",
              }}
            >
              <Button buttonType={"black"}>
                <h3>Email</h3>
              </Button>
            </div>
          </div>
          <div style={{ float: "left", alignItems: "center" }}>
            <Avatar
              id="avatar"
              sx={{
                width: 100,
                height: 100,
                marginTop: 5,
                marginLeft: "140px",
              }}
            />
            <p style={{ marginLeft: "140px" }}>Carlo Kuyper</p>
            <p style={{ marginLeft: 100, fontWeight: 500 }}>
              Carlo@openwindow.co.za
            </p>

            <div
              style={{
                height: "20px",
                width: "80px",
                marginLeft: "150px",
                marginBottom: "50px",
                marginTop: "10px",
              }}
            >
              <Button buttonType={"black"}>
                <h3>Email</h3>
              </Button>
            </div>
          </div>
          <h4 style={{ marginTop: 700 }}>Creators</h4>

          <div style={{ float: "left" }}>
            <Avatar
              id="avatar"
              sx={{
                width: 100,
                height: 100,
                marginTop: 5,
                marginLeft: "140px",
              }}
            />
            <p style={{ marginLeft: "125px" }}>Anchen Ayres</p>
            <p style={{ marginLeft: 100, fontWeight: 500 }}>
              Anchen@openwindow.co.za
            </p>

            <div
              style={{
                height: "20px",
                width: "80px",
                marginLeft: "150px",
                marginBottom: "50px",
                marginTop: "10px",
              }}
            >
              <Button buttonType={"black"}>
                <h3>Email</h3>
              </Button>
            </div>
          </div>
          <div style={{ float: "left" }}>
            <Avatar
              id="avatar"
              sx={{
                width: 100,
                height: 100,
                marginTop: 5,
                marginLeft: "140px",
              }}
            />
            <p style={{ marginLeft: "125px" }}>Cameron Godwin</p>
            <p style={{ marginLeft: 100, fontWeight: 500 }}>
              Cameron@openwindow.co.za
            </p>

            <div
              style={{
                height: "20px",
                width: "80px",
                marginLeft: "150px",
                marginBottom: "50px",
                marginTop: "10px",
              }}
            >
              <Button buttonType={"black"}>
                <h3>Email</h3>
              </Button>
            </div>
          </div>
          <div style={{ float: "left" }}>
            <Avatar
              id="avatar"
              sx={{
                width: 100,
                height: 100,
                marginTop: 5,
                marginLeft: "140px",
              }}
            />
            <p style={{ marginLeft: "125px" }}>Leander Van Aarde</p>
            <p style={{ marginLeft: 100, fontWeight: 500 }}>
              Leadner@openwindow.co.za
            </p>

            <div
              style={{
                height: "20px",
                width: "80px",
                marginLeft: "150px",
                marginBottom: "50px",
                marginTop: "10px",
              }}
            >
              <Button buttonType={"black"}>
                <h3>Email</h3>
              </Button>
            </div>
          </div>
          <div style={{ float: "left" }}>
            <Avatar
              id="avatar"
              sx={{
                width: 100,
                height: 100,
                marginTop: 5,
                marginLeft: "140px",
              }}
            />
            <p style={{ marginLeft: "125px" }}>Liam Wedge</p>
            <p style={{ marginLeft: 100, fontWeight: 500 }}>
              Liam@openwindow.co.za
            </p>

            <div
              style={{
                height: "20px",
                width: "80px",
                marginLeft: "150px",
                marginBottom: "50px",
                marginTop: "10px",
              }}
            >
              <Button buttonType={"black"}>
                <h3>Email</h3>
              </Button>
            </div>
          </div>
          <div style={{ float: "left" }}>
            <Avatar
              id="avatar"
              sx={{
                width: 100,
                height: 100,
                marginTop: 5,
                marginLeft: "140px",
              }}
            />
            <p style={{ marginLeft: "125px" }}>Vian Du Plessis</p>
            <p style={{ marginLeft: 100, fontWeight: 500 }}>
              Vian@openwindow.co.za
            </p>

            <div
              style={{
                height: "20px",
                width: "80px",
                marginLeft: "150px",
                marginBottom: "50px",
                marginTop: "10px",
              }}
            >
              <Button buttonType={"black"}>
                <h3>Email</h3>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <FlaggedComment />
      </div>
    </>
  );
}
