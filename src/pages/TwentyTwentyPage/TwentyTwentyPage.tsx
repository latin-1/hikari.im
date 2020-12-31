import type { ReactElement } from "react";

import { Page } from "../../components/Page";
import { Typography } from "../../components/Typography";

const TwentyTwentyPage = (): ReactElement => {
  return (
    <Page title="Twenty-Twenty">
      <Typography>
        <p>
          二零二零年过去了，新冠肺炎也迎来了它的第三年。
          <br />
          这一年算不上顺利，却也不能说都是糟糕的事情。
          <br />
          八月，我辞去了工作，在家休息，待业至今。
        </p>
        <p>
          坦率地说，在上半年，我其实什么事情都没有做。工作也好、生活也罢，都只是在维持现状。
          <br />
          不过说是「维持现状」，精神状态却是在持续恶化。也正是因为如此，最终才选择了辞职。
        </p>
        <p>
          辞职之后，久违地放松了下来。工作只是其次，更重要的是不用背负与他人社交的压力了。
          <br />
          不会受到他人的影响，能够去做想做的事情——已经很久没有体验过这种感受了。
          <br />
          工作五年以来，许多没有精力做的事情，如今也可以提上日程了。
        </p>
        <p>
          感谢我的朋友们，陪我度过了这样难以形容的一年。
          <br />
          感谢我的公司，能够包容我任性的辞职选择。
          <br />
          还有那些曾经帮助过我的人们。谢谢你们。
        </p>
        <p>
          新的一年，希望疫情能够得到控制。
          <br />
          希望能找到新的工作，希望能去更多的地方旅行。
          <br />
          希望能静下心来读几本书、看几部电影，希望能认识更多的朋友。
          <br />
          希望所有人都能被世界以温柔相待。
        </p>
        <p>二零二一年元月一日，写于北京。</p>
      </Typography>
    </Page>
  );
};

export { TwentyTwentyPage };
