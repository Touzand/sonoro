import { FooterContainer } from "./style";

const Footer = () => {
  const baseUrl = 'http://localhost:3000/sonoro/'

  return (
    <FooterContainer>
      <div>
        <h3>Would you like to see more?</h3>
        <p>If you are interested in seeing more projects like this, you can visit my <strong>portfolio</strong> or my <strong>github</strong></p>
        <div className="enlaces">
          <a
            href="https://touzand.github.io/portafolio"
            target="_blank"
            className="enlace"
          >
            <img src={`${baseUrl}circle.svg`} alt="circle" />
            <p>Alan G. Alonso</p>
          </a>
          <a
            href="https://github.com/touzand"
            target="_blank"
            className="enlace"
          >
            <img src={`${baseUrl}github.svg`} alt="github" />
            <p>Github</p>
          </a>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
