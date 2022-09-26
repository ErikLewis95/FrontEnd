import { Link } from "react-router-dom";
const Page2 =()=>{
    return(
        <div>
        <h1>Ini Page2</h1>
        <p><Link to="/">Move to Page1</Link></p>
        <Link to="/page3">Move to Page3</Link>
        </div>
    );
}
export default Page2;