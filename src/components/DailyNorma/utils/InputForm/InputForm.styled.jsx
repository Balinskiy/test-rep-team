import styled from "styled-components";

export const Label = styled.label`
    font-size: 18px;
    line-height: 1.33;

    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Input = styled.input`
    width: 100%;

    padding: 12px 10px;

    font-size: 16px;
    line-height: 1.25;

    color: var(--text-blue);
    border-radius: 6px;
    border: 1px solid var(--button-pup-up);
    background-color: var(--backgroun);
    outline: none;

    &:focus {
        outline: 1px solid var(--button-pup-up);
    }

    &::placeholder {
        color: var(--text-passowrd);
    }
`;


export const ErrorMessage = styled.p`
    font-size: 14px;
    line-height: 1.28;
    color: var(--coral-color);
`;