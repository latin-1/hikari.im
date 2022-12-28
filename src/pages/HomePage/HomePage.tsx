import { FriendItem, FriendList } from "../../components/FriendList";
import { SocialItem, SocialList } from "../../components/SocialList";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <main>
      <section>
        <SocialList>
          <SocialItem
            name="Twitter"
            icon={new URL(
              "../../assets/icons/twitter.svg",
              import.meta.url,
            ).toString()}
            link="https://twitter.com/rev__hikari"
          />
          <SocialItem
            name="GitHub"
            icon={new URL(
              "../../assets/icons/github.svg",
              import.meta.url,
            ).toString()}
            link="https://github.com/latin-1"
          />
        </SocialList>
      </section>
      <section>
        <h1 className={styles.title}>Friends</h1>
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
    </main>
  );
};

export { HomePage };
