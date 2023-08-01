import React, { useEffect, useState } from 'react';
import { deleteCriminal, listAllCriminals } from '../services/CriminalService';
import { useNavigate } from 'react-router-dom';

const ListAllCriminals = () => {
  const [criminals, setCriminals] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    getAllCriminals();
  }, []);

  function getAllCriminals() {
    listAllCriminals()
      .then((response) => {
        setCriminals(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewCriminal() {
    navigator('/add');
  }

  function updateCriminal(id) {
    navigator(`/edit/${id}`);
  }

  function removeCriminal(id) {
    console.log(id);
    deleteCriminal(id)
      .then((response) => {
        getAllCriminals();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function renderCrimes(crimes) {
    if (!crimes) return null;
  
    const crimesList = crimes.split(',').map((crime, index) => (
      <li key={index}>{crime.trim()}</li>
    ));
    return <ol style={{ listStyleType: 'decimal' }}>{crimesList}</ol>;
  }
  

  return (
    <div className="container">
      <h2 className="text-center">List of Criminals</h2>
      <button className="btn btn-primary mb-2" onClick={addNewCriminal}>
        Add Criminals
      </button>
      <div className="row">
        {criminals.map((criminal) => (
          <div className="col-md-4 mb-3" key={criminal.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{criminal.name}</h5>
                <p className="card-text">Height: {criminal.height}</p>
                <p className="card-text">Weight: {criminal.weight}</p>
                <p className="card-text">Crimes:</p>
                {renderCrimes(criminal.crimes)}
                <p className="card-text">Phone: {criminal.phone}</p>
                <p className="card-text">DOB: {criminal.dob}</p>
                <p className="card-text">Gender: {criminal.gender}</p>
                <p className="card-text">Street Address 1: {criminal.streetAddress1}</p>
                <p className="card-text">Street Address 2: {criminal.streetAddress2}</p>
                <p className="card-text">Country: {criminal.country}</p>
                <p className="card-text">State: {criminal.state}</p>
                <p className="card-text">City: {criminal.city}</p>
                <p className="card-text">Postal Code: {criminal.postalCode}</p>
                <button
                  className="btn btn-info"
                  onClick={() => updateCriminal(criminal.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeCriminal(criminal.id)}
                  style={{ marginLeft: '10px' }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListAllCriminals;
