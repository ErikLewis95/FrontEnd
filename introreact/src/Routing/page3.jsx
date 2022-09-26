import { Link } from "react-router-dom";
const Page3 =()=>{
    return(
        <div>
        <h1>Ini Page3</h1>
        <p><Link to="/">Move to Page1</Link></p>
        <Link to="/page2">Move to Page2</Link>
        </div>
    );
}
export default Page3;