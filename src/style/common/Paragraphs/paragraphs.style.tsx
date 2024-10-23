import styled from 'styled-components';

export const Span = styled.span<{ $italic?: boolean, $bold?: boolean, $color?: string, $fontSize?: string }>`
  font-size: 1em;  
  font-weight: ${props => props.$bold ? 600 : 'normal'};
  font-style: ${props => props.$italic ? 'italic' : 'normal'};
  color: var(${props => props.$color ? props.$color : '#000'});
`

export const Paragraph = styled.p<{ $color?: string, $fontSize?: string }>`
  font-size: ${props => props.$fontSize ? props.$fontSize : '1.6em'};
  line-height: 1.4em;
  color: var(${props => props.$color ? props.$color : '#000'});
`