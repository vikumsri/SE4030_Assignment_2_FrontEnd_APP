import Context from "./Context";
import axios from "axios";
import { useState } from "react";
import config from "../config";
import { useNavigate } from 'react-router-dom'




const AppProvider = (props) => {
    const navigate = useNavigate();

    const[loginErr, setLoginErr]=useState(false);
    const[userType, setUserType]=useState('');


    const Login = (email, password) => {

        let credentials = {
            "email": email,
            "password": password
        }

        axios({
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            method: "post",
            baseURL: `${config.apiEndpoints.protocol}${config.apiEndpoints.baseURL}`,
            url: "/user/login",
              data: credentials,
        }).then((response) =>{


            if(response.data.data === "Password is not matched" || response.data.data === "User not found" ){
                setLoginErr(true)
            }
            else{

                setUserType(response.data.data.responseData.userType) ;

                setLoginErr(false)

                localStorage.setItem("AccessToken",response.data.data.responseData.accessToken)
                localStorage.setItem("userType",response.data.data.responseData.userType )
                localStorage.setItem("userId",response.data.data.responseData.user_id )

                if(userType === 'ADMIN'){
                    navigate('/adminHome')
                }
                else{
                    navigate('/home')
                }


            }
            
       

        })


    }


    const AddStaff =(email, userType, password) =>{

        let data = {
            "userType": userType,
            "email": email,
            "password": password,
            "role":  localStorage?.getItem("userType")
        }


        axios({
            headers: {
               
                "Access-Control-Allow-Origin": "*",
            },
            method: "post",
            baseURL: `${config.apiEndpoints.protocol}${config.apiEndpoints.baseURL}`,
            url: "/user/save",
              data: data,
        }).then((response) =>{
            
            console.log(response)

            
        })
        .catch((error) => {
            console.log(error)
          });
      };


      const AddMsg =(msg) =>{
        console.log(msg)
        let data = {
            "msg": msg,
            "createdBy":localStorage?.getItem("userId")
        }


        axios({
            headers: {
                "Authorization": localStorage?.getItem("AccessToken"),
                "Access-Control-Allow-Origin": "*",
            },
            method: "post",
            baseURL: `${config.apiEndpoints.protocol}${config.apiEndpoints.baseURL}`,
            url: "/message/save",
              data: data,
        }).then((response) =>{
            
            console.log(response)

            
        })
        .catch((error) => {
            console.log(error)
          });
      };

      const UploadFile =(file) =>{

        console.log(file)

        let fileData = {
            "file": file,
            "createdBy": localStorage?.getItem("userId"),
            "userType": localStorage?.getItem("userType")
        }

        axios({
            headers: {
                "Authorization": localStorage?.getItem("AccessToken"),
                "Access-Control-Allow-Origin": "*",
            },
            method: "post",
            baseURL: `${config.apiEndpoints.protocol}${config.apiEndpoints.baseURL}`,
            url: "/file/upload",
              data: fileData,
        }).then((response) =>{
            
            alert("File uploaded")                
        })
        .catch((error) => {
            console.log(error)
          });
      };


    


    return (
        <Context.Provider
            value={{
                Login,
                AddStaff,
                AddMsg,
                loginErr,
                setLoginErr,
                userType,
                setUserType,
                UploadFile
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export default AppProvider;
