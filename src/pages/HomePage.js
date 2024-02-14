import QuotesList from "../components/QuotesList";
import styled from 'styled-components';

const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; 
  background-image: url(${`https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42589.jpg?w=1380&t=st=1707903310~exp=1707903910~hmac=c616064ac9d40730ea766a1f742173355d9b7b970fced8ed351eeb646a7bfcb0`}); 
  background-size: cover;
  filter: grayscale(100%);
 filter: brightness(0.5);
position: relative;
`;
const Overlay = styled.div`
  position: absolute;
  down: 0;
right: 5;
  width: 55%;
  height: 30%;
 background-color: rgba(174, 209, 181, 0.8);
  filter: brightness(0.7); /* Adjust the value for desired brightness */
`;

const CenterText = styled.div`
  text-align: center;
  color: white
  z-index: 1;
 
  
  
`;



function HomePage() {
    return (
        <>
        <div>

      
             
             <CenterContainer>
            <Overlay />
            <CenterText>
             <h1>Just For the Health of it!</h1>
             <p> Record your meals and stay consistent in your journey</p>
           </CenterText>
          </CenterContainer>
       </div>

       
        
            <footer>
            <QuotesList />
            </footer></>
    );
}


export default HomePage