import React from "react";
import {
  likePng128,
  lovePng128,
  carePng128,
  hahaPng128,
  wowPng128,
  sadPng128,
  angryPng128,
} from "@toannb/assets/reactions-emoticons/png-128";
function PostEmoji() {
  return (
    <div className="post__emoji">
      <div className="emoji__like emoji__image-container">
        <img src={likePng128} alt="reaction like icon" loading="lazy" />
      </div>
      <div className="emoji__love emoji__image-container">
        <img src={lovePng128} alt="reaction love icon" loading="lazy" />
      </div>
      <div className="emoji__care emoji__image-container">
        <img src={carePng128} alt="reaction care icon" loading="lazy" />
      </div>
      <div className="emoji__haha emoji__image-container">
        <img src={hahaPng128} alt="reaction haha icon" loading="lazy" />
      </div>
      <div className="emoji__wow emoji__image-container">
        <img src={wowPng128} alt="reaction wow icon" loading="lazy" />
      </div>
      <div className="emoji__sad emoji__image-container">
        <img src={sadPng128} alt="reaction sad icon" loading="lazy" />
      </div>
      <div className="emoji__angry emoji__image-container">
        <img src={angryPng128} alt="reaction angry icon" loading="lazy" />
      </div>
    </div>
  );
}

export { PostEmoji };
