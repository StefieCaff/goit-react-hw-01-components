import styled from 'styled-components';

export const StyledTable = styled.table`
    border: 1px solid #DFEFF4;
    border-collapse: collapse;
    text-align: center;
    padding: 10px 70px;
    font-family: Courier New, Tahoma, Verdana, sans-serif;
    font-size: 14px;
    box-shadow: 0px 2px #D3D3D3;

    .transaction-header {
        border: 1px solid #DFEFF4;
        padding: 10px 70px;
        font-size: 16px;
        text-transform: uppercase;
        background-color: #007ba7;
        color: whitesmoke;
    }

     .transaction-data {
        border: 1px solid #BFDEE9;
        font-size: 14px;
        min-width: 200px;
        padding: 10px;
        
    }

    .transaction-row {
        background-color: white-smoke;
    }

    .transaction-row:nth-child(even) {
        background-color: #DFEFF4}
`;