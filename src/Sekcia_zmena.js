import React, { Fragment } from "react";
import Menu from "./Menu";

function Sekcia_zmena() {
    
    return (
        <Fragment>
            <div>
                <Menu />
                
               
                <div className="header2">
                    <h1>Vykonané zmeny</h1>
                </div>
                    <div className ="zmena-text">
                        <p>Prerobenie html stránky do React.js</p>
                        <p>Navigácia menu</p>
                        <p>Vytvorenie podstránky INSERT a VÝPIS</p>
                        <p>Vytvorenie databázy vo Firebase</p>
                        <p>Prepojenie databázy s React.js</p>
                        <p>Vytvorenie registračného formulára</p>
                        <p>Vkladanie údajov z formulára do databázy</p>
                        <p>Výpis rodinných príslušníkov z databázy</p>
                        <p>Vymazanie rodinného príslušníka z databázy</p>
                        <p>Zvýšenie veku rodinného príslušníka</p>
                        <p>Vzhľad stránky pomocou CSS</p>
                        <p>Hosting pre webstránku</p>

                    </div>
                </div>
            {<footer>
                <p>© Food Online - Viliam Jenča 2023</p>
            </footer>}
        </Fragment>
    )
}

export default Sekcia_zmena;