import styled from "styled-components";

const StyledMain = styled.main`
  position: relative;
  min-height: 100vh;
`;

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  transform: translate(50%, 50%);
  right: 50%;
  bottom: 50%;
  background-color: hsl(0, 0%, 100%);
  border-radius: 20px;
  margin: 0 auto;
  padding: 15px;
  overflow: hidden;
  max-width: 300px;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 5px;
`;

const StyledImage = styled.img`
  border-radius: 10px;
`;

const StyledHeading = styled.h2`
  font-size: 20px;
`;

const StyledParagraph = styled.p`
  font-size: 15px;
`;

const StyledDisclaimer = styled.p`
  font-size: 9px;
`;

function App() {
  return (
    <StyledMain>
      <StyledCardContainer>
        <StyledImage src="../public/image-qr-code.png" alt="Qr Code Image" />
        <StyledContent>
          <StyledHeading>
            Improve your front-end skills by building projects
          </StyledHeading>
          <StyledParagraph>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </StyledParagraph>
        </StyledContent>
        <StyledDisclaimer>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io/?ref=challenge"
            target="_blank"
            rel="noopener"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.byjeff.dev/" target="_blank" rel="noopener">
            Jeffrey Equipaje
          </a>
          .
        </StyledDisclaimer>
      </StyledCardContainer>
    </StyledMain>
  );
}

export default App;
