import './controleMensal.css';
import React, { useEffect, useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';


const ControleMensal = () => {

    const [loading, setLoading] = useState(false);

    if (loading) {
        return <p>Loading...</p>;
    }

  return (
    <div className='wrapper-mensal'>
        <div className='titulo-mensal'>Controle Mensal</div>
            <div class="row">
                <div class="col-lg-3">
                    <div className='categoria-box'>
                        <div className='categoria-box-titulo'>Alimentos</div>
                        <div className="card gasto-card">
                            <div class="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                <h5 class="card-title">Descricao</h5>
                                <h5 class="card-title">R$80,00</h5>
                                </div>
                                <h6 class="card-subtitle text-muted">11/11/2022</h6>
                            </div>
                        </div>
                        <div className="card gasto-card">
                            <div class="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                <h5 class="card-title">Descricao</h5>
                                <h5 class="card-title">R$80,00</h5>
                                </div>
                                <h6 class="card-subtitle text-muted">11/11/2022</h6>
                            </div>
                        </div>
                        <div className="card gasto-card">
                            <div class="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                <h5 class="card-title">Descricao</h5>
                                <h5 class="card-title">R$80,00</h5>
                                </div>
                                <h6 class="card-subtitle text-muted">11/11/2022</h6>
                            </div>
                        </div>
                        <div className='categoria-box-footer'>Total gasto: R$100,00</div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div className='categoria-box'>
                        <div className='categoria-box-titulo'>Animais</div>
                        <div className="card gasto-card">
                            <div class="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                <h5 class="card-title">Descricao</h5>
                                <h5 class="card-title">R$80,00</h5>
                                </div>
                                <h6 class="card-subtitle text-muted">11/11/2022</h6>
                            </div>
                        </div>
                        <div className="card gasto-card">
                            <div class="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                <h5 class="card-title">Descricao</h5>
                                <h5 class="card-title">R$80,00</h5>
                                </div>
                                <h6 class="card-subtitle text-muted">11/11/2022</h6>
                            </div>
                        </div>
                        <div className="card gasto-card">
                            <div class="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                <h5 class="card-title">Descricao</h5>
                                <h5 class="card-title">R$80,00</h5>
                                </div>
                                <h6 class="card-subtitle text-muted">11/11/2022</h6>
                            </div>
                        </div>
                        <div className='categoria-box-footer'>Total gasto: R$100,00</div>
                    </div> 
                </div>
                <div class="col-lg-3">
                    <PieChart
                        series={[
                            {
                            data: [
                                { id: 0, value: 1000, label: 'Gasto' },
                                { id: 1, value: 1500, label: 'Disponivel' },
                            ],
                            },
                        ]}
                        width={400}
                        height={400}
                    />
                </div>
                <div class="col-lg-3">
                    <div className='texto-box-mensal'>
                        <div className='texto-box-mensal-titulo'>Total gasto: R$1000,00</div>
                    </div>
                    <div className='texto-box-mensal'>
                        <div className='texto-box-mensal-titulo'>Meta: R$2500,00</div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <div className='categoria-box'>
                        <div className='categoria-box-titulo'>Casa</div>
                        <div className="card gasto-card">
                            <div class="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                <h5 class="card-title">Descricao</h5>
                                <h5 class="card-title">R$80,00</h5>
                                </div>
                                <h6 class="card-subtitle text-muted">11/11/2022</h6>
                            </div>
                        </div>
                        <div className="card gasto-card">
                            <div class="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                <h5 class="card-title">Descricao</h5>
                                <h5 class="card-title">R$80,00</h5>
                                </div>
                                <h6 class="card-subtitle text-muted">11/11/2022</h6>
                            </div>
                        </div>
                        <div className="card gasto-card">
                            <div class="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                <h5 class="card-title">Descricao</h5>
                                <h5 class="card-title">R$80,00</h5>
                                </div>
                                <h6 class="card-subtitle text-muted">11/11/2022</h6>
                            </div>
                        </div>
                        <div className='categoria-box-footer'>Total gasto: R$100,00</div>
                    </div>           
                </div>
                <div class="col-lg-3">
                    <div className='categoria-box'>
                        <div className='categoria-box-titulo'>Transporte</div>
                        <div className="card gasto-card">
                            <div class="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                <h5 class="card-title">Descricao</h5>
                                <h5 class="card-title">R$80,00</h5>
                                </div>
                                <h6 class="card-subtitle text-muted">11/11/2022</h6>
                            </div>
                        </div>
                        <div className="card gasto-card">
                            <div class="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                <h5 class="card-title">Descricao</h5>
                                <h5 class="card-title">R$80,00</h5>
                                </div>
                                <h6 class="card-subtitle text-muted">11/11/2022</h6>
                            </div>
                        </div>
                        <div className="card gasto-card">
                            <div class="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                <h5 class="card-title">Descricao</h5>
                                <h5 class="card-title">R$80,00</h5>
                                </div>
                                <h6 class="card-subtitle text-muted">11/11/2022</h6>
                            </div>
                        </div>
                        <div className='categoria-box-footer'>Total gasto: R$100,00</div>
                    </div>           
                </div>
                <div class="col-lg-5">
                    <a className='botao-box-mensal' href="/">
                        <div className='texto-box-mensal-titulo'>+ Novo gasto</div>
                    </a>
                    <a className='botao-box-mensal' href="/">
                        <div className='texto-box-mensal-titulo'>+ Nova categoria</div>
                    </a>
                </div>
                
            </div>
            
    </div>
  );

};
export default ControleMensal;