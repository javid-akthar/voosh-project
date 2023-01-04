import styled from 'styled-components';

const Page1Title = styled.div`
 
    display: flex;
    flex-direction: column;
    height: 100%;
    position: absolute;
    width: 100%;

    @media (min-width: 992px){
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

  
`;

export default Page1Title;
