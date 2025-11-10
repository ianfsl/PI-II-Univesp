import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const CityCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 2rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  object-fit: cover;
`;

export const Content = styled.div`
  flex: 1;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    color: #007bff;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
    margin-bottom: 1.5rem;
  }
`;

export const HotelButton = styled.a`
  display: inline-block;
  background: #16a34a;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background: #15803d;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;
