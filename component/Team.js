
import classes from "./Offerings.module.css"


function Team() {
  return (
    <section className={classes.offering}>
    <div className={classes.mainheading} style={{marginBottom: "3rem"}}>
    <h1>Our Team Members</h1>
    </div>

    <div className={classes.OfferingCard}>
      <div className={classes.card}>
        
        <div className={classes.cardcontent} style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
          <img src="/img1.png" />
          <h2>Lorem 1</h2>
          <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
          <div className={classes.buttones}>
          <button className={classes.button}style={{visibility: "hidden"}}>Contact Us &#8594;</button>
          <p>view more</p>
          </div>
        </div>
      </div>

      <div className={classes.card}>
        
        <div className={classes.cardcontent} style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
          <img src="/img2.png" />
          <h2>Lorem 2</h2>
          <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
          <div className={classes.buttones}>
          <button className={classes.button} style={{visibility: "hidden"}}>Contact Us &#8594;</button>
          <p>view more</p>
          </div>
        </div>
      </div>

      <div className={classes.card}>
        <div className={classes.cardcontent} style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
          <img src="/img3.png" />
          <h2>TLorem 3</h2>
          <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
          <div className={classes.buttones}>
          <button className={classes.button} style={{visibility: "hidden"}}>Contact Us &#8594;</button>
          <p>view more</p>
          </div>
        </div>
      </div>

    </div>
  </section>
  )
}

export default Team;