'use client'
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image';
import '@styles/home.css'

const Home = () => {
    const [schoolData, setSchoolData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/school/schooldata');
                const data = await response.json();
                setSchoolData(data[0]);
                console.log('data',data[0])
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className='nav'><h1>Welcome to Your School Data App</h1>
            <Link href='/addschooldata'><button className="addSchoolDataBtn">Add School Data</button></Link>
            </div>
            <div className="school-list">
        {Array.isArray(schoolData) && schoolData.length > 0 ? (
          schoolData.map((data) => (
            <div key={data.id} className="school-card">
            <Image src={`/assets/${data.image}`} alt="image" width={270} height={200} />
            <br />
              <strong>School Name:</strong> {data.name}
              <br />
              <strong>Address:</strong> {data.address}
              <br />
              <strong>City:</strong> {data.city}
            </div>
          ))
        ) : (
          <p>No schools available.</p>
        )}
      </div>
        </div>
    );
}

export default Home;
