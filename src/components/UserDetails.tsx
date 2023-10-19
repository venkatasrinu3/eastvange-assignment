import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "./UserDetails.css"

type User = {
    name:{
        title:string;
        first:string;
        last:string;
    };
    email:string;
}

const UserDetails = () => {
    let [userData, setUserData] = useState<User[]>([])
    useEffect(() => {
        fetchUserData()
    },[])

    const fetchUserData = () => {
        axios.get("https://randomuser.me/api")
        .then((res) => {
            const {results} = res.data;
            setUserData(results)
        })
        .catch(error=>{
            console.error(`Error fetching data: ${error}`)
        })
    }
    return (
        <Fragment>
            {userData.map((user: User,index:number) =>{
                let {title, first, last} = user.name, userFullName = `${title} ${first} ${last}`,{email} = user
                return(
                    <div className="nameCard" key={index}>
                        <h1>{userFullName}</h1>
                        <h3>{email}</h3>
                    </div>
                )
            })}
        </Fragment>
    )
}
export default UserDetails