import { PageLayout } from "../../components/PageLayout";
import { ProjectItem, ProjectList } from "../../components/ProjectList";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <PageLayout>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <ProjectList>
          <ProjectItem
            name="Buncho"
            description="Opinionated front-end build system."
            link="https://github.com/neetly/buncho"
          />
          <ProjectItem
            name="React Pixi Renderer"
            description="Concurrent-safe React renderer for PixiJS."
            link="https://github.com/neetly/react-pixi-renderer"
          />
          <ProjectItem
            name="Sideload"
            description="Coming soon..."
            link="https://github.com/neetly/sideload"
          />
        </ProjectList>
      </section>
    </PageLayout>
  );
};

export { HomePage };
