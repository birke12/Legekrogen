import React, { useState } from "react"; // Import useState
import Loading from "../loading/Loading";
import Modal from "../modal/Modal";
import styles from "./membersClub.module.css"; // Add your styles

const MembersClub = () => {
  // Separate state for each input field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whoBuys, setWhoBuys] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Handlers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Input change handlers
  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleWhoBuysChange = (event) => setWhoBuys(event.target.value);

  // Form submission handler
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      const response = await fetch(
        "https://api-medieskolerne.vercel.app/emails",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email }), // Send email only
        }
      );

      const result = await response.json();
      console.log(result); // Log response for debugging

      openModal();
      setName(""); // Reset name input value
      setEmail(""); // Reset email input value
      setWhoBuys(""); // Reset whoBuys input value
      setIsLoading(false); // Turn off loading
    } catch (error) {
      console.error("Fejl ved tilmelding:", error.message);
      setIsLoading(false); // Ensure loading state is turned off on error
    }
  };

  // JSX returned inside the component
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit} className={styles.form1}>
          <input
            placeholder="Fulde navn"
            type="name"
            value={name}
            onChange={handleNameChange}
            required
          />
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            placeholder="Hvem køber du legetøj til?"
            type="text"
            value={whoBuys}
            onChange={handleWhoBuysChange}
            required
          />
          <button type="submit">BLIV MEDLEM NU!</button>
        </form>
      )}
      {isModalOpen && (
        <Modal onClose={closeModal} className={styles.modal1}>
          <div className={styles.modalContent}>
            <h2 className={styles.modaltext}>Tak!</h2>
            {/* <p>Vi sender dig en bekræftelsesmail på {email}</p> */}
            <p className={styles.modaltext}>
              Vi er så glade for at du vil være en del af vores kundeklub
            </p>
            <p className={styles.modaltext}>
              Tag et kig på din indbakke. Vi har givet dig fri fragt på din
              næste ordre.
            </p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default MembersClub;
