import { useState } from "react";
type A ={
    email:string,
    password:string
}

const Login = () => {
    const [mailing,setMailing]=useState<string>("");
    const [password,setPassword]=useState<string>("")

    const alpha = (e:any)=>{
        setMailing(e.target.value)

    }
    const beta = (e:any) =>{
        setPassword(e.target.value)

    }

    const onAddHandler = () =>{
        let a:A = {
            email:"hamza@gmail.com",
            password:"12345"
        } 

    }
    return (
        <div className="d-flex justify-content-center  align-items-center vh-100">
            <div>
                <div className="card" style={{width: "30rem"}}>
                    <div className="card-body">
                    <input type="email" className="form-control "  style={{height:"50px"}} aria-describedby="emailHelp" placeholder="Enter email" onChange={alpha}/>
                    <br />
                    <input type="password" className="form-control" style={{height:"50px"}} aria-describedby="emailHelp" placeholder="Password" onChange={beta}/>
                    <br />
                    <button  className="btn btn-primary w-100" onClick={onAddHandler}>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Login;