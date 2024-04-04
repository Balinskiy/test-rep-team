import { useEffect, useState } from 'react';
import MinusSmallSolidIcon from './CrossbarIcons/MinusSmallSolidIcon';
import PlusSmallSolidIcon from './CrossbarIcons/PlusSmallSolidIcon';
import XMarkOutlineIcon from './CrossbarIcons/XMarkOutlineIcon';
import {
  AmountWaterBox,
  AmountWaterDecrementButton,
  AmountWaterIncrementButton,
  AmountWaterMlBox,
  AmountWaterMlDiv,
  AmountWaterTitle,
  ChooseValueSaveButton,
  ChooseValueSaveSpan,
  CrossbarAddWaterButton,
  CrossbarAddWaterDiv,
  CrossbarChooseValueDiv,
  CrossbarChooseValueSaveDiv,
  CrossbarRootDiv,
  EnterValueInput,
  EnterValueTitle,
  RecordingTimeInput,
  RecordingTimeTitle,
} from './CrossbarModal.styled';

const CrossbarModal = ({ isOpen, onClose, onSave }) => {
  const [waterAmount, setWaterAmount] = useState(0);
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  const incrementWaterAmount = () => {
    setWaterAmount((prevAmount) => prevAmount + 50);
  };

  const decrementWaterAmount = () => {
    if (waterAmount >= 50) {
      setWaterAmount((prevAmount) => prevAmount - 50);
    }
  };

  const handleSaveButtonClick = () => {
    onClose();
    onSave(waterAmount);
    setCurrentTime(getCurrentTime());
  };

  const handleEnterValueChange = (event) => {
    const newValue = parseInt(event.target.value);
    setWaterAmount(newValue);
  };

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  useEffect(() => {
    const handleEscKeyPress = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKeyPress);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <CrossbarRootDiv>
      <CrossbarAddWaterDiv>
        <h2>Add water</h2>
        <CrossbarAddWaterButton onClick={onClose}>
          <XMarkOutlineIcon />
        </CrossbarAddWaterButton>
      </CrossbarAddWaterDiv>
      <div>
        <CrossbarChooseValueDiv>
          <h3 style={{ marginBottom: '16px' }}>Choose a value:</h3>

          <div style={{ marginBottom: '24px' }}>
            <AmountWaterTitle>Amount of water:</AmountWaterTitle>
            <AmountWaterBox>
              <AmountWaterDecrementButton onClick={decrementWaterAmount}>
                <MinusSmallSolidIcon />
              </AmountWaterDecrementButton>
              <AmountWaterMlDiv>
                <AmountWaterMlBox>{waterAmount} ml</AmountWaterMlBox>
              </AmountWaterMlDiv>
              <AmountWaterIncrementButton onClick={incrementWaterAmount}>
                <PlusSmallSolidIcon />
              </AmountWaterIncrementButton>
            </AmountWaterBox>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <RecordingTimeTitle>Recording time:</RecordingTimeTitle>
            <RecordingTimeInput
              type="time"
              step={300}
              value={currentTime}
            ></RecordingTimeInput>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <EnterValueTitle>
              Enter the value of the water used:
            </EnterValueTitle>
            <EnterValueInput
              type="number"
              value={waterAmount}
              onChange={handleEnterValueChange}
            ></EnterValueInput>
          </div>

          <CrossbarChooseValueSaveDiv>
            <ChooseValueSaveSpan>{waterAmount} ml</ChooseValueSaveSpan>
            <ChooseValueSaveButton onClick={handleSaveButtonClick}>
              Save
            </ChooseValueSaveButton>
          </CrossbarChooseValueSaveDiv>
        </CrossbarChooseValueDiv>
      </div>
    </CrossbarRootDiv>
  );
};

export default CrossbarModal;
