import images from "../../assets/images/images_skillLogos";

const skillLogos = images.map(({ id, src, title, description }) => <img key={id} src={src} title={title} alt={description} />)

export default function ResumeLogos() {
    return (
        <div className="resumeLogos">
            {skillLogos}
        </div>
    )
}