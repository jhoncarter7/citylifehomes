import Image from 'next/image'
import React from 'react'
import classes from "./Main.module.css"

function Main() {
  return (
    <section className={classes.main}>
      <div className={classes.firstbanner}>
        <p>Making Your <span> Real Estate</span>   Purchase Journey Faster And Transparent</p>
        <div className={classes.Image}>
       <img src='/house.png' />
        </div>
        </div>  

        <div className={classes.secondbanner}>
          <div className={classes.smallImage}>

          <img src="/smallhouse.png" />
          </div>
        
            <div className={classes.details}>
              <h3>Who We Are </h3>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage </p>
            <button className={classes.button}>Contact Now &#8594; </button>
            </div>
        </div>
    </section>

  )
}

export default Main