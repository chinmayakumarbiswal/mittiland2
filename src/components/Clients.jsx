import React from "react";
import clients1 from "../assets/clients1.png";
import clients2 from "../assets/clients2.png";

export default function Clients() {
  const data = [clients1, clients2];
  return (
    <div className="clients">
      <div className="container">
        <center><div className="clients-container">
          {data.map((client, index) => (
            <div className="client" key={index}>
              <img src={client} alt="client" height="80px" width="200px"/>
            </div>
          ))}
        </div></center>
        </div>
    </div>
  );
}
