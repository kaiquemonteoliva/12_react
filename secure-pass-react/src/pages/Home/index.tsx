import React from "react";
import "./style.css";
import Logo from "../../assets/logo.png";
import Faceid from "../../assets/FaceID.gif";
import { Link } from "react-router-dom";

export default function Home() {

    return (
        <>
            <main>
                <section className="modulo">
                    <div className="img_gif">
                        <img className="" src={Faceid} alt="Imagem da Biometria" />
                    </div>
                    <div className="btn">
                        <Link to="BiometriaFacial" className="botao_principal">Face ID</Link>
                        
                    </div>
                </section>
            </main>
        </>
    )

}