import React, { useEffect } from "react";
import "./Home.scss";
import Context from "../../ContextAPI/Context";
import { useNavigate } from 'react-router-dom'



const Home = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('userType') !== 'MANAGER' && localStorage.getItem('userType') !== 'WORKER'){
      navigate('/')
    }
  })
  return (
    <Context.Consumer>
      {(context) => (
        <div className="base-container">
              <div className="center" style={{ margin: "100px" }}>
                <div className="card-btn center "
                onClick={()=>{
                  navigate('/sendmessage')
                }}>Send Message</div>
              </div>

            {localStorage.getItem('userType') == 'MANAGER'? 
            <div className="colC">
              <div className="center" style={{ margin: "100px" }}>
                <div className="card-btn center "
                onClick={()=>{
                  navigate('/uploadFile')
                }}>Send File</div>
              </div>
            </div>
            :''}
        </div>
      )}
    </Context.Consumer>
  );
};

export default Home;
