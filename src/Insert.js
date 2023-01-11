import React, { Fragment, useState, useEffect } from "react";
import Menu from "./Menu";
import { db } from './firebase-config';
import { collection, getDocs, addDoc } from "firebase/firestore";
function Insert() {
    
    const [newName, setNewName] = useState("");
    const [newSurname, setNewSurname] = useState("");
    const [newRodne_cislo, setNewRodne_cislo] = useState(0);
    const [newAge, setNewAge] = useState(0);
    const [newPribuzenstvo, setNewPribunzenstvo] = useState("");

    const rodinaCollectionRef = collection(db, "rodina");
    const resetUseStates = () => {
        setNewName("");
        setNewSurname("");
        setNewPribunzenstvo("");
        setNewRodne_cislo("");
        setNewAge("");
    };
    const createUser = async () => {
        await addDoc(rodinaCollectionRef, {
            meno: newName,
            priezvisko: newSurname,
            rodne_cislo: newRodne_cislo,
            vek: Number(newAge),
            pribuzenstvo: newPribuzenstvo,
        });
        alert("Registrácia nového člena rodiny prebehla úspešne");
        resetUseStates();
    };
    
    return (
        <Fragment>
            <div>
                <Menu />
                <div className="header2">
                    <h1>Insert údajov</h1>
                </div>
                <div className="register">
                    <h1>Registračný formulár rodinných príslušníkov</h1>
                    <form>
                        <input type="text" name="meno" placeholder="Meno" id="meno" required value={newName || ""}
                            onChange={(event) => {
                                setNewName(event.target.value);
                            }} />

                        <input type="text" name="priezvisko" placeholder="Priezvisko" id="priezvisko" value={newSurname || ""} required
                            onChange={(event) => { setNewSurname(event.target.value); }} />

                        <input type="varchar" name="ID" placeholder="Rod. č." id="ID" required value={newRodne_cislo || ""} onChange={(event) => {
                            setNewRodne_cislo(event.target.value);
                        }} />

                        <input type="int" name="vek" placeholder="Vek" id="vek" required value={newAge || ""}  onChange={(event) => {
                            setNewAge(event.target.value);
                        }} />

                        <input type="text" name="pribuzenstvo" placeholder="Príbuzenstvo" id="pribuzenstvo" required
                            value={newPribuzenstvo || ""}  onChange={(event) => { setNewPribunzenstvo(event.target.value); }} />
                    </form>

                    <button className = "submit"onClick={createUser}>Registrovať</button>
                    
                </div>

            </div>
            
                            <h1></h1>
            {<footer>
                <p>© Food Online - Viliam Jenča 2023</p>
            </footer>}
        </Fragment>
    )
}

export default Insert;