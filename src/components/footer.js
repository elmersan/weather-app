import styled from "styled-components";
import configStyle from "../styles/configStyle";

export default function footer() {
  return (
    <FooterStyle>
      <p>
        created by <span>elmersan</span> - devChallenges.io
      </p>
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  padding-block: 2rem;
  text-align: center;
  p {
    color: ${configStyle.colors.Gray10};
    span {
      font-weight: 700;
    }
  }
`;
