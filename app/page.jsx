"use client";

import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {

  const [newItem, setNewItem]=useState("");
  const [markers, setMarkers]=useState([]);

  //storing markers

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedMarkers = localStorage.getItem('markers');
      if (storedMarkers) {
        setMarkers(JSON.parse(storedMarkers));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('markers', JSON.stringify(markers));
    }
  }, [markers]);


  function toggleMarker(id, completed) {
    setMarkers((currentMarkers) => {
      return currentMarkers.map((marker) => {
        if (marker.id === id) {
          return { ...marker, completed };
        }
        return marker;
      });
    });
  }

  function deleteMarker(id) {
    setMarkers((currentMarkers) => {
      return currentMarkers.filter((marker) => marker.id !== id);
    });
  }

  function handleSubmit(e) {
    e.preventDefault()

    setMarkers ((currentMarkers) => {
      return [
        ...currentMarkers,
        { id: crypto.randomUUID(), title: newItem, completed: false},
      ]
    })

    setNewItem("");
  }

  console.log(markers);

  return (
    <client>
      <section className='w-full flex-center flex-col'>
        <h5>
          You can add markers and view a list of all those added.
        </h5>

        <form onSubmit={handleSubmit} className="new-marker-form">
            <input
            className="input-style"
            type='text'
            placeholder='...'
            value={newItem}
            id={uuidv4()}
            onChange={e => setNewItem(e.target.value)}
            required
            />
            <button className="btn-add" type='submit'>Add +</button>
        </form>

        <h1 className='head_text text-center'>
          Markers
          <br className='max-md:hidden' />
        </h1>

        {/* display list of markers */}
        <ul>
          {markers.length === 0 ? (
                <li>No Markers</li>
          ) : (
            markers.map((marker) => (
            <li key={marker.id} className="item">
              <input
              type="checkbox"
              checked={marker.completed}
              onChange={(e) => toggleMarker(marker.id, e.target.checked)}
              />

              <text className="item">{marker.title} </text>

              <button onClick={() => deleteMarker(marker.id)} className="btn-delete">
                Delete
              </button>
            </li>
            ))
          )}
        </ul>

      </section>
    </client>
  );
};

export default Home;