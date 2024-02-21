import fotoPerfil from "../assets/img/perfil-llescano-full.png"
import { edadCalculada } from "../utils/functions"

const Hola = () => {
    return (
        <section id="hola" className="hola">
            <div className="hola-foto">
                <img src={fotoPerfil} alt="Foto de Lucas Lescano" title="Foto de Lucas Lescano" />
            </div>
            <div className="hola-descripcion">
                    <p className="hola-descripcion-saludo">Hola, soy</p>
                    <h1 className="hola-descripcion-brand">Lucas Lescano</h1>
                    <p className="hola-descripcion-quien-soy">React Front End Developer</p>
                    <p className="hola-descripcion-lugar">de Quilmes, Buenos Aires, <span className="hola-descripcion-pais">Argentina</span>.</p>
                    <p className="hola-descripcion-tengo">Tengo <span className="hola-descripcion-edad">{edadCalculada} años</span>, desde el 2014 me dedico al diseño y desarrollo web.</p>
            </div>
        </section>
    )
}
export default Hola