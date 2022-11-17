import React, { useEffect } from "react";
import "./Home.scss";
import Context from "../../ContextAPI/Context";
import { useNavigate } from 'react-router-dom'



const Home = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('userType') === 'ADMIN'){
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
                  navigate('/saveMessage')
                }}>Send Message</div>
              </div>

            {context.userType !== 'WORKER'? 
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
