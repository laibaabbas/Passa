import React from "react";

const BookingForm = () => {
  return (
    <>
      <div class="col-lg-6">
        <input
          required
          type="date"
          class="form-control date-form"
          id="inputdate"
          placeholder="select booking date"
        />
        <input
          required
          type="date"
          class="form-control date-form"
          id="inputdate"
          placeholder="select booking date"
        />
        <input
          required
          type="text"
          class="form-control"
          id="inputPhoneNumber"
          placeholder="Phone Number"
        />
        <input
          type="email"
          class="form-control"
          id="inputEmail"
          placeholder="Email"
        />
      </div>
      <div class=" col-lg-6">
        <select class="form-control form-select">
          <option value="">Select booking reason</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <input
          required
          type="text"
          class="form-control"
          id="inputEmergancyNumber"
          placeholder="Emergency phone number"
        />
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="Address"
        />

        <input
          required
          type="text"
          class="form-control"
          id="inputPhoneNumber"
          placeholder="Phone number"
        />
      </div>
    </>
  );
};

export default BookingForm;
