import { ReactCusdis } from "react-cusdis";
import { CUSDIS_APP_ID } from "../lib/config";
import s from "../styles/Manual.module.css";

type Props = {
  /** Cusdis page id — keep stable to preserve the existing thread. */
  pageId: string;
  pageTitle: string;
  pageUrl: string;
  prompt: string;
};

/** A Manual-styled comment board backed by the site's Cusdis instance. */
export const Discussion = ({ pageId, pageTitle, pageUrl, prompt }: Props) => (
  <div className={s.discussion}>
    <p className={s.discussionPrompt}>{prompt}</p>
    <ReactCusdis
      attrs={{
        host: "https://cusdis.com",
        appId: CUSDIS_APP_ID,
        pageId,
        pageTitle,
        pageUrl,
      }}
    />
  </div>
);
