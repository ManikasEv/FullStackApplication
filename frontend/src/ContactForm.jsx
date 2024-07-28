import { useState } from "react";

const ContactForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email
        };

        console.log("Data to send:", data);

        const url = "http://127.0.0.1:5000/create_contact";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log("Response:", result);

            if (response.status !== 201 && response.status !== 200) {
                alert(result.message);
            } else {
                alert("Contact created successfully!");
                // Clear form fields
                setFirstName("");
                setLastName("");
                setEmail("");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input 
                    type="text" 
                    id="firstName" 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input 
                    type="text" 
                    id="lastName" 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="text" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type="submit">Create Contact</button>
        </form>
    );
};

export default ContactForm;
