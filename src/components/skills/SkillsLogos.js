import images from "../../assets/images/images";

const skillLogos = images.map(({ id, src, title, description }) => <img key={id} src={src} title={title} alt={description} />)

export default function SkillsLogos() {
    return (
        <div className="skillsLogos">
            {skillLogos}
        </div>
    )
}