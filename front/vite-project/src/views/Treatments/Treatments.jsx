import styles from './Treatments.module.css';

import hairRemovalImage from '../../assets/laser.jpg';
import hyaluronicAcidImage from '../../assets/acido.jpg';
import massageImage from '../../assets/masaje.jpg'
import dermaplaningImage from '../../assets/derma.jpg';
import nailsImage from '../../assets/nail.jpg';
import deepCleaningImage from '../../assets/clean.jpg';

const treatments = [
    {
        title: 'Hair Removal',
        image: hairRemovalImage,
        description: 'Effective and gentle hair removal treatments for smooth skin.'
    },
    {
        title: 'Hyaluronic Acid',
        image: hyaluronicAcidImage,
        description: 'Enhance your skin’s hydration and reduce fine lines.'
    },
    {
        title: 'Massage',
        image: massageImage,
        description: 'Relaxing and therapeutic massage sessions to relieve stress.'
    },
    {
        title: 'Dermaplaning',
        image: dermaplaningImage,
        description: 'Exfoliate your skin with our professional dermaplaning service.'
    },
    {
        title: 'Nails',
        image: nailsImage,
        description: 'Manicure and pedicure services for beautiful and healthy nails.'
    },
    {
        title: 'Deep Cleaning',
        image: deepCleaningImage,
        description: 'Thorough facial cleansing treatments to rejuvenate your skin.'
    }
];

const Treatments = () => {
    return (
        <div className={styles.treatmentsSection}>
            <h2>SOME OF OUR TREATMENTS</h2>
            <p>Discover our range of aesthetic treatments designed to rejuvenate and enhance your natural beauty.</p>
            <div className={styles.treatmentsContainer}>
                {treatments.map((treatment, index) => (
                    <div className={styles.treatmentBox} key={index}>
                        <img src={treatment.image} alt={treatment.title} />
                        <h3>{treatment.title}</h3>
                        <p>{treatment.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Treatments;