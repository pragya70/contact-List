import React, { useState } from "react";

const AddContact = ({ addContact }) => {
  const [InputData, setInputData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setInputData({ ...InputData, name: e.target.value });
    } else {
      setInputData({ ...InputData, email: e.target.value });
    }
  };

  const handleSubmit = () => {
    if (InputData.name === "" || InputData.email === "") {
      alert("Please Fill All the detail");
      return;
    }
    addContact(InputData);
    setInputData({ name: "", email: "" });
  };
  return (
    <div className="formHeader">
      <div className="add-contact">Add Contact</div>
      <form>
        <label>Name:</label> <br />
        <input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          value={InputData.name}
          onChange={handleChange}
        />
        <br />
        <label>Email:</label> <br />
        <input
          type="text"
          placeholder="Enter Your Email"
          name="Email"
          value={InputData.email}
          onChange={handleChange}
        />
        <br />
      </form>
      <button className="btn" onClick={handleSubmit}>
        Add Contact
      </button>
    </div>
  );
};

export default AddContact;
