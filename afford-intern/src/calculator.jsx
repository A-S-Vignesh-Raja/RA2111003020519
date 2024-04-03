import { format} from "date-fns";
import {Link} from "react-router-dom";
export default function Calculator(){
    return (
        <div>
            <h1>Calculator</h1>
            <form action="/" method="post">
                <input type="text" name="num1" placeholder="Enter the first number"/>
                <input type="text" name="num2" placeholder="Enter the second number"/>
                <button type="submit">Calculator</button>
            </form>

        </div>
      
    );
}