import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillsList from '../../common/SkillsList';

function Skill() {
    return (
        <section
            id="skills"
            className={styles.container}
        >
            <h1 className='sectionTitle'>Skills</h1>
            <div className={styles.skillsList}>
                <SkillsList
                    src={checkMarkIcon}
                    skills="HTML"
                />
                <SkillsList
                    src={checkMarkIcon}
                    skills="CSS"
                />
                <SkillsList
                    src={checkMarkIcon}
                    skills="PHP"
                />
                <SkillsList
                    src={checkMarkIcon}
                    skills="Javascript"
                />
            </div>
            <hr />
            <div className={styles.skillsList}>
                <SkillsList
                    src={checkMarkIcon}
                    skills="Tailwind"
                />
                <SkillsList
                    src={checkMarkIcon}
                    skills="Nextjs"
                />
                <SkillsList
                    src={checkMarkIcon}
                    skills="Reactjs"
                />
                <SkillsList
                    src={checkMarkIcon}
                    skills="Laravel"
                />
            </div>
            <hr />
            <div className={styles.skillsList}>
                <SkillsList
                    src={checkMarkIcon}
                    skills="Mysql"
                />
                <SkillsList
                    src={checkMarkIcon}
                    skills="Git"
                />
                <SkillsList
                    src={checkMarkIcon}
                    skills="Vue"
                />
                <SkillsList
                    src={checkMarkIcon}
                    skills="Python"
                />
            </div>
            <hr />
        </section>
    );
}

export default Skill;
