import classes from "./Form.module.css";

import React from "react";

function Form() {
  return (
    <section className={classes.form}>
      <div className={classes.formheading}>
        <h1>Get In Touch With Us To Connect</h1>
        <h3>Contact Us</h3>
        <form className={classes.forminput}>
          <div>
            <label htmlFor="Name">Full Name</label>
            <input type="text" name="Name" id="Name" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="Email">Email address</label>
            <input
              type="text"
              name="Email"
              id="Email"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              name="mobileNumber"
              id="mobile"
              placeholder="Your mobile Number"
            />
          </div>
          <div>
            <label htmlFor="Country">Country</label>
            <input
              type="text"
              name="Country"
              id="Country"
              placeholder="Your Country"
            />
          </div>
          <div>
            <label htmlFor="Stages">Stages</label>
            <input type="text" name="Stages" id="Stages" placeholder="Stages" />
          </div>
        </form>
        <button className={classes.button}>Submmit</button>
      </div>

      <div className={classes.image}>
        <img src="/customer.png" />
      </div>
    </section>
  );
}

export default Form;
