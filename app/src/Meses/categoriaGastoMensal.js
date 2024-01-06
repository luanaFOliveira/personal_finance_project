import './categoriaGastoMensal.css';
import React, { useEffect, useState } from 'react';
import GastoCard from '../Components/GastoCard';


const CategoriaGastoMensal = () => {

    const [loading, setLoading] = useState(false);

    if (loading) {
        return <p>Loading...</p>;
    }

  return(
    <div className='wrapper-categoria-mensal'>
        <div className='titulo-categoria'>Alimentação</div>
        <CardColumn/>
        <div className="d-flex justify-content-between align-items-center">
            <div className='texto-box-categoria'>
                <div className='texto-box-categoria-titulo'>Total gasto: R$1000,00</div>
            </div>            
            <a className='texto-box-categoria' href="/">
                <div className='texto-box-categoria-titulo'>+ Novo gasto</div>
            </a>         
        </div>
    </div>
  );

};
export default CategoriaGastoMensal;


function CardColumn() {

    var descricao = "Descricao";
    var data = "11/11/2022";
    var preco = "R$80,00";

    const array = Array(30).fill(0);

    return ( 
      <div className="row">
        {array.map((num, index) => (
            <div className="col-lg-3">
            <GastoCard descricao={descricao} preco={preco} data={data}/>
            </div>
        ))}
      </div>
    );
}