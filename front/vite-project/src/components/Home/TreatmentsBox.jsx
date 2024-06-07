import styles from "./TreatmentsBox.module.css"
import imagen1 from "../../assets/skin.jpg"
import imagen2 from "../../assets/hair.jpg"
import imagen3 from "../../assets/massage.jpg"

const TreatmentsBox = () => {
    return (
        <div className={styles.treatmentsSection}>
            <h2>Our Most Popular Treatments</h2>
            <div className={styles.treatmentsContainer}>
                <div className={styles.treatmentBox}>
                    <img src={imagen1} alt="Treatment 1" />
                    <h3>Facial Treatments</h3>
                    <p>Revitalize your skin with our luxurious facial treatments at BeautyHaven. From hydrating facials to rejuvenating peels, let us pamper your skin and reveal your natural glow.</p>
                </div>
                <div className={styles.treatmentBox}>
                    <img src={imagen2} alt="Treatment 2" />
                    <h3>Hair Removal</h3>
                    <p>Say goodbye to unwanted hair with our professional depilation services at BeautyHaven. Our expert technicians provide gentle and effective hair removal solutions for silky smooth skin.</p>
                </div>
                <div className={styles.treatmentBox}>
                    <img src={imagen3} alt="Treatment 3" />
                    <h3>Massage</h3>
                    <p>Indulge in ultimate relaxation with our rejuvenating massage therapies at BeautyHaven. From Swedish to deep tissue, melt away stress and tension, and restore balance to your body and mind.</p>
                </div>
            </div>
        </div>
    );
}

export default TreatmentsBox