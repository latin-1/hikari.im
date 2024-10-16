import { FriendItem, FriendList } from "../../components/FriendList";
import { PostItem, PostList } from "../../components/PostList";
import { ProjectItem, ProjectList } from "../../components/ProjectList";
import { SocialItem, SocialList } from "../../components/SocialList";
import { Typography } from "../../components/Typography";
import { usePageTitle } from "../../hooks/usePageTitle";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  usePageTitle();

  return (
    <main className={styles.page}>
      <section className={styles.section}>
        <SocialList>
          <SocialItem
            name="Twitter"
            iconUrl={new URL(
              "../../assets/icons/twitter.svg",
              import.meta.url,
            ).toString()}
            link="https://twitter.com/rev__hikari"
          />
          <SocialItem
            name="Instagram"
            iconUrl={new URL(
              "../../assets/icons/instagram.svg",
              import.meta.url,
            ).toString()}
            link="https://www.instagram.com/rev_hikari/"
          />
          <SocialItem
            name="GitHub"
            iconUrl={new URL(
              "../../assets/icons/github.svg",
              import.meta.url,
            ).toString()}
            link="https://github.com/latin-1"
          />
        </SocialList>
        <Typography>
          <p>
            I'm a Web developer and UI/UX designer. I use Arch Linux and GNOME
            for both work and life.
          </p>
        </Typography>
      </section>
      <section className={styles.section}>
        <h1 className={styles.title}>Posts</h1>
        <PostList>
          <PostItem title="2022" date="Jan 5, 2023" to="/posts/2022" />
        </PostList>
      </section>
      <section className={styles.section}>
        <h1 className={styles.title}>Projects</h1>
        <ProjectList>
          <ProjectItem
            name="Figma Agent for Linux"
            description="(a.k.a. Font Helper)"
            link="https://github.com/neetly/figma-agent-linux"
          />
        </ProjectList>
      </section>
      <section className={styles.section}>
        <h1 className={styles.title}>Friends</h1>
        <FriendList>
          <FriendItem
            name="Bingxing Wang"
            avatarUrl="https://avatars.githubusercontent.com/u/6284353?s=80"
            link="https://imbushuo.net/"
          />
          <FriendItem
            name="Jiayi Cheng"
            avatarUrl="https://avatars.githubusercontent.com/u/8012410?s=80"
            link="https://github.com/TundraWork"
          />
          <FriendItem
            name="Mingye Wang"
            avatarUrl="https://avatars.githubusercontent.com/u/6459309?s=80"
            link="https://twitter.com/Artoria2e5"
          />
          <FriendItem
            name="Yeechan Lu"
            avatarUrl="https://avatars.githubusercontent.com/u/158528?s=80"
            link="https://orzfly.com/"
          />
          <FriendItem
            name={<span lang="zh-Hans">谦谦</span>}
            avatarUrl="https://avatars.githubusercontent.com/u/4645762?s=80"
            link="https://xqq.im/"
          />
          <FriendItem
            name={<span lang="zh-Hans">三三</span>}
            avatarUrl="https://avatars.githubusercontent.com/u/905663?s=80"
            link="https://best33.com/"
          />
        </FriendList>
      </section>
    </main>
  );
};

export { HomePage };
