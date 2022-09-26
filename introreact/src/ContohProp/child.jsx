import "./child.css";

const style ={
    button: {backgroundColor:"salmon",
    border:"5px solid black",},
};
const Child = ({name,age}) =>{
return(
    <div>
        <h3 id="name">Name:{name}</h3>
        <h3 className="age">Age:{age}</h3>
        <h3 style={{color:"yellow"}}>Contoh inline style</h3>
        <button style={style.button}>contoh internal style</button>
       
    </div>
);
};
export default Child;

 /* {props.name}
         {props.age}*/