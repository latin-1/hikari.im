import { FriendItem, FriendList } from "../../components/FriendList";
import { PageLayout } from "../../components/PageLayout";
import { ProjectItem, ProjectList } from "../../components/ProjectList";
import { SocialItem, SocialList } from "../../components/SocialList";
import { Typography } from "../../components/Typography";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <PageLayout>
      <section className={styles.section}>
        <Typography>
          <p>
            I'm a Web developer and also a UX designer. I use Arch Linux and
            GNOME for daily use.
          </p>
        </Typography>
      </section>
      <section className={styles.section}>
        <SocialList>
          <SocialItem
            name="Twitter"
            iconUrl={new URL(
              "../../assets/icons/twitter-icon.svg",
              import.meta.url,
            ).toString()}
            link="https://twitter.com/rev__hikari"
          />
          <SocialItem
            name="Instagram"
            iconUrl={new URL(
              "../../assets/icons/instagram-icon.svg",
              import.meta.url,
            ).toString()}
            link="https://www.instagram.com/rev_hikari/"
          />
          <SocialItem
            name="GitHub"
            iconUrl={new URL(
              "../../assets/icons/github-icon.svg",
              import.meta.url,
            ).toString()}
            link="https://github.com/latin-1"
          />
          <SocialItem
            name="Patreon"
            iconUrl={new URL(
              "../../assets/icons/patreon-icon.svg",
              import.meta.url,
            ).toString()}
            link="https://patreon.com/tokenize"
          />
          <SocialItem
            name="Steam"
            iconUrl={new URL(
              "../../assets/icons/steam-icon.svg",
              import.meta.url,
            ).toString()}
            link="https://steamcommunity.com/id/latin-1/"
          />
          <SocialItem
            name="Email"
            iconUrl={new URL(
              "../../assets/icons/gmail-icon.svg",
              import.meta.url,
            ).toString()}
            link="mailto:rev.hikari@gmail.com"
          />
        </SocialList>
      </section>
      <section className={styles.section}>
        <Typography>
          <dl>
            <dt>Devices</dt>
            <dd>
              <span>💻&nbsp;Yoga Slim 7 Pro</span>
              <span className={styles.separator}> / </span>
              <span>📱&nbsp;Pixel 6</span>
              <span className={styles.separator}> / </span>
              <span>🎧&nbsp;WF-1000XM4</span>
              <span className={styles.separator}> / </span>
              <span>🎮&nbsp;Nintendo Switch</span>
            </dd>
            <dt>Tools</dt>
            <dd>
              <span>🌐&nbsp;Google Chrome</span>
              <span className={styles.separator}> / </span>
              <span>💻&nbsp;Visual Studio Code</span>
              <span className={styles.separator}> / </span>
              <span>🎨&nbsp;Figma</span>
            </dd>
            <dt>GPG Key</dt>
            <dd>
              🔑&nbsp;
              <a
                href="https://pgp.mit.edu/pks/lookup?op=get&search=0x72211262451C419E"
                target="_blank"
              >
                DAF3 49DF 61CB 5503 E755 8208 7221 1262 451C 419E
              </a>
            </dd>
          </dl>
        </Typography>
      </section>
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
            name="Mingye Wang"
            avatarUrl="https://avatars.githubusercontent.com/u/6459309?s=96"
            link="https://twitter.com/Artoria2e5"
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
          <FriendItem
            name={<span lang="zh-Hans">三三</span>}
            avatarUrl="https://avatars.githubusercontent.com/u/905663?s=96"
            link="https://best33.com/"
          />
        </FriendList>
      </section>
    </PageLayout>
  );
};

export { HomePage };
