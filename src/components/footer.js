import { FooterStyle } from "../styles/components";

export default function footer() {
  return (
    <FooterStyle>
      <p>
        created by{" "}
        <span>
          <a
            href="https://github.com/elmersan"
            target="_blank"
            rel="noreferrer"
          >
            elmersan
          </a>
        </span>{" "}
        - devChallenges.io
      </p>
    </FooterStyle>
  );
}
