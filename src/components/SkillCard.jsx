const SkillCard = ({skill}) => {
    if (!skill) {
        return <p>Skill no encontrado...</p>;
    }
    
    return (
        <div className="skills-contenedor-card">{skill.nombre}</div>
    )
}
export default SkillCard