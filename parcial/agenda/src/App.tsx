import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ names: '', telephone: '', image: '' });

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project");
        setContacts(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchContacts();
  }, []);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project", newContact);
      console.log("Contacto guardado:", response.data);
      setContacts([...contacts, response.data]);
      setNewContact({ names: '', telephone: '', image: '' }); 
    } catch (error) {
      console.error("Error al guardar el contacto:", error);
    }
  };

  return (
    <div>
      <h1>Agenda</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombres:
          <input type="text" name="names" value={newContact.names} onChange={handleChange} required />
        </label>
        <label>
          Teléfono:
          <input type="text" name="telephone" value={newContact.telephone} onChange={handleChange} required />
        </label>
        <label>
          Img-url:
          <input type="text" name="image" value={newContact.image} onChange={handleChange} />
        </label>
        <button type="submit">Guardar Contacto</button>
      </form>
      <h2>Contactos:</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.identify}>
            <strong>{contact.names}</strong>: {contact.telephone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
