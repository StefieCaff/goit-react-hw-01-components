import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #D3D8E0;
  color: #A8B2C1 ;
  font-size: 10px;
  padding: 30px 50px 50px 50px;

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 15px 35px 0 35px;
    border-radius-top: 4px;
  }

  .avatar {
    width: 50px;
    height: auto;
    background-color: #B9936F;
    border-radius: 50%;
    margin: 15px 0;
  }

  .name {
    font-weight: bold;
    color: black;
    font-size: 12px;
    margin-bottom: 7px;
  }

  .tag {
  margin-bottom: 3px;
  }

  .location {
    margin-bottom: 15px;
  }

  .stats-list {
    display: flex;
  }
  
  .stats-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 11px;
    background-color: #E9ECF0;
    border-radius-bottom: 4px;
  }
  
  .label {
     font-size: 9px;
     margin-bottom: 3px;
     color: #A8B2C1;
  }

  .quantity {
    color: black;
    font-weight: bold;
    font-size: 11px;

  }
`; 