
import { useContext } from "react"
import { DailyNormaBtn, MyDailyNormaContainer, Title, WaterNorma, WaterNormaContainer } from "./DailyNorma.styled"
import { ModalContext } from "./DailyNormaModal/ModalProvider/ModalProvider"
import DailyNormaModal from "./DailyNormaModal/DailyNormaModal";


export const DailyNorma = () => {
    const toggleModal = useContext(ModalContext);

    
    const openDailyNormalModal = () => {
        toggleModal(<DailyNormaModal />);
    };
    

    return (
        <MyDailyNormaContainer>
            <Title>My daily norma</Title>
            <WaterNormaContainer>
                <WaterNorma>2.0 L</WaterNorma>
                <DailyNormaBtn onClick={openDailyNormalModal}>Edit</DailyNormaBtn>
            </WaterNormaContainer>
        </MyDailyNormaContainer>
    )
}