import styled from "styled-components";
import { ReactComponent as CloseIcon } from "./icon/close.svg"

export const ModalContainer = styled.div`
    width: 256px;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
        width: 656px;
    }

    @media screen and (min-width: 1440px) {
        width: 544px;
    }
`;

export const ModalHeader = styled.div`
    margin-bottom: 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 26px;
    font-weight: 500;
    line-height: 1.23;
`;

export const CloseBtn = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
`

export const CloseSvg = styled(CloseIcon)`
    stroke: var(--text-blue);
    width: 24px;
    height: 24px;

    &:hover{
        stroke: var(--orange-color);
    }
`;

export const FormulasGender = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;

    margin-bottom: 12px;

    @media screen and (max-width: 767px) {
        flex-direction: column;
        align-items: start;
        gap: 16px;
    }
`;

export const GenderItem = styled.p`
    font-size: 16px;
    line-height: 1.25;
`;

export const FormulaSpan = styled.span`
    font-size: 18px;
    line-height: 1.33;

    color: var(--text-blue);

    margin-left: 4px;
`;

export const VolumeDescription = styled.p`
    font-size: 12px;
    line-height: 1.33;

    color: #8f8f8f;
    border-radius: 10px;
    border: 1px solid var(--button-pup-up);

    padding: 10px;
    margin-bottom: 24px;
`;

export const SpanStar = styled.span`
    color: var(--text-blue);
`;

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const FormTitle = styled.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;

    margin-bottom: 16px;
`;

export const Gender = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;

    label {
        display: flex;
        align-items: center;
        gap: 6px;

        font-size: 16px;
        line-height: 1.25;
    }

    input:checked {
        fill: var(--text-blue);
    }
`;

export const CheckWrapper = styled.div`
    input {
        display: none;
        & + span {
            display: inline-block;
            position: relative;
            padding-left: 20px;
            cursor: pointer;

            &:before {
                content: '';
                display: block;
                position: absolute;
                top: 1px;
                left: 0px;
                border-radius: 50%;
                margin-right: 5px;
                width: 14px;
                height: 14px;
                border: 1px solid var(--text-blue);
                background: var(--background);
            }

            &:after {
                content: '';
                display: block;
                width: 6px;
                height: 6px;
                background: var(--text-blue);
                position: absolute;
                border-radius: 50%;
                top: 5px;
                left: 4px;
                opacity: 0;
                transform: scale(0, 0);
                transition: all 0.2s cubic-bezier(0.64, 0.57, 0.67, 1.53);
            }
        }

        &:checked + span:after {
            opacity: 1;
            transform: scale(1, 1);
        }
    }
`;

export const Required = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;

export const LiterPerDay = styled.b`
    font-size: 18px;
    line-height: 1.33;
    color: var(--text-blue);
    display: flex;
    align-items: center;
`;

export const WrapperForButton = styled.div`
    margin-top: 8px;
    display: flex;
    justify-content: flex-end;

    @media screen and (min-width: 768px) {
        button {
            width: 160px;
            height: 44px;
        }
    }
`;

export const ErrorMessage = styled.p`
    color: red;
    font-size: 18px;
    /* animation: blink 1s infinite; */

    /* @keyframes blink {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    } */
`