import { useEffect, useState } from "react"
import { obtenerSkills } from "../utils/data"
import { FadeLoader } from "react-spinners"
import SkillCard from "./SkillCard"

const Skills = () => {
    const [loading, setLoading] = useState(true)
    const [skillsGroups, setSkillsGroups] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        obtenerSkills
            .then(({ skills }) => {
                if (Array.isArray(skills) && skills.length > 0) {
                    const sorted = skills.sort((a, b) => a.orden.localeCompare(b.orden))
                    
                    const groups = [
                        { cols: 5, items: sorted.slice(0, 5) },  // HTML a Accesibilidad
                        { cols: 3, items: sorted.slice(5, 8) },  // SASS a Tailwind
                        { cols: 4, items: sorted.slice(8, 12) }, // React a JSON
                        { cols: 3, items: sorted.slice(12, 15) },// Node a PHP
                        { cols: 5, items: sorted.slice(15, 20) },// Bases de Datos + AWS
                        { cols: 3, items: sorted.slice(20, 23) },// WordPress a Elementor
                        { cols: 2, items: sorted.slice(23, 25) } // Git y Bubble
                    ];
                    setSkillsGroups(groups)
                } else {
                    setError("No se encontraron habilidades.");
                }
            })
            .catch((error) => {
                setError("Hubo un error al obtener las habilidades.");
            })
            .finally(() => setLoading(false))
    }, [])

    return (
        <section id="skills" className="skills">
            <h2 className="comienzoSubTitulo">Skills</h2>
            {loading ? (
                <div className="spinner-container">
                    <FadeLoader color={"#353D4F"} loading={loading} />
                </div>
            ) : error ? (
                <p className="mensaje-error">{error}</p>
            ) : (
                <div className="skills-main-wrapper">
                    {skillsGroups.map((group, index) => (
                        <div 
                            key={index} 
                            className="skills-contenedor" 
                            style={{ gridTemplateColumns: `repeat(${group.cols}, 1fr)` }}
                        >
                            {group.items.map((skill) => (
                                <SkillCard key={skill.orden} skill={skill} />
                            ))}
                        </div>
                    ))}
                </div>
            )}
            <p className="finSubTitulo">Skills</p>
        </section>
    )
}
export default Skills