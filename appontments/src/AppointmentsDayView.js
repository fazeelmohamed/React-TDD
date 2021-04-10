import React, { useState } from "react";

import Appointment from "./Appointment";

const Appointmentsdayview = ({ appointments }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(0);

  const appointmentTimeOfDay = (startsAt) => {
    const [h, m] = new Date(startsAt).toTimeString().split(":");
    return `${h}:${m}`;
  };

  return (
    <div data-test="appointmentsDayView">
      <ol>
        {appointments &&
          appointments.map((appointment, index) => (
            <li key={appointment.startsAt}>
              <button type="button" onClick={ () => setSelectedAppointment(index)}>
                {appointmentTimeOfDay(appointment.startsAt)}
              </button>
            </li>
          ))}
      </ol>
      {appointments.length === 0 ? (
        <p>There are no appointments scheduled for today.</p>
      ) : (
        <Appointment {...appointments[selectedAppointment]} />
      )}
    </div>
  );
};

export default Appointmentsdayview;
