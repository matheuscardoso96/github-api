import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #ccc;
    margin: 16px 16px;
    width: 350px;
    height: 150px;
    align-content: center;
`;

export const WrapperTitle = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin: 8px 0;
`;

export const WrapperFullName = styled.h4`
    font-size: 18px;
    font-weight: bold;
    margin: 8px 0;
    padding-right: 10px;
    color: #2d3748;
`;

export const WrapperLink = styled.a`
    font-size: 18px;
    font-weight: bold;
    margin: 8px 0;
    color: #3182CE;
    &:hover{
        cursor: pointer;
    }
`;

export const WrapperLanguage = styled.div`
    display: flex;
    h3, div{
       font-size: 18px;
       font-weight: bold;
    }

    div{
        margin-left: 8px;
    }
    
`;

export const WrapperStars = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin: 8px 0;
`;

export const WrapperLinkAndRepo = styled.div`
    display: flex;
`;