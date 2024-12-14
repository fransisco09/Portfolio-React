import styles from './FooterStyles.module.css';

function Footer() {
    return (
        <section
            id="footer"
            className={styles.container}
        >
            <p>
                &#169; 2024 Daniel F Sitio. <br /> All Right reserved.
            </p>
        </section>
    );
}

export default Footer;
