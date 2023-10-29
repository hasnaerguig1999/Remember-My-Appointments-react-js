import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react"; 

export default function Affichage(props) {
  const { appointments, filteredAppointments, setAppointments } = props; 

  const appointmentsToDisplay = filteredAppointments || appointments;
  

  const handleDeleteAppointment = (id) => { 
    const updatedAppointments = appointments.filter((appointment) => appointment.id !== id);
    setAppointments(updatedAppointments); 
  };

  return (
    <div className="container">
      {appointmentsToDisplay.map((newAppointment, index) => (
        <div className="affichage" key={index}>
          <button   className="warninge" onClick={() => handleDeleteAppointment(newAppointment.id)}> 
            <RiDeleteBin6Line id="delet" />
          </button>
          <div>
            <h5 className="hh2">{newAppointment.petName}</h5>
            <h6 className="hh7">
              Owner: <span className="spa">{newAppointment.ownerName}</span>
            </h6>
            <div>
              <h6 className="hhh6">
                <span className="spane">
                  {newAppointment.appointmentNotes}
                </span>
              </h6>
              <div className="tim">
                <p className="timeee">
                  {newAppointment.aptDate} {newAppointment.aptTime}
                </p>
              </div>
            </div>
          </div>
          <hr className="hrr" />
        </div>
      ))}
    </div>
  );
}