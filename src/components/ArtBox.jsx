import classes from "./ArtBox.module.css";

export default function ArtBox({ artDescription, children }) {
  return (
    <div className={classes.artBox}>
      <h3 className={classes.artDescription}>{artDescription}</h3>
      <div className={classes.artContainer}>
        {children}
      </div>
    </div>
  )
}