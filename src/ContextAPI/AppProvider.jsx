import Context from "./Context";
import axios from "axios";
import { useState } from "react";
import config from "../config";
import { useNavigate } from 'react-router-dom'
import bcrypt from 'bcryptjs';
import crypto from 'crypto-js';


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

                setUserType(response.data.data.responseData.userType);

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
            alert("User Created") 

            
        })
        .catch((error) => {
            console.log(error)
          });
      };


      const AddMsg =(msg) =>{

        //using hasedMessage to make a bcrypt hased values to use as the intergirty checker
        const hashedMessage = crypto.AES.encrypt(msg, '$2a$10$CwTycUXWue0Thq9StjUM0u').toString()
        const hardHashedMessage = bcrypt.hashSync(hashedMessage, '$2a$10$CwTycUXWue0Thq9StjUM0u')

        let data = {
            "msg": hashedMessage,
            "hash": hardHashedMessage,
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
        

            alert("Massage safely saved") 
            
        })
        .catch((error) => {
            console.log(error)
          });
      };

      const UploadFile =(file) =>{

        const hashedFile = crypto.AES.encrypt(file, '$2a$10$CwTycUXWue0Thq9StjUM0u').toString()
        const hardHashedFile = bcrypt.hashSync(hashedFile, '$2a$10$CwTycUXWue0Thq9StjUM0u')

        let fileData = {
            "file": hashedFile,
            "hash":hardHashedFile,
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
