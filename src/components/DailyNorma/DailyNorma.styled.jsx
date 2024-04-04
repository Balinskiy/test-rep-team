import styled from "styled-components";


export const MyDailyNormaContainer = styled.div`
    width: 164px;
    height: 74px;
    padding: 8px 20px 8px 20px;
    margin-bottom: 8px;
    border-radius: 10px;
    border: 1px solid var(--background-tracker);
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow: 0px 4px 8px 4px rgba(158, 187, 255, 0.12);

    @media screen and (min-width: 768px) {
        height: 76px;
    }
    @media screen and (min-width: 1140px) {
        margin-top: 30px;
    }
`;

export const Title = styled.p`
    font-size: 18px;
    color: var(--text);
    font-weight: 500;
    line-height: 1.3;
    width: 124px;
`;

export const WaterNormaContainer = styled.div`
    display: flex;
    gap: 12px;
`;

export const WaterNorma = styled.p`
    font-size: 22px;
    font-weight: 700;
    color: var(--text-blue);
    line-height: 1;

    @media screen and (min-width: 768px) {
        font-size: 24px;
    }
`;

export const DailyNormaBtn = styled.button`
    font-size: 16px;
    line-height: 1.25;
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: var(--text-passowrd);

     &:hover {
        color: var(--orange-color);
    }
`

