import styled from 'styled-components';

export const TagStatus = styled.span<{ $status: 'pending' | 'done' }>`
  transform: translateY(-3px);
  font-size: 0.4em;
  line-height: 1em;
  margin-left: 0.5em;
  border: 0.1em solid;
  border-radius: 0.5em;
  padding: 0.5em;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 600;
  color: var(${props => props.$status === 'pending' ? '--color-error' : '--color-success'});
  border-color: var(${props => props.$status === 'pending' ? '--color-error' : '--color-success'});
`