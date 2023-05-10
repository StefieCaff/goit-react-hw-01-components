import styled from "styled-components";

export const StyledStatistics = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #D3D8E0;
    padding: 50px 30px;
    max-width: 300px;
    font-family: Arial Black, Arial;

    .title {
      font-size: 14px;
      text-transform: uppercase;
      background-color: white;
      text-align: center;
      padding: 15px 30px;
      min-width: 200px;
    }

    .stat-list {
        display: flex;
        flex-direction: row;
        font-size: 10px;
    }

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width 30px;
      padding: 10px;
    }

    .label {
      color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: .4px;
  -webkit-text-stroke-color: black;
      font-size: 8px;
      margin-bottom: 5px;
    }

    .percentage {
     color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: .4px;
  -webkit-text-stroke-color: black;
      font-size: 14px;
    }
`;