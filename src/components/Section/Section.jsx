import { Section } from './styled-section';

export const StyledSection = ({ children }) => {
    return (
        <Section className="section">
            {children}
        </Section>
    );
};