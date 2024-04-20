import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Banner from './Banner/Banner';
// import firebase from 'firebase/app';
import 'firebase/firestore';
import { db } from '../../firebase-config/config';

const Plants = ({ name, image }) => {
    return (
        <div className="grocery-card">
            <div className="image-container">
                <img src={image} alt={name} />
                <div className="name-overlay">
                    <p>{name}</p>
                </div>
            </div>
        </div>
    );
};


const Home = ({ theme }) => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        // Function to fetch plant data from Firestore
        const fetchPlantsData = async () => {
            try {
                const plantData = [];
                const querySnapshot = await db.collection("plant_data").get();
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    plantData.push({
                        name: data.Name,
                        image: data.plant_image,
                    });
                });
                setPlants(plantData);
            } catch (error) {
                console.error("Error fetching plant data:", error);
            }
        };

        // Call the function to fetch plant data when the component mounts
        fetchPlantsData();
    }, []);

    return (
        <>
            <Banner />
            <h1 style={{ color: '#67C440', paddingTop: '20px', textAlign: 'center' }}>Product Catalog</h1>
            <div className="groceries-list">
                <div className="category-container">
                    {plants.map((plant, index) => (
                        <Plants
                            key={index}
                            name={plant.name}
                            image={plant.image}
                        />
                    ))}
                </div>
                <br />
            </div>
        </>
    );
};

export default Home