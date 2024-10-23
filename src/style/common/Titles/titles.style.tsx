import styled from 'styled-components';

export const TitlePrimary = styled.h1<{ $color?: string }>`
  font-size: 4em;
  font-weight: 700;
  line-height: 1.4em;
  color: var(${props => props.$color ? props.$color : '#000'});
`
export const TitleSecondary = styled.h2<{ $color?: string }>`
  font-size: 2em;
  line-height: 1em;
  font-weight: 400;
  color: var(${props => props.$color ? props.$color : '#000'});
`

export const TitleTertiary = styled.h3<{ $fontSize?: string, $color?: string }>`
  font-size: ${props => props.$fontSize ? props.$fontSize : '1.8em'};
  color: var(${props => props.$color ? props.$color : '#000'});
`
