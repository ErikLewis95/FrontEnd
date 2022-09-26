import { Link } from "react-router-dom";

const Page1 = () => {
    return(
        <div>
        <h1>Ini Page1</h1>
        <p><Link to="/page2">Move to Page2</Link></p>
        <Link to="/page3">Move to Page3</Link>
        <Link to="/product/10">Go to product detail</Link>
        </div>
    );
};
export default Page1;