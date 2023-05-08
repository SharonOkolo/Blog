import { useState } from "react";
import axios from 'axios';


const Contact= () => {
  const [name, setName] = useState("Sharon");
  const [email, setEmail] = useState("sharon@email.com");
  const [message, setMessage] = useState("");

  const payload={
    sendername: name, senderemail: email, sendermessage: message
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can add your logic to submit the form
try {
  await axios.post('http://localhost:5000/api/sendemail', payload,{
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    
    }
  }).then((response)=>{

  console.log(response.data.message);
  })
} catch (error) {
  console.log(error);
}
   
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact">
        <h2>Contact Us</h2>
    <form  onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">Send</button>
    </form>
    </div>
  );
}

export default Contact;
