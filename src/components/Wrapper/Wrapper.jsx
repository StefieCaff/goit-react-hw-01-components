import { Wrapper } from './styled-wrapper';

export const StyledWrapper = ({ children }) => {
    return (
        <Wrapper className="wrapper">
            {children}
        </Wrapper>
    );
};