import styles from './WhatIDoStyles.module.css';
import Firmware from '../../assets/Firmware.png';
import DSP from '../../assets/DSP.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function WhatIDo() {
  return (
    <section id="WhatIDo" className={styles.container}>
      <h1 className="sectionTitle">What I do</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Firmware}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Embedded Firmware"
          p="1"
        />
        <ProjectCard
          src={DSP}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Signal Processing"
          p="2"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Human–machine interface"
          p="3"
        />
      </div>
    </section>
  );
}

export default WhatIDo;
