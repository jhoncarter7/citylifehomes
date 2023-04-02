
import classes from "./Offerings.module.css"


function Blogs() {
  return (
    <section className={classes.offering} style={{backgroundColor: "#f3f4f6"}}>
    <div className={classes.mainheading} style={{marginBottom: "3rem"}}>
    <h1>Blogs</h1>
    </div>

    <div className={classes.OfferingCard}>


      <div className={classes.card}>
        <div className={classes.cardcontent} style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', rowGap: "1rem"}}>
          <img src="/h1.png" />
          <p>Real Estate, Analysis</p>
          <div className={classes.blogDate}>
          <p>
            <span></span>
            <span> 09 </span>
            <span> jun </span>
            <span> 2022 </span>
            </p>
            <p>By Admin</p>
            </div>
          <h2 style={{color:"#172554"}}>Guid for personal property Buying</h2>
          <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
          <div className={classes.buttones}>
          <button className={classes.button} style={{color:"blue"}} >View more &#8594;</button>
          {/* <p>view more</p> */}
          </div>
        </div>
      </div>


      <div className={classes.card}>
        <div className={classes.cardcontent} style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', rowGap: "1rem"}}>
          <img src="/h2.png" />
          <p>Real Estate, Analysis</p>
          <div className={classes.blogDate}>
          <p>
            <span></span>
            <span> 09 </span>
            <span> jun </span>
            <span> 2022 </span>
            </p>
            <p>By Admin</p>
            </div>
          <h2 style={{color:"#172554"}}>Guid for personal property Buying</h2>
          <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
          <div className={classes.buttones}>
          <button className={classes.button} style={{color:"blue"}} >View more &#8594;</button>
          {/* <p>view more</p> */}
          </div>
        </div>
      </div>


      <div className={classes.card}>
        <div className={classes.cardcontent} style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', rowGap: "1rem"}}>
          <img src="/h3.png" />
          <p>Real Estate, Analysis</p>
          <div className={classes.blogDate}>
          <p>
            <span></span>
            <span> 09 </span>
            <span> jun </span>
            <span> 2022 </span>
            </p>
            <p>By Admin</p>
            </div>
          <h2 style={{color:"#172554"}}>Guid for personal property Buying</h2>
          <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
          <div className={classes.buttones}>
          <button className={classes.button} style={{color:"blue"}} >View more &#8594;</button>
          {/* <p>view more</p> */}
          </div>
        </div>
      </div>

     

    </div>
  </section>
  )
}

export default Blogs;