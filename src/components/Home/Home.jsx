import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Banner from './Banner/Banner';

const Plants = ({ image, name, Address, openingTime, closingTime }) => {
    return (
        <div className="grocery-card">
            <img src={image} alt={name} style={{ width: 200, height: 150, marginLeft: 10 }} />
            <h3>{name}</h3>
            {/* <p>{Address}</p>
            <p>Opening Time: {openingTime}</p>
            <p>Closing Time: {closingTime}</p> */}
            <button className="btn">Add to Cart</button>
            <button className="btn">Buy Now</button>
        </div>
    );
};



const Home = ({ theme }) => {
    return (
        <>
            <Banner />
            <div className="groceries-list">
                <Link className="btn-showall" to="/allproducts">
                    {/* <button >Show All</button> */}
                </Link>
                <h1 style={{color: '#67C440', paddingBottom: '10px'}}>Product Catalog</h1>
                <div className="category-container">
                    <Plants
                        image='https://res.cloudinary.com/dvbheijss/image/upload/v1713543407/removal.ai__06a84b56-4cd4-40ed-a48e-8a70353a1a42_aloe_vera_myovlt.png'
                        name='Aloe Vera'
                        // Address='Lorem-Ipsum Dolor-715245'
                        // openingTime='08:00 AM'
                        // closingTime='08:00 PM'
                        button='click'
                    />
                    <Plants
                        image='https://res.cloudinary.com/dvbheijss/image/upload/v1713543406/removal.ai__de983f46-e5d2-4df2-b83e-dce2a30f6d2a-jade_plant_1_uoniwl.png'
                        name='Jade Plant'
                        // Address='Lorem-Ipsum Dolor-715245'
                        // openingTime='08:00 AM'
                        // closingTime='08:00 PM'
                        button='click'
                    />

                    <Plants
                        image='https://res.cloudinary.com/dvbheijss/image/upload/v1713543806/removal.ai__874f374d-ab93-4762-abd2-e2addc5628b4-money_tree_sqmzch.png'
                        name='Money Tree'
                        // Address='Lorem-Ipsum Dolor-715245'
                        // openingTime='08:00 AM'
                        // closingTime='08:00 PM'
                        button='click'
                    />
                    <Plants
                        image='https://res.cloudinary.com/dvbheijss/image/upload/v1713543406/removal.ai__3ff2f46e-8cd8-48a2-bc16-32da5553cab0-monstera_abxqkp.png'
                        name='Monstera'
                        // Address='Lorem-Ipsum Dolor-715245'
                        // openingTime='08:00 AM'
                        // closingTime='08:00 PM'
                        button='click'
                    />
                    <Plants
                        image='https://res.cloudinary.com/dvbheijss/image/upload/v1713543405/removal.ai__00a988bd-89f7-461b-9daa-aa2448c94b69-peace_lily_omdxgm.png'
                        name='Peace Lily'
                        // Address='Lorem-Ipsum Dolor-715245'
                        // openingTime='08:00 AM'
                        // closingTime='08:00 PM'
                        button='click'
                    />

                </div>
                <br />
                <Link className="btn-showall" to="/allproducts">
                    {/* <button>Show All</button> */}
                </Link>
                <div className="category-container">
                    <Plants
                        image='https://res.cloudinary.com/dvbheijss/image/upload/v1713543406/removal.ai__8540747c-43cf-4811-bb6d-2de6740182fa-prayer_plant_iwhemu.png'
                        name='Prayer Plant'
                        // Address='Lorem-Ipsum Dolor-715245'
                        // openingTime='08:00 AM'
                        // closingTime='08:00 PM'
                        button='click'
                    />
                    <Plants
                        image='https://res.cloudinary.com/dvbheijss/image/upload/v1713543408/snake_plant-removebg_f0wgll.png'
                        name='Snake Plant'
                        // Address='Lorem-Ipsum Dolor-715245'
                        // openingTime='08:00 AM'
                        // closingTime='08:00 PM'
                        button='click'
                    />
                    <Plants
                        image='https://res.cloudinary.com/dvbheijss/image/upload/v1713543407/removal.ai__c8543df9-bd47-4a66-b9ab-0f336bb0c0cd-toothpick_cactus_eretpa.png'
                        name='Toothpic Cactus'
                        // Address='Lorem-Ipsum Dolor-715245'
                        // openingTime='08:00 AM'
                        // closingTime='08:00 PM'
                        button='click'
                    />
                    <Plants
                        image='https://res.cloudinary.com/dvbheijss/image/upload/v1713543406/removal.ai__ef4953aa-49b2-4b53-8b10-123fab082cd2-velvet_calathea_osbyam.png'
                        name='Velvet Calathea'
                        // Address='Lorem-Ipsum Dolor-715245'
                        // openingTime='08:00 AM'
                        // closingTime='08:00 PM'
                        button='click'
                    />
                    <Plants
                        image='https://res.cloudinary.com/dvbheijss/image/upload/v1713543405/removal.ai__de6ca448-561f-4913-a9be-89c7d17ec08b-zebra_plant_h4tr0t.png'
                        name='Zebra Plant'
                        // Address='Lorem-Ipsum Dolor-715245'
                        // openingTime='08:00 AM'
                        // closingTime='08:00 PM'
                        button='click'
                    />

                </div>
            </div>
        </>
    );
};

export default Home;