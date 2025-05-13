import classes from "./MyCat.module.css";

export default function MyCat() {
  return (
    <div className={classes.artContainer} >
      {/* Cat */}
      <div className={classes.cat}>
        <div className={`${classes.ear} ${classes.left}`}>
          <div className={`${classes.innerEar} ${classes.left}`}></div>
        </div>
        <div className={`${classes.ear} ${classes.right}`}>
          <div className={`${classes.innerEar} ${classes.right}`}></div>
        </div>
        {/* Cat head */}
        <div className={classes.head}>
          <div className={`${classes.eye} ${classes.left}`}>
            <div className={`${classes.iris} ${classes.left}`}>
              <div className={`${classes.pupil} ${classes.left}`}>
                <div className={`${classes.lgShine} ${classes.left}`}></div>
                <div className={`${classes.smShine} ${classes.left}`}></div>
              </div>
            </div>
          </div>
          <div className={`${classes.eye} ${classes.right}`}>
            <div className={`${classes.iris} ${classes.right}`}>
              <div className={`${classes.pupil} ${classes.right}`}>
                <div className={`${classes.lgShine} ${classes.right}`}></div>
                <div className={`${classes.smShine} ${classes.right}`}></div>
              </div>
            </div>
          </div>
          <div className={classes.nose}></div>
          <div className={`${classes.lipOverlay} ${classes.left}`}></div>
          <div className={`${classes.lipOverlay} ${classes.right}`}></div>
          <div className={`${classes.lip} ${classes.left}`}></div>
          <div className={`${classes.lip} ${classes.right}`}></div>
          <div className={classes.mouth}>
            <div className={classes.tongue}></div>
          </div>
          <div className={classes.whiskers}>
            <div className={classes.whisker}></div>
            <div className={classes.whisker}></div>
            <div className={classes.whisker}></div>
            <div className={classes.whisker}></div>
            <div className={classes.whisker}></div>
            <div className={classes.whisker}></div>
          </div>
        </div>
        {/* Cat body */}
        <div className={classes.body}>
          <div className={`${classes.leg} ${classes.left}`}>
            <div className={classes.pawPad}>
              <div className={classes.lgPawPad}></div>
              <div className={classes.smPawPad}></div>
              <div className={classes.smPawPad}></div>
              <div className={classes.smPawPad}></div>
            </div>
          </div>
          <div className={`${classes.leg} ${classes.right}`}></div>
          <div className={`${classes.backleg} ${classes.left}`}></div>
          <div className={`${classes.backleg} ${classes.right}`}></div>
          <div className={classes.tail}></div>
        </div>
      </div>
      {/* Cat portrait */}
      <div className={classes.portrait}></div>
      {/* Floor */}
      <div className={classes.floor}></div>
    </div>
  )
}