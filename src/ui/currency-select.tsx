import styled from "styled-components";
import dailyRates from "../data/denni_kurz.csv";

type Props = {
  defaultValue?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const StyledSelect = styled.select`
  border: 0;
  outline: 0;
  font-size: 1.5rem;
`;

const StyledSelectContainer = styled.div`
  display: inline-flex;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 0;
    height: 2px;
    left: 50%;
    transform: translate(-50%);
    transition: width 0.2s ease-in-out;
    background: black;
    z-index: 2;
  }

  &:focus-within::before {
    width: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.gray["500"]};
  }
`;

export function CurrencySelect({ defaultValue, value, onChange }: Props) {
  return (
    <StyledSelectContainer>
      <StyledSelect
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
      >
        {dailyRates.map((rate) => (
          <option key={rate["kód"]}>{rate["kód"]}</option>
        ))}
      </StyledSelect>
    </StyledSelectContainer>
  );
}
