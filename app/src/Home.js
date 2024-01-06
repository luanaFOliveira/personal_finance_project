import './home.css';
import React, { useEffect, useState } from 'react';


const Home = () => {

    const [loading, setLoading] = useState(false);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="Home">
            <h1>Home</h1>
        <header className="Home-header">
            <a class="btn btn-dark" href="/listUsers" role="button">Usuarios</a>
            <a class="btn btn-dark" href="/newUser" role="button">Novo Usuario</a>
            <a class="btn btn-dark" href="/mensal" role="button">Controle Mensal</a>
            <a class="btn btn-dark" href="/categoriaMensal" role="button">Categoria Mensal</a>
        </header>
        </div>
    );

};
export default Home;