import styled from 'styled-components';

export const StyledSpan = styled.span`
    display: block;
    margin-right: 10px;
    padding: 6px;
    border-radius: 50%;
    background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const StyledListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    width: 175px;
    border: .5px solid #D3D3D3;
    box-shadow: 1px 1px 2px 1px #D3D3D3;
    padding: 5px 10px;

.avatar {
    border: .5px solid #D3D3D3;
    border-radius: 5px;
    margin-right: 10px;
}
`;