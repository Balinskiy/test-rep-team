import {
    CheckWrapper,
    CloseBtn,
    CloseSvg,
    FormStyled,
    FormTitle,
    FormulaSpan,
    FormulasGender,
    Gender,
    GenderItem,
    LiterPerDay,
    ModalContainer,
    ModalHeader,
    Required,
    SpanStar,
    VolumeDescription,
    WrapperForButton,
    ErrorMessage
} from "./DailyNormaModal.styled";
import { useFormik } from "formik";
import { validationSchema } from "../utils/schemas/validationSchema";
import InputForm from '../utils/InputForm/InputForm';
import { useCallback, useContext, useEffect, useState } from "react";
import { ModalContext } from "./ModalProvider/ModalProvider";
import Modal from "../utils/Modal/Modal";
import SaveButton from "../utils/SaveButton/SaveButton";

const DailyNormaModal = () => {
    const toggleModal = useContext(ModalContext);

    const onClickModalClose = () => {
        toggleModal();
    };

    const [calculatedWaterAmount, setCalculatedWaterAmount] = useState(0);

    const calculateWaterAmount = useCallback(values => {
        const weightCoefficient = values.gender === 'female' ? 0.03 : 0.04;
        const timeCoefficient = values.gender === 'female' ? 0.4 : 0.6;
            const calculatedAmount = 
            values.weight * weightCoefficient +
            values.activityTime * timeCoefficient;
            setCalculatedWaterAmount(calculatedAmount.toFixed(1));
    }, []);


    const handleChangeInput = (e, fieldName) => {
        formik.handleChange(e);
        const inputText = e.target.value;
        let numericValue = parseFloat(inputText);
        if (isNaN(numericValue)) {
            numericValue = 0;
        }
        formik.setFieldValue(fieldName, numericValue)
    };
    
    const handleSubmit = async () => {
        let amountWater = formik.values.waterAmount * 1000;

        if (amountWater >= 0 && amountWater <= 20000) {
            window.alert("Daily norma successfully updated");
        } else {
            window.alert("The amount of water must be a positive number and no more than 20 liters");
        }
        formik.resetForm();
        toggleModal();
    };
    
    const formik = useFormik({
        initialValues: {
            gender: 'male',
            weight: 0,
            activityTime: 0,
            waterAmount: 0,
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
    });

    

    const handleFocus = (e) => {
            e.target.value = '';
        }



    useEffect(() => {
        calculateWaterAmount(formik.values);
        console.log(formik.values);
        console.log(formik.values.weight);
        console.log(formik.values.activityTime);
        console.log(formik.values.waterAmount);
    }, [calculateWaterAmount, formik.values]);


    


    return (
        <Modal onClose={toggleModal}>
            <ModalContainer>
                <>
                    <ModalHeader>
                        My daily norma
                        <CloseBtn onClick={onClickModalClose}>
                            <CloseSvg />
                        </CloseBtn>
                    </ModalHeader>
                
                    <FormulasGender>
                        <GenderItem>
                            For girl:
                            <FormulaSpan>V=(M*0,03) + (T*0,4)</FormulaSpan>
                        </GenderItem>
                        <GenderItem>
                            For man:
                            <FormulaSpan>V=(M*0,04) + (T*0,6)</FormulaSpan>
                        </GenderItem>
                    </FormulasGender>

                    <VolumeDescription><SpanStar>*</SpanStar> V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)</VolumeDescription>
                
                    <FormStyled>
                        <FormTitle>Calculate your rate:</FormTitle>

                        <Gender>
                            <CheckWrapper>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        onChange={() => formik.setFieldValue('gender', 'female')}
                                        checked={formik.values.gender === 'female'}
                                    />
                                    <span>For women</span>
                                </label>
                            </CheckWrapper>
                            <CheckWrapper>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        onChange={() => formik.setFieldValue('gender', 'male')}
                                        checked={formik.values.gender === 'male'}
                                    />
                                    <span>For men</span>
                                </label>
                            </CheckWrapper>
                        </Gender>

                        <InputForm
                            label="Your weight in kilograms:"
                            inputType="dailyNorma"
                            value={formik.values.weight}
                            onChange={e => handleChangeInput(e, 'weight')}
                            onFocus={e => handleFocus(e, 'weight')}
                            onBlur={formik.handleBlur}
                            name="weight"
                            type="number"
                            min="0"
                            step="0.1"
                            error={formik.touched.weight && formik.errors.weight}
                        />

                        <InputForm
                            label="The time of active participation in sports
                        or other activities with a high physical. load in hours:"
                            inputType="dailyNorma"
                            value={formik.values.activityTime}
                            onChange={e => handleChangeInput(e, 'activityTime')}
                            onFocus={e => handleFocus(e, 'activityTime')}
                            onBlur={formik.handleBlur}
                            name="activityTime"
                            type="number"
                            min="0"
                            step="0.1"
                            error={formik.touched.activityTime && formik.errors.activityTime}
                        />

                        <Required>
                            <>The required amount of water in liters per day:</>
                            <LiterPerDay>
                                {isNaN(calculatedWaterAmount) || calculatedWaterAmount < 0 ? (
                                    <ErrorMessage>Input data error</ErrorMessage>
                                ) : (
                                    `${calculatedWaterAmount} L`
                                )}
                                {/* {isNaN(calculatedWaterAmount)
                                    ? (<ErrorMessage>Input data error</ErrorMessage>)
                            : `${calculatedWaterAmount}`} */}
                            </LiterPerDay>
                        </Required>

                        <InputForm
                            label="Write down how much water you will drink:"
                            inputType="dailyNorma"
                            value={formik.values.waterAmount}
                            onChange={e => handleChangeInput(e, 'waterAmount')}
                            onFocus={e => handleFocus(e, 'waterAmount')}
                            onBlur={formik.handleBlur}
                            name="waterAmount"
                            type="number"
                            min="0"
                            max="20"
                            step="0.1"
                            error={formik.touched.waterAmount && formik.errors.waterAmount}
                        />

                        <WrapperForButton>
                            <SaveButton type="submit" onClick={handleSubmit} >
                                Save
                            </SaveButton>
                        </WrapperForButton>

                    </FormStyled>
                </>
            </ModalContainer>
        </Modal>
    );
};

export default DailyNormaModal;