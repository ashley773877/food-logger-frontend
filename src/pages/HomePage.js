// import { Container } from "react-bootstrap";
import QuotesList from "../components/QuotesList";
import styled from 'styled-components';
import backgroundImg from '../images/HomePage.jpeg'

const CenterContainer = styled.div`
background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white; 
`
const Overlay = styled.div`
  position: absolute;
  down: 0;
right: 5;
  width: 55%;
  height: 30%;
 background-color: rgba(174, 209, 181, 0.4);
  filter: brightness(0.7); /* Adjust the value for desired brightness */
`;

const CenterText = styled.div`
  text-align: center;
  color: white
  z-index: 1;

 `;
 const StyledText = styled.p`
  color: White;
  `

function HomePage() {
    return (
        <>
        <div>
             <CenterContainer>
  
           
            <CenterText>
            <Overlay style={{position: 'absolute', height:'110%', width:'2%', top: '10%', left:'4%' }}/>
              <StyledText style={{fontSize:'50px',fontWeight:'800'}}>Just For the Health of it!</StyledText>
            
             <StyledText style={{fontSize:'20px'}}> Record your meals and stay consistent in your journey</StyledText>
             <Overlay style={{position: 'absolute', width:'80%', top: '50%', right:'.1%' }}/>
           </CenterText>
           
          </CenterContainer>
        
       </div>

       
        
            <footer style={{backgroundColor:'#415846', color:'white', fontSize:'5px'}}>
            <QuotesList />
            </footer></>
    );
}


export default HomePage