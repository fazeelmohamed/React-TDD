import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from 'react-dom/test-utils';

import Appointment from "../src/Appointment";
import AppointmentsDayView from "../src/AppointmentsDayView";

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
  const today = new Date();
  const appointments = [
    { startsAt: today.setHours(12, 0), customer: { firstName: "Ashley" } },
    { startsAt: today.setHours(13, 0), customer: { firstName: "Jordan" } },
  ];

  beforeEach(() => {
    container = document.createElement("div");
  });

  const render = (component) => ReactDOM.render(component, container);

  it("renders a div with the right id", () => {
    //arrange

    //act
    render(<AppointmentsDayView appointments={[]} />);

    //assert
    //expect(container.querySelector("div#appointmentsDayView")).not.toBeNull();
    expect(
      container.querySelector('[data-test="appointmentsDayView"]')
    ).not.toBeNull();
  });

  it("renders multiple appointments in an ol element", () => {
    //arrange

    //act
    render(<AppointmentsDayView appointments={appointments} />);

    //assert
    expect(container.querySelector("ol")).not.toBeNull();
    expect(container.querySelector("ol").children).toHaveLength(2);
  });

  it("renders each appointment in an li", () => {
    //arrange

    //act
    render(<AppointmentsDayView appointments={appointments} />);

    //assert
    expect(container.querySelectorAll("li")).toHaveLength(2);
    expect(container.querySelectorAll("li")[0].textContent).toEqual("12:00");
    expect(container.querySelectorAll("li")[1].textContent).toEqual("13:00");
  });

  it("initially shows a message saying there are no appointems today", () => {
    //act
    render(<AppointmentsDayView appointments={[]} />);

    //assert
    expect(container.textContent).toMatch(
      "There are no appointments scheduled for today"
    );
  });

  it("selects the first appointment by default", () => {
    //act
    render(<AppointmentsDayView appointments={appointments} />);
    //assert
    expect(container.textContent).toMatch("Ashley");
  });

  it("has a button element in each li", () => {
    //act
    render(<AppointmentsDayView appointments={appointments} />);

    //assert
    expect(container.querySelectorAll("li > button")).toHaveLength(2);
    expect(container.querySelectorAll("li > button")[0].type).toEqual("button");
  });

  it("renders another appointment when selected", () => {
    //arrange

    //act
    render(<AppointmentsDayView appointments={appointments} />);
    const button = container.querySelectorAll("button")[1];
    ReactTestUtils.Simulate.click(button);

    //assert
    expect(container.textContent).toMatch("Jordan");
  });
  
});
