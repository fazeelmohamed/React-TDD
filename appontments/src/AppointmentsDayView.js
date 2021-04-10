import React from 'react'

const Appointmentsdayview = ({appointments}) => {

    return (
        <div data-test="appointmentsDayView">
            <ol>
            {
                appointments && appointments.length > 0 && appointments.map( appointment => (
                    <li key={appointment.startsAt}>{appointment.startsAt}</li>
                ))
            }
            </ol>
        </div>
    );
};

export default Appointmentsdayview;