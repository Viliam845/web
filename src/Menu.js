import React, { Fragment } from "react";
import {Link} from 'react-router-dom'; 

function Menu() {
    return (
        <Fragment>
            <div className="nav-row">

                <div className="nav-column" ><ul><Link to="/">DOMOV</Link></ul> 
              </div>

                <div className="nav-column" ><ul> <Link to="/Insert">INSERT</Link></ul>
                </div>
                <div className="nav-column" ><ul> <Link to="/Vypis_udajov">VÝPIS</Link></ul>
                </div>
                <div className="nav-column" ><ul> <Link to="/Sekcia_zmena">ZMENY</Link></ul>
                </div>
                
            </div>
        </Fragment>
    )
}

export default Menu;