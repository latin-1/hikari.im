import { FriendItem, FriendList } from "../../components/FriendList";
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
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Friends</h2>
        <FriendList>
          <FriendItem
            name="Alendia"
            avatarUrl="https://avatars.githubusercontent.com/u/44888915?s=96"
            link="https://alendia.dev/"
          />
          <FriendItem
            name="Bingxing Wang"
            avatarUrl="https://avatars.githubusercontent.com/u/6284353?s=96"
            link="https://imbushuo.net/"
          />
          <FriendItem
            name="Jiayi Cheng"
            avatarUrl="https://avatars.githubusercontent.com/u/8012410?s=96"
            link="https://github.com/TundraWork"
          />
          <FriendItem
            name="Makito"
            avatarUrl="https://avatars.githubusercontent.com/u/5277268?s=96"
            link="https://keep.moe/"
          />
          <FriendItem
            name="Mingye Wang"
            avatarUrl="https://avatars.githubusercontent.com/u/6459309?s=96"
            link="https://twitter.com/Artoria2e5"
          />
          <FriendItem
            name="Qian"
            avatarUrl="https://avatars.githubusercontent.com/u/22388300?s=96"
            link="https://wwyqianqian.github.io/"
          />
          <FriendItem
            name="Tachibana Kiyomi"
            avatarUrl="https://avatars.githubusercontent.com/u/34709816?s=96"
            link="https://ioover.net/"
          />
          <FriendItem
            name="Yeechan Lu"
            avatarUrl="https://avatars.githubusercontent.com/u/158528?s=96"
            link="https://orzfly.com/"
          />
        </FriendList>
      </section>
    </PageLayout>
  );
};

export { HomePage };
