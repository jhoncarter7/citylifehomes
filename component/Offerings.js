import React from "react";
import classes from "./Offerings.module.css"
function Offerings() {
  return (
    <section className={classes.offering}>
      <div className={classes.mainheading}>
      <h1>Our Offerings</h1>
      </div>
      <p>This whole purchase journey can be divided into three stage. for more details, Click here</p>
      <div className={classes.OfferingCard}>
        <div className={classes.card}>
          <div className={classes.heading}>
            <span>1</span>
            <h3>Pre-Booking</h3>
          </div>
          <div className={classes.cardcontent}>
            <img src="/verify.png" />
            <h2>Background Verification</h2>
            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
            <div className={classes.buttones}>
            <button className={classes.button}>Contact Us &#8594;</button>
            <p>INR 3000/Project</p>
            </div>
          </div>
        </div>

        <div className={classes.card}>
          <div className={classes.heading} style={{backgroundColor: "#94a3b8", borderBottom: "3px solid black"}}>
            <span>2</span>
            <h3>Pre-Registration</h3>
          </div>
          <div className={classes.cardcontent}>
            <img src="/construction.png" />
            <h2>Virtual site visit</h2>
            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
            <div className={classes.buttones}>
            <button className={classes.button}>Contact Us &#8594;</button>
            <p>INR 3000/Project</p>
            </div>
          </div>
        </div>

        <div className={classes.card}>
          <div className={classes.heading}>
            <span>3</span>
            <h3>Post-Registration</h3>
          </div>
          <div className={classes.cardcontent}>
            <img src="/register.png" />
            <h2>Title diligence</h2>
            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
            <div className={classes.buttones}>
            <button className={classes.button}>Contact Us &#8594;</button>
            <p>INR 3000/Project</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Offerings;
