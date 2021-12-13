import classes from "./MyEducation.module.css";

export default function MyEducation(){


    const details = [
    { grade : "X Standard", stream : "", score : "96.20%", name : "TNPL Matriculation Higher Secondary School", city : "Karur", state : "Tamil Nadu"},
    { grade : "XII Standard", stream : "", score : "63.58%", name : "NLC Boys' Higher Secondary School", city : "Neyveli", state : "Tamil Nadu"},
    { grade : "Bachelor of Engineering", stream : "Electronics and Communication Engineering", score : "78.40%", name : "V.S.B Engineering College", city : "Karur", state : "Tamil Nadu"}
]
    return(
    <div className={classes.educationDetails}>    
    {details.map( detail => {
        return(
              <div className={classes.schoolDetail}>
                  <h3>{detail.grade}</h3>
                  {detail.stream? <h5>{detail.stream}</h5> : ""}
                  <div>{detail.score}</div>
                  <div>{detail.name}</div>
                  <div>{detail.city},{detail.state}</div>
              </div>     
            );
    })}
    </div>
    );
           
       
};