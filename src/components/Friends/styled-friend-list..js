import styled from 'styled-components';

export const Span = styled.span`
background-color: ${props => props.backgroundColor || "red"};
padding: 1px 10px;
border-radius: 50%;
`