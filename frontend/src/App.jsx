import { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
function App() {
  const [contact, setContact] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts");
    const data = await response.json();
    setContact(data.contacts);
    console.log(data.contacts);
  };

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openCreateModal = () => {
    if(!isModalOpen) setIsModalOpen(true)
  }

  return (
    <>
      <ContactList contacts={contact} />
      <button onClick={openCreateModal}>Crete New Contact</button>
      { isModalOpen && <div className="modal">
        <div className="content">
        <span className="close" onClick={closeModal}>&times;</span>
          <ContactForm />
        </div>
      </div>
      }
    </>
  );
}

export default App;
