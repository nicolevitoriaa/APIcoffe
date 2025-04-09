import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/coffee/hot');
      if (!resp.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await resp.json();
      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div>
      <h1>Lista de Cafés</h1>
      <ul>
        {data.map((coffee) => (
          <li key={coffee.id}>
            <h2>{coffee.title}</h2>
            <p>{coffee.description}</p>
            <p><strong>Preço:</strong> {coffee.price}</p>
            <img src={coffee.image} alt={coffee.title} style={{ width: '100px', height: 'auto' }} />
          </li>
        ))}
      </ul>
    </div>
  );
}