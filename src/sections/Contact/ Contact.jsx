import styles from './ContactStyles.module.css';

function Contact() {
    return (
        <section
            id="contact"
            className={styles.container}
        >
            <h1 className="sectionTitle">Contact</h1>
            <form action="">
                <div className="formGroup">
                    <label
                        htmlFor="name"
                        hidden
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        required
                    />
                </div>
                <div className="formGroup">
                    <label
                        htmlFor="email"
                        hidden
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="formGroup">
                    <label
                        htmlFor="massage"
                        hidden
                    >
                        Massage
                    </label>
                    <textarea
                        type="text"
                        name="massage"
                        id="massage"
                        placeholder="Message"
                        required
                    />
                </div>
                <input
                    className="haver btn"
                    type="submit"
                    value="Submit"
                />
            </form>
        </section>
    );
}

export default Contact;
