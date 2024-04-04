import styled from "styled-components"

const Btn = styled.button(({ width, buttonType }) => ({
  width: `${width}px`,

  color:
    buttonType === 'cancel'
      ? 'var(--text-blue)'
      : 'var(--background)',
  backgroundColor:
    buttonType === 'cancel'
      ? 'var( --button-pup-up)'
      : buttonType === 'delete'
      ? 'var(--coral-color)'
      : 'var(--text-blue)',
}));

export const ButtonContainer = styled(Btn)`
  cursor: pointer;
  border: none;
  padding: 10px 30px;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;

  &:hover,
  &:focus {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;