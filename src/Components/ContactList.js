import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const ContactList = (props) => {
  const { contact, removeContact } = props;
  console.log(contact);
  const contactList = contact.map((val) => {
    return (
      <div className="contacts">
        <div style={{ marginLeft: "2px" }}>{val.data.name}</div>
        <div className="email">{val.data.email}</div>
        <span onClick={() => removeContact(val.id)}>
          <DeleteIcon />
        </span>
      </div>
    );
  });
  //   console.log(contact, "from ContactList");
  return (
    <>
      <div className="ContactsHeader">Contact List</div>
      <div>{contactList}</div>
    </>
  );
};

export default ContactList;
