import React, { Fragment } from "react";
import Menu from "./Menu";

function Home() {
    return (
        <Fragment>
            <div>
                <Menu />
                <div className="header" >
                    <h1>Food Online</h1>
                    <p>Nový pohľad na jedlo</p>
                </div>
                
                <h1>Služby</h1>
                <div className="row">
                    <div className="column">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-car fa-stack-1x fa-inverse"></i>
                        </span>
                        <p>
                            Donáška až ku prahom vašich dverí. Nákup Vám bude doručený do niekoľkých minút od pripravenia
                            objednávky, alebo až na Vami stanovený termín.
                        </p>
                    </div>
                    <div className="column">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>
                        <p>
                            Food Online nákupy je služba, vďaka ktorej si môžete vyberať z množstva produktov z pohodlia svojho
                            domova. Aby sme vám ponúkli len to najlepšie, neustále sa pre vás zlepšujeme. Kvalitu a čerstvosť
                            každého nákupu kontrolujeme dvakrát.
                        </p>
                    </div>
                    <div className="column">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-mobile fa-stack-1x fa-inverse"></i>
                        </span>
                        <p>
                            Následne sa telefonicky cez aplikáciu spojíte s kuriérom a informujete ho o tom, čo chcete previesť
                            alebo nakúpiť. Podrobnosti nájdete na stránke
                        </p>
                    </div>
                    </div>
                </div>
            <div className="header2">
                <h1>Naše najlepšie ponuky jedál</h1>
            </div>
                <div className="rowimg">
                <div className="columnimg">
                <img src="jedlo1.jpg"/>
                <img src="jedlo2.jpg" />
                <img src="jedlo3.jpg" />
                </div>
               
            <div className="columnimg">
                <img src="jedlo4.jpg"/>
                <img src="jedlo5.jpg"/>
                <img src="jedlo6.jpg"/>
                
                 </div>
                <div className="columnimg">
                <img src="jedlo7.jpg"/>
                <img src="jedlo8.jpg"/>
                <img src="jedlo9.jpg"/>
                
                </div>
                <div className="columnimg">
                <img src="jedlo10.jpg"/>
                <img src="jedlo11.jpg"/>
                <img src="jedlo12.jpg"/>
                 </div>
                 </div>
            
            
            {<footer>
                <p>© Food Online - Viliam Jenča 2023</p>
            </footer>}
        </Fragment>
    )
}

export default Home;