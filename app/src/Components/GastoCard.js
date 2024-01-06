import React from "react";
import './GastoCard.css';

export default function GastoCard({descricao,data,preco}){

    return <div className="card gasto-card">
        <div class="card-body">
            <div className="d-flex justify-content-between align-items-center">
            <h5 class="card-title">{descricao}</h5>
            <h5 class="card-title">{preco}</h5>
            </div>
            <h6 class="card-subtitle text-muted">{data}</h6>
        </div>
    </div>

}
