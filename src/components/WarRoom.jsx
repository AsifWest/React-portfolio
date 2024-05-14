import React from 'react';
import profilePic from "../assets/asif.png";

const TeamsSection = () => {
  return (
    <section className="teams" id="teams" style={{}}>
      <div className="maxwidth">
        <h2 className="title" style={{color: "white", textAlign: "center"}}></h2>
        <div className="card" style={{borderRadius: "6px", padding: "25px 35px", textAlign: "center", overflow: "hidden", transition: "all 0.3s ease", margin: "0 auto", maxWidth: "1500px", }}>
          <div className="box" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", transition: "all 0.3s ease"}}>
            <img src={profilePic} alt="" style={{maxWidth: "100%", height: "150px", width: "150px", objectFit: "cover", borderRadius: "50%", border: "5px solid crimson", transition: "all 0.3s ease"}} />
            <div className="text" style={{fontSize: "25px", fontWeight: "500", margin: "10px 0 7px 0"}}>Asif sheikh</div>
            <p style={{color: "white"}}>I usually work alone but <b>No Great Man in History became Exceptional alone.</b> So, I'm a member of <b><a className="warroom" href="https://thewarroom.ag/" style={{textDecoration: "none", color: "white", margin: "3px", display: "inline-block", background: "black", padding: "10px 20px", marginTop: "10px", fontWeight: "200", borderRadius: "6px", border: "2px solid crimson", transition: "all 0.3s ease"}}>The WAR ROOM</a></b></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
