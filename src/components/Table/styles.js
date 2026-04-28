import styled from 'styled-components';

export const Root = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 20px;
`;

export const Header = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 16px;
  text-align: left;
  color: #fff;
  background-color: #484848;
  border-bottom: 1px solid #cdcdcd;

  &:last-child {
    border-top-right-radius: 20px;
  }

  &:first-child {
    border-top-left-radius: 20px;
  }

  &:nth-child(1) {
    width: 60px;
  } /* imagem */

  &:nth-child(2) {
    width: 30%;
  } /* nome */

  &:nth-child(3) {
    width: 120px;
  } /* preço */

  &:nth-child(4) {
    width: 180px;
  } /* quantidade */

  &:nth-child(5) {
    width: 140px;
  } /* total */

  &:nth-child(6) {
    width: 100px;
  }
`;

export const Td = styled.td`
  padding: 16px;
  color: #484848;
  font-weight: 500;
  line-height: 115%;
`;

export const Body = styled.tbody``;
