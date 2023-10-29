import { BiCalendar } from "react-icons/bi";
import React, { useState } from "react";
import jsondata from "../data.json";
import Search from "./search.component";
import Affichage from "./affichage.component";

export default function Acceuil() {
  const [appointments, setAppointments] = useState(jsondata);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [id, setId] = useState(25); 

  const addAppointment = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
    
    
    
    
  };

  const handleFilterChange = (filteredData) => {
    setFilteredAppointments(filteredData);
  };

  const [formData, setFormData] = useState({
    id:parseInt(appointments[Object.keys(appointments)[Object.keys(appointments).length - 1]].id)+1,
    ownerName: "",
    petName: "",
    aptDate: "",
    aptTime: "",
    appointmentNotes: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    addAppointment(formData);
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div className="hhh">
        <div className="bicalen">
          <BiCalendar id="calend" />
        </div>
        <h1 className="appoinment">Your Appoinement</h1>
      </div>

      <div className="container">
        <div className="navblue">
          <BiCalendar id="cale" />
          <label className="addap">Add Appoinment</label>
        </div>
        <form onSubmit={handleSubmit} className="bord">
          <div className="comp">
            <label className="ownername">Owner Name</label>
            <input
              className="ownernameinp"
              value={formData.ownerName}
              name="ownerName"
              onChange={handleInputChange}
            />
          </div>
          <div className="compi">
            <label className="pitname">Pit Name</label>
            <input
              className="pitnameinp"
              value={formData.petName}
              name="petName"
              onChange={handleInputChange}
            />
          </div>
          <div className="compil">
            <label className="apt">Apt Date</label>
            <input
              type="date"
              className="aptnameinp"
              value={formData.aptDate}
              name="aptDate"
              onChange={handleInputChange}
            />
          </div>
          <div className="compile">
            <label className="apttime">Apt time</label>
            <input
              type="time"
              className="apttimenameinp"
              value={formData.aptTime}
              name="aptTime"
              onChange={handleInputChange}
            />
          </div>
          <div className="compilee">
            <label className="apoi">Appoinement Notes</label>
            <textarea
              className="apoiinp"
              placeholder="Detailed comments about the condition"
              name="appointmentNotes"
              value={formData.appointmentNotes}
              onChange={handleInputChange}
            />
          </div>
          <div className="compillee">
            <button type="submit" className="buttsub">
              Submit
            </button>
          </div>
        </form>
        <div className="bordergray"></div>
        <Search appointments={appointments} onChange={handleFilterChange} />
        <Affichage
          appointments={appointments}
          filteredAppointments={filteredAppointments}
        />
      </div>
    </div>
  );
}