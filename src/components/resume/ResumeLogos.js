                                                                /* ===================== IMPORTS ====================== */
import images from "../../assets/images/images_skillLogos";

                                                                /* ====================== COMPONENT =================== */

                                                                /* Map over images array to create an array of images   */
const skillLogos = images.map(({ id, src, title, description }) => <img key={id} src={src} title={title} alt={description} />);

export default function ResumeLogos() {
    return (
        <div className="resumeLogos">
            {skillLogos}
        </div>
    )
};
