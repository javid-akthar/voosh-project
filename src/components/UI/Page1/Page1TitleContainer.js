import styled from 'styled-components';

const Page1TitleContainer = styled.div`
 
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: center;
    padding: 20vw 50px 0;

    @media (min-width: 992px){
    height: 100%;
    padding: 0 0 0 4vw;
    width: 50%;
}
  
`;

export default Page1TitleContainer;
