
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Affichage from "./affichage.component";

export default function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("petName");
  const [sortOrder, setSortOrder] = useState("asc"); 

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortingChange = (e) => {
    const value = e.target.value;
    if (value === "asc" || value === "desc") { 
      setSortOrder(value);
    } else {
      setSortBy(value);
    }
  };

  const sortAppointments = (data, key, order) => {
    return data.sort((a, b) => {
      let comparison = 0;
      if (a[key] < b[key]) comparison = -1;
      if (a[key] > b[key]) comparison = 1;
      return order === "asc" ? comparison : -comparison; 
      // reversed comparison for descending order
    });
  };

  const filteredAppointments =
    props.appointments &&
    props.appointments.filter((appointment) =>
      appointment.petName.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const sortedAppointments = sortAppointments(
    filteredAppointments,
    sortBy,
    sortOrder
  );
   // added sortOrder parameter to sortAppointments function

  return (
    <div>
      <div className="container" id="cont">
        <div className="input-group">
          <div className="form-outline">
            <AiOutlineSearch id="aiou" />
            <input
              type="text"
              id="forme1"
              className="form-control"
              placeholder="Search"
              onChange={handleInputChange}
              value={searchTerm}
            />
          </div>
          <select id="selecte" onChange={handleSortingChange}>
            <option className="op" selected disabled>
              Sort By
            </option>
            <option className="op" value="petName">
              Pet Name
            </option>
            <option className="op" value="ownerName">
              Owner Name
            </option>
            <option className="op" value="aptDate">
              Date
            </option>
            <option className="op" value="asc">
              Sort Ascending
            </option> 
            <option className="op" value="desc">
              Sort Descending
            </option>
          </select>
        </div>
      </div>
      <div className="search-results">
        {sortedAppointments && (
          <>
            <p>{sortedAppointments.length} Appointments Found</p>
            <Affichage filteredAppointments={sortedAppointments} />
          </>
        )}
      </div>
    </div>
  );
}