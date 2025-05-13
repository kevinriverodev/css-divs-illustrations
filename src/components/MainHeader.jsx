import classes from "./MainHeader.module.css"

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>CSS <span>Illustrations</span></h1>
        <p>Only using divs and CSS styles</p>
      </div>
    </header>
  )
}