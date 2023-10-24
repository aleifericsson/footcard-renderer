import styled from 'styled-components';

const PageName = styled.div`
    font-size: 24px;
    font-family: 'Chakra Petch';
    color:white;
    background-color:#2A7F62;
    @media screen and (max-width: 800px) {
        font-size:16px;
    }
`

const Title = styled.div`
    font-size:32px;
    font-family: 'Chakra Petch';
    color:white;
    background-color:#2A7F62;
    @media screen and (max-width: 800px) {
        font-size:24px;
    }

`

const Text = styled.div`
    font-size:18px;
    font-family: 'Lato';
    color:black;
    @media screen and (max-width: 800px) {
        font-size:12px;
    }

`
const Textalt = styled.div`
font-size:18px;
font-family: 'Lato';
color:white;
font-weight:600;
@media screen and (max-width: 800px) {
    font-size:12px;
}
`

export {PageName,Title,Text,Textalt};