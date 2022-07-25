import axios from "axios";

const fetchFunction = (path: string, email: string, password: string) => {
    axios.post(`${process.env.NEXT_PUBLIC_LOCALHOST}${path}`, 
        {email, password})
        .then(res => {
            console.log("res");
            console.log(res.data);
        }


    )

}


export default fetchFunction;