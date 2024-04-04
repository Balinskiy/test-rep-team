import { ButtonContainer } from "./SaveButton.styled"

const SaveButton = ({ children, ...props }) => {
    return <ButtonContainer {...props}>{children}</ButtonContainer>
};

export default SaveButton;