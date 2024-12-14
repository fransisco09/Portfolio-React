import styles from './ProjectsStyles.module.css';
import ProjectsCard from '../../common/ProjectsCard';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';

function Projects() {
    return (
        <section
            id="projects"
            className={styles.container}
        >
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectsCard
                    src={viberr}
                    link="https://github.com/"
                    h3="Viberr"
                    p="Streming Music"
                />
                <ProjectsCard
                    src={freshBurger}
                    link="https://github.com/"
                    h3="Fresh Burger"
                    p="Restorant Burger"
                />
                <ProjectsCard
                    src={hipsster}
                    link="https://github.com/"
                    h3="Hipsster"
                    p="Glass Shops"
                />
                <ProjectsCard
                    src={fitLift}
                    link="https://github.com/"
                    h3="Fit Lift"
                    p="Fitness Apps"
                />
            </div>
        </section>
    );
}

export default Projects;
