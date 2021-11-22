import React from "react";
import * as S from "./styled";

const RepositoryItem = ({name, fullName, linkToRepo, language, stars }) =>{
    return (<S.Wrapper>
        <S.WrapperTitle>{name}</S.WrapperTitle>
        <S.WrapperLinkAndRepo>
        <S.WrapperFullName>Link:</S.WrapperFullName>
        <S.WrapperLink href={linkToRepo}
        target="_blank" rel='noreferrer'>{name}</S.WrapperLink>
        </S.WrapperLinkAndRepo>
        <S.WrapperLanguage><h3>Language: </h3> <div>{language}</div></S.WrapperLanguage>
        <S.WrapperStars>Stars: {stars}</S.WrapperStars>

    </S.Wrapper>);
}

export default RepositoryItem;