const PortfolioCard = ({proyecto}) => {
    if (!proyecto) {
        return <p>Proyecto no encontrado...</p>;
    }
    
    return (
        <div className="portfolio-contenedor-card">
            {/* COMENTADO HASTA FIX BUG RUTA DE IMAGENES -> VER `App.css` ln206 */}
            {/* <img src={proyecto.enlace} alt={`Foto ${proyecto.nombre}`} title={`Foto ${proyecto.nombre}`} /> */}
            <h3>{proyecto.nombre}</h3>
            <p className="portfolio-contenedor-card-descripcion">{proyecto.descripcion}</p>
            <p>Cliente: {proyecto.cliente}</p>
            <p>URL: <a href={proyecto.enlace} target="_blank" className="portfolio-contenedor-card-url">{proyecto.url}</a></p>
            <p>Estado: <span className={`portfolio-contenedor-card-estado ${proyecto.estado.toLowerCase()}`}>{proyecto.estado}</span></p>
            <p>Año: {proyecto.anio}</p>
        </div>
    )
}
export default PortfolioCard