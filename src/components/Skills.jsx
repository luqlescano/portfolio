import { useEffect, useState } from "react"
import { obtenerSkills } from "../utils/data"
import { FadeLoader } from "react-spinners"
import SkillCard from "./SkillCard"

const Skills = () => {
    const [loading, setLoading] = useState(true)
    const [skills, setSkills] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        obtenerSkills
            .then(({ skills }) => {
                if (Array.isArray(skills) && skills.length > 0) {
                    const skillsOrdenadas = skills.sort((a, b) => a.orden.localeCompare(b.orden))
                    setSkills(skillsOrdenadas)
                } else {
                    setError("No se encontraron habilidades.")
                }
            })
            .catch((error) => {
                console.error("Error al obtener skills:", error)
                setError("Hubo un error al obtener las habilidades.")
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])
    
    return (
        <section id="skills" className="skills">
            <h2 className="comienzoSubTitulo">Skills</h2>
            {loading ? (
                <div className="spinner-container">
                    <FadeLoader color={"#353D4F"} loading={loading} />
                </div>
            ) : (
                <div className="skills-contenedor">
                    {error ? (
                        <p className="mensaje-error">{error}</p>
                    ) : (
                        skills.map((skill) => (
                            <SkillCard key={skill.orden} skill={skill} />
                        ))
                    )}
                </div>
            )}
            <p className="finSubTitulo">Skills</p>
        </section>
    )
}
export default Skills