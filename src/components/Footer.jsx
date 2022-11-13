import styled from "styled-components";
import "../index.css";

const FooterContainer = styled.footer`
  margin-top: 3rem;
  background-color: var(--second-color);
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  align-items:center;
  gap:5rem;
  padding:3rem;
  color:var(--primal-color);

  img {
    mix-blend-mode: screen;
    width:150px;
  }

  div:nth-child(1){
  text-align:center;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  
  & * {
margin:.5rem;
  }
  }

  div:nth-child(1){
  & * {
margin:.25rem;
  }

  .enlaces{
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  gap:.5rem;

  img{
  width:40px;
  }

a{
  color:var(--primal-color);
  text-decoration:none;
  font-weight:bold;
  }

  .enlace{
  display:flex;
  margin-top:2rem;
  flex-direction:row;
  align-items:center;
  padding:.5rem 1rem;
background-color:#24292d;
  gap:.5rem;
  border-radius:.5rem;
  color:whitesmoke;
  }

  }

  }
  }
  }
  }



@media (max-width:620px){
div:nth-child(1){
text-align:left;
}

.enlaces{
flex-direction:column;

.enlace{
margin:0 !important;
}
}



}

`;

const Footer = () => {
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
            <img src="../../public/circle.svg" alt="circle" />
            <p>Alan G. Alonso</p>
          </a>
          <a
            href="https://github.com/touzand"
            target="_blank"
            className="enlace"
          >
            <img src="../../public/github.svg" alt="github" />
            <p>Github</p>
          </a>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
