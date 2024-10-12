'use client';
import PreBody from '@/app/components/preview/PreBody';
import PreNav from '@/app/components/preview/PreNav';
import React, { useEffect, useState } from 'react';

export default function Page({ params }) {
  const { id } = params; // Get the `id` from the route parameters
  const [userData, setUserData] = useState(null); // State to hold the fetched user data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to hold any errors

  useEffect(() => { 
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/preview/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUserData(data.data); // Set the fetched data in state
      } catch (err) {
        setError(err.message); // Set the error message if an error occurs
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchUserData(); // Call the fetch function

    
  }, [id]); // Fetch data when `id` changes

  if (loading) {
    return <div>Loading...</div>; // Display a loading message while fetching
  }

  if (error) {
    return <div>Error: {error}</div>; // Display any errors that occur
  }

  return (
    <>
      <PreNav />
      <PreBody userData={userData} /> 
    </>
  );
}
