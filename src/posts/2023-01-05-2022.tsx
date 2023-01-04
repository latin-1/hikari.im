import { PostLayout } from "../components/PostLayout";
import { Typography } from "../components/Typography";

const coverImageUrl = new URL(
  "../assets/cover.jpg",
  import.meta.url,
).toString();

const Post = () => {
  return (
    <PostLayout
      title="2022"
      date="January 5, 2023"
      coverImage={{
        url: coverImageUrl,
        position: "-6rem 0",
        size: "72rem",
      }}
    >
      <Typography>
        <h2>Key Points</h2>
        <ul style={{ "--list-marker": `"+"` }}>
          <li>Got a new job</li>
          <li>Started learning Rust</li>
        </ul>
        <h2>Devices</h2>
        <ul style={{ "--list-marker": `"+"` }}>
          <li>ASUS Zenbook S 13 OLED</li>
          <li>Google Pixel 6</li>
          <li>Google Pixel 7</li>
          <li>Sony WF-1000XM4</li>
          <li>Logitech MX Anywhere 3</li>
        </ul>
        <h2>Projects</h2>
        <ul style={{ "--list-marker": `"+"` }}>
          <li>
            <a
              href="https://github.com/neetly/figma-agent-linux"
              target="_blank"
              rel="noreferrer"
            >
              Figma Agent Linux
            </a>
          </li>
        </ul>
        <h2>Animes</h2>
        <ul style={{ "--list-marker": `"+"` }}>
          <li>
            <span lang="ja">よふかしのうた</span>
            {" / "}
            <span lang="zh-Hans">彻夜之歌</span>
            {" / "}
            <span>Call of the Night</span>
          </li>
        </ul>
        <h2>Games</h2>
        <ul style={{ "--list-marker": `"+"` }}>
          <li>
            <a
              href="https://store.steampowered.com/app/1591490/"
              target="_blank"
              rel="noreferrer"
            >
              Distant Memoraĵo
            </a>
          </li>
          <li>
            <a
              href="https://store.steampowered.com/app/1833490/"
              target="_blank"
              rel="noreferrer"
            >
              GOODBYE WORLD
            </a>
          </li>
        </ul>
      </Typography>
    </PostLayout>
  );
};

export default Post;
