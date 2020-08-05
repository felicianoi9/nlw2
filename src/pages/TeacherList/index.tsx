import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import logoImg from '../../assets/images/logo.svg';
import './styles.css';
import PageHeader from '../../Components/PageHeader';

function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponiveis" >
                <form action="" id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">
                            Matéria
                        </label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day">
                            Dia da Semana
                        </label>
                        <input type="text" id="week-day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">
                            Hora
                        </label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/24903908?s=460&u=b3be4cdae294bfee336b15189042d1c87b377999&v=4" alt="Rogério Feliciano"/>
                        <div>
                            <strong>
                                Rogério Feliciano 
                            </strong>
                            <span>Matemática</span>
                        </div>
                    </header>
                    <p>
                        Entusiasta em Matemática. Apaixonado por números e suas representações e aplicações no mundo. Estudante eterno,
                        <br></br>
                    sempre encantado com a vida e a Matemática de tudo.
                    </p>
                    <footer>
                        <p>
                            preço/hora
                            <strong>R$ 120,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Meu whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
            </main>
        </div>
    );
}

export default  TeacherList;