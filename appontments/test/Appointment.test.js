import React from "react";
import ReactDOM from "react-dom";

import Appointment from "../src/Appointment";
import Appointmentsdayview from "../src/AppointmentsDayView";

describe("Appointment", () => {
  let container;
  let customer;

  beforeEach(() => {
    container = document.createElement("div");
  });

  const render = (component) => ReactDOM.render(component, container);

  it("renders the customer first name", () => {
    //arrange
    customer = { firstName: "Ashley" };
    //act
    render(<Appointment customer={customer} />);
    //assert
    expect(container.textContent).toMatch("Ashley");
  });

  it("renders the another customer first name", () => {
    //arrange
    customer = { firstName: "Jordan" };
    //act
    render(<Appointment customer={customer} />);
    //assert
    expect(container.textContent).toMatch("Jordan");
  });
});

describe("AppointmentsDayView", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
  });

  const render = (component) => ReactDOM.render(component, container);

  it("renders a div with the right id", () => {
    //arrange

    //act
    render(<Appointmentsdayview appointments={[]} />);

    //assert
    //expect(container.querySelector("div#appointmentsDayView")).not.toBeNull();
    expect(container.querySelector('[data-test="appointmentsDayView"]')).not.toBeNull();
  });

  it("renders multiple appointments in an ol element", () => {
    //arrange
    const today = new Date();
    const appointments = [
      { startsAt: today.setHours(12, 0) },
      { startsAt: today.setHours(13, 0) },
    ];

    //act
    render(<Appointmentsdayview appointments={appointments} />);

    //assert
    expect(container.querySelector("ol")).not.toBeNull();
    expect(container.querySelector("ol").children).toHaveLength(2);
  });
});
