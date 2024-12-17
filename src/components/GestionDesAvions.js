import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importer useNavigate pour la navigation
import "./GestionDesAvions.css";

const Contact = () => {
  const navigate = useNavigate(); // Initialiser le hook useNavigate
  
  // État pour la liste des avions
  const [avions, setAvions] = useState([]);

  // État pour les données du formulaire
  const [formData, setFormData] = useState({
    type: "",
    capacite: "",
    anneeFabrication: "",
    modele: "",
  });

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Ajouter un avion
  const handleAddAvion = (e) => {
    e.preventDefault();
    if (!formData.type || !formData.capacite || !formData.anneeFabrication || !formData.modele) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const newAvion = {
      ...formData,
      id: Date.now(), // Génère un ID unique pour chaque avion
    };

    setAvions([...avions, newAvion]);
    setFormData({
      type: "",
      capacite: "",
      anneeFabrication: "",
      modele: "",
    });
  };

  // Supprimer un avion
  const handleDeleteAvion = (id) => {
    setAvions(avions.filter((avion) => avion.id !== id));
  };

  // Mettre à jour un avion
  const handleUpdateAvion = (id) => {
    const avionToUpdate = avions.find((avion) => avion.id === id);
    if (avionToUpdate) {
      setFormData(avionToUpdate);
      setAvions(avions.filter((avion) => avion.id !== id));
    }
  };

  return (
    <div className="avion-container">
      {/* Bouton pour revenir au tableau de bord */}
      
        <button
          onClick={() => navigate("/Dashboard")}  // Redirige vers le tableau de bord
          className="back-to-dashboard-btn"
        >
          Retour au Tableau de Bord
        </button>
     
      <h2>Gestion des Avions</h2>

      {/* Formulaire pour ajouter ou modifier un avion */}
      <form onSubmit={handleAddAvion} className="avion-form">
        <input
          type="text"
          name="type"
          placeholder="Type d'avion (ex: Boeing 737)"
          value={formData.type}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="capacite"
          placeholder="Capacité (en sièges)"
          value={formData.capacite}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="anneeFabrication"
          placeholder="Année de fabrication"
          value={formData.anneeFabrication}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="modele"
          placeholder="Modèle de l'avion"
          value={formData.modele}
          onChange={handleChange}
          required
        />
        <button type="submit">Ajouter/Mettre à jour</button>
      </form>

      {/* Liste des avions */}
      <div className="avion-table">
        <h3>Liste des Avions</h3>
        {avions.length === 0 ? (
          <p>Aucun avion n'est enregistré.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Capacité</th>
                <th>Année</th>
                <th>Modèle</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {avions.map((avion) => (
                <tr key={avion.id}>
                  <td>{avion.type}</td>
                  <td>{avion.capacite}</td>
                  <td>{avion.anneeFabrication}</td>
                  <td>{avion.modele}</td>
                  <td>
                    <button
                      onClick={() => handleUpdateAvion(avion.id)}
                      className="update-btn"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleDeleteAvion(avion.id)}
                      className="delete-btn"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Contact;
