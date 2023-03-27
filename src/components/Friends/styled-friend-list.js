import styled from 'styled-components';

export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 200px;
    max-width: 300px;
`;

export const StyledSpan = styled.span`
    margin-right: 10px;
    padding: 6px;
    border-radius: 50%;
    background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const StyledListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    border: .5px solid #D3D3D3;
    box-shadow: 1px 1px 2px 1px #D3D3D3;
    padding: 5px 10px;
    font-family: Arial, Tahoma, Verdana, sans-serif;

.avatar {
    border: .5px solid #D3D3D3;
    border-radius: 5px;
    margin-right: 10px;
}

.name {
    font-family: Arial, sans-serif;
}
`;