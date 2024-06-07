import aboutImage from '../../assets/room.jpg'; // Importa la imagen de la empresa
import styles from "./About.module.css"

const About = () => {
    return (
        <div>
            <div className={styles.aboutContainer}>
            <div className={styles.aboutContent}>
                <h2>About Us</h2>
                <p>
                    At BeautyHeaven, we're dedicated to providing high-quality esthetic services to our clients. Founded in 2012, our journey began with a passion for enhancing natural beauty and promoting self-care.
                </p>
                <p>
                    Our team of skilled professionals strives to create a welcoming and relaxing environment where our clients can indulge in rejuvenating treatments and leave feeling refreshed and confident.
                </p>
                <p>
                    Whether you're looking for a revitalizing facial, a soothing massage, or expert skincare advice, we're here to cater to your every need.
                </p>
            </div>
            <div className={styles.aboutImage}>
                <img src={aboutImage} alt="About Us" />
            </div>
        </div>
        </div>
    )
}

export default About