import LoginPage from "@packages/workspacea";
import WelcomePage from "@packages/workspaceb";
import React from "react";
import './App.css'


const App = () =>{

    const sum = (a,b) => {
        return a+b
    }
    return (
        <div style={{display:"flex",width:"100%"}}>
            <LoginPage/>
            {sum(4,5)}
            <WelcomePage username={"Avengers"} width={50} background={"cadetblue"}/>
        </div>
    )
}
export default App;