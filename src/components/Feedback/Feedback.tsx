import { useState } from "react";

import Button from "components/Button/Button";

import {
  FeedbackWrapper,
  FeedbackContol,
  ButtonCountContainer,
  StyledCount,
} from "./styles";

import { FeedbackProps } from "./types";


function Feedback({
  like,
  dislike,
  onLike,
  onDislike,
  resetResults,
}: FeedbackProps) {
  return (
    <FeedbackWrapper>
      <FeedbackContol>
        <ButtonCountContainer>
          {/* <Button imgSrc={Like} name="Like" onClick={onLike} /> */}
          <Button name="Like" onClick={onLike} />
          <StyledCount>{like}</StyledCount>
        </ButtonCountContainer>
        <ButtonCountContainer>
          <Button name="Dislike" onClick={onDislike} />
          <StyledCount>{dislike}</StyledCount>
        </ButtonCountContainer>
      </FeedbackContol>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedbackWrapper>
  );
}

export default Feedback;
