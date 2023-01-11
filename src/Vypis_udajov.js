import React, { Fragment, useState, useEffect } from "react";
import Menu from "./Menu";
import { db } from "./firebase-config";
import {
    collection,
    getDocs,
    deleteDoc,
    doc,
    updateDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";
function Vypis_udajov() {
    const [rodina, setRodina] = useState([]);
    const rodinaCollectionRef = collection(db, "rodina");
    const [filterValue, setFilterValue] = useState("");
    const [filterType, setFilterType] = useState("meno");
    const [filteredRodina, setFilteredRodina] = useState([]);

    const getUsers = async () => {
        const data = await getDocs(rodinaCollectionRef);
        setRodina(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    useEffect(() => {
        getUsers();
    }, []);

    const deleteUser = async (id) => {
        const userDoc = doc(db, "rodina", id);
        await deleteDoc(userDoc);
        getUsers();
    };

    const updateUser = async (id, vek) => {
        const userDoc = doc(db, "rodina", id);
        const newFields = { vek: vek + 1 };
        await updateDoc(userDoc, newFields);
        getUsers();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (filterType === "vek") {
            setFilteredRodina(
                rodina.filter((data) => {
                    console.log(data[filterType]);
                    console.log(typeof data[filterType]);

                    return data[filterType] === Number(filterValue);
                })
            );
        } else {
            setFilteredRodina(
                rodina.filter((data) => {
                    return (
                        data[filterType].toLowerCase().search(filterValue.toLowerCase()) !=
                        -1
                    );
                })
            );
        }
    };

    return (
        <Fragment>
            <Menu />
            <div className="header2">
                <h1>Výpis údajov</h1>
            </div>
            <br></br>

            <div>
                {rodina.map((user) => {
                    return (
                        <div className="tabulka" key={user.id}>
                            <table>
                                <thead>
                                    <tr>
                                        <th scope="col">Meno: {user.meno} </th>
                                        <th scope="col">Priezvisko: {user.priezvisko}</th>
                                        <th scope="col">Rodné čislo: {user.rodne_cislo}</th>
                                        <th scope="col">Vek: {user.vek}</th>
                                        <th scope="col">Príbuzenstvo: {user.pribuzenstvo}</th>
                                        <p>&nbsp;</p>{" "}
                                        <button
                                            className="delete"
                                            onClick={() => {
                                                deleteUser(user.id);
                                            }}>
                                            Delete
                                        </button>
                                        <p>&nbsp;</p>
                                        <button
                                            className="delete"
                                            onClick={() => {
                                                updateUser(user.id, user.vek);
                                            }}>
                                            Zvýšiť vek
                                        </button>
                                        <p>&nbsp;</p>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    );
                })}
            </div>

            <div className="vyhladaj">
                <form onSubmit={handleSubmit}>
                    <h2>Vyber údaj pomocou, ktorého chceš vyhľadávať.</h2> <br></br>
                    <select
                        name="hladaj"
                        onChange={(event) => {
                            setFilterType(event.target.value);
                        }}>
                        <option type="text" name="meno" value="meno">
                            Meno
                        </option>
                        <option type="text" name="priezvisko" value="priezvisko">
                            Priezvisko
                        </option>
                        <option type="number" name="vek" value="vek">
                            Vek
                        </option>
                        <option type="text" name="rodne_cislo" value="rodne_cislo">
                            Rodne Cislo
                        </option>
                        <option type="text" name="pribuzenstvo" value="pribuzenstvo">
                            Pribuzenstvo
                        </option>
                    </select>
                    <input
                        type="text"
                        name="udaj"
                        placeholder="Hodnota"
                        id="udaj"
                        required
                        onChange={(event) => {
                            setFilterValue(event.target.value);
                        }}
                    />
                    <input type="submit" name="submit" value="Hľadať" />
                </form>
                {filteredRodina.map((user) => {
                    return (
                        <div className="tabulka" key={user.id}>
                            <table>
                                <thead>
                                    <tr>
                                        <th scope="col">Meno: {user.meno} </th>
                                        <th scope="col">Priezvisko: {user.priezvisko}</th>
                                        <th scope="col">Rodné čislo: {user.rodne_cislo}</th>
                                        <th scope="col">Vek: {user.vek}</th>
                                        <th scope="col">Príbuzenstvo: {user.pribuzenstvo}</th>
                                        
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    );
                })}
            </div>
            <h1></h1>
            <br></br>
            {
                <footer>
                    <p>© Food Online - Viliam Jenča 2023</p>
                </footer>
            }
        </Fragment>
    );
}

export default Vypis_udajov;
