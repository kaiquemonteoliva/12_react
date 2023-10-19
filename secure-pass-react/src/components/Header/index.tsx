import "./style.css";
import Logo from "../../assets/logo.png";



export default function Header() {
    return (
        <>

            <header>
                <div className="container_grid header_texto">
                    <p>securePass</p>


                    <nav className="menu_navegacao customer_botao">
                        <a href="../cadastro/cadastro.html">cadastrar</a>
                        <a href="../acoes/Home/acoes.html">acoes</a>
                        <a href="../perfil/perfil.html">perfil</a>
                        <a href="../BiometriaSur5/index.html">sair</a>
                    </nav>



                    <p>biometria facial</p>
                </div>
                <div className="linha_header">
                    <div className="linha_baixo_esquerda" />
                    <img src={Logo} alt="" />
                    <div className="linha_baixo_direita" />
                </div>
            </header>



        </>

    )

}