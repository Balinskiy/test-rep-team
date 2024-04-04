import { useState } from 'react';
import {
  CrossbarBox,
  CrossbarBoxRange,
  CrossbarInput,
  CrossbarProcentSpan,
  CrossbarSpanMiddle,
  CrossbarSpanEnd,
  CrossbarSpanStart,
  CrossbarText,
  DarkOverlay,
  CrossbarButton,
} from './Crossbar.styled';
import CrossbarButtonIcon from './CrossbarIcons/CrossbarButtonIcon';
import CrossbarModal from './CrossbarModal';

const Crossbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [waterIntakePercentage, setWaterIntakePercentage] = useState(0);

  const handleSaveWaterAmount = (waterAmount) => {
    setWaterIntakePercentage(waterAmount);
  };

  // const waterIntakePercentage = 50;

  const handleCrossbarButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <CrossbarBox>
      {isModalOpen && <DarkOverlay onClick={closeModal} />}
      <CrossbarBoxRange>
        <CrossbarText>Today</CrossbarText>
        <CrossbarInput type="range" percentage={waterIntakePercentage} />
        <CrossbarProcentSpan>
          <CrossbarSpanStart>0%</CrossbarSpanStart>
          <CrossbarSpanMiddle id="WaterMark">
            {waterIntakePercentage}%
          </CrossbarSpanMiddle>
          <CrossbarSpanEnd>100%</CrossbarSpanEnd>
        </CrossbarProcentSpan>
      </CrossbarBoxRange>
      <CrossbarButton onClick={handleCrossbarButtonClick}>
        <CrossbarButtonIcon />
        Add Water
      </CrossbarButton>
      <CrossbarModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSaveWaterAmount}
      />
    </CrossbarBox>
  );
};

export default Crossbar;

// import { useState } from 'react';
// import {
//   CrossbarBox,
//   CrossbarBoxRange,
//   CrossbarInput,
//   CrossbarProcentSpan,
//   CrossbarSpanMiddle,
//   CrossbarSpanEnd,
//   CrossbarSpanStart,
//   CrossbarText,
//   DarkOverlay,
//   CrossbarButton,
// } from './Crossbar.styled';
// import CrossbarButtonIcon from './CrossbarIcons/CrossbarButtonIcon';
// import CrossbarModal from './CrossbarModal';

// const Crossbar = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const waterIntakePercentage = 50;

//   const handleCrossbarButtonClick = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <CrossbarBox>
//       {isModalOpen && <DarkOverlay onClick={closeModal} />}
//       <CrossbarBoxRange>
//         <CrossbarText>Today</CrossbarText>
//         <CrossbarInput type="range" percentage={waterIntakePercentage} />
//         <CrossbarProcentSpan>
//           <CrossbarSpanStart>0%</CrossbarSpanStart>
//           <CrossbarSpanMiddle id="WaterMark">
//             {waterIntakePercentage}%
//           </CrossbarSpanMiddle>
//           <CrossbarSpanEnd>100%</CrossbarSpanEnd>
//         </CrossbarProcentSpan>
//       </CrossbarBoxRange>
//       <CrossbarButton onClick={handleCrossbarButtonClick}>
//         <CrossbarButtonIcon />
//         Add Water
//       </CrossbarButton>
//       <CrossbarModal isOpen={isModalOpen} onClose={closeModal} />
//     </CrossbarBox>
//   );
// };

// export default Crossbar;
