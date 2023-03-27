import { Container } from './styled-container';

export const StyledContainer = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
};