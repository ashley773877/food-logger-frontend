import QuotesList from "../components/QuotesList";
import styled from 'styled-components';

const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Set height to 100% of the viewport height */
`;

const CenterText = styled.div`
  text-align: center;
`;



function HomePage() {
    return (
        <><div>
            <CenterContainer>
             <CenterText>
            <h1>Just For the Health of it!</h1>
            <p> Record your fitness activites and stay consistent in your journey</p>
            </CenterText>
           </CenterContainer>

        </div>
        
            <footer>
            <QuotesList />
            </footer></>
    );
}


export default HomePage