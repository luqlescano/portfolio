import { useEffect, useState } from "react"
import { obtenerProyectos } from "../utils/data"
import { FadeLoader } from "react-spinners"
import PortfolioCard from "./PortfolioCard"

const Portfolio = () => {
    const [loading, setLoading] = useState(true)
    const [proyectos, setProyectos] = useState([])
    const [error, setError] = useState(null)
    const [mostrarPortfolioCompleto, setMostrarPortfolioCompleto] = useState(false)

    useEffect(() => {
        obtenerProyectos
            .then(({ proyectos }) => {
                if (Array.isArray(proyectos) && proyectos.length > 0) {
                    const proyectosOrdenados = proyectos.sort((a, b) => b.orden.localeCompare(a.orden))
                    setProyectos(proyectosOrdenados.slice(0, 4))
                } else {
                    setError("No se encontraron proyectos.")
                }
            })
            .catch((error) => {
                console.error("Error al obtener proyectos:", error)
                setError("Hubo un error al obtener los proyectos.")
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const handleClickVerMas = () => {
        obtenerProyectos
            .then(({ proyectos }) => {
                if (Array.isArray(proyectos) && proyectos.length > 0) {
                    const proyectosOrdenados = proyectos.sort((a, b) => b.orden.localeCompare(a.orden))
                    setProyectos(proyectosOrdenados)
                    setMostrarPortfolioCompleto(true)
                } else {
                    setError("No se encontraron proyectos.")
                }
            })
            .catch((error) => {
                console.error("Error al obtener proyectos:", error)
                setError("Hubo un error al obtener los proyectos.")
            })
    }
    
    return (
        <section id="portfolio" className="portfolio">
            <h2 className="comienzoSubTitulo">Portfolio</h2>
            {loading ? (
                <div className="spinner-container">
                    <FadeLoader color={"#353D4F"} loading={loading} />
                </div>
            ) : (
                <div className="portfolio-contenedor">
                    {error ? (
                        <p className="mensaje-error">{error}</p>
                    ) : (
                        proyectos.map((proyecto) => (
                            <PortfolioCard key={proyecto.orden} proyecto={proyecto} />
                        ))
                    )}
                </div>
            )}
            {proyectos.length === 4 && !mostrarPortfolioCompleto && (
                <div className="portfolio-contenedor-btn">
                    <button className="btn" onClick={handleClickVerMas}>Ver más proyectos</button>
                </div>
            )}
            <p className="finSubTitulo">Portfolio</p>
        </section>
    )
}
export default Portfolio