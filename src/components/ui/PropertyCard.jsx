import styled from 'styled-components';

function PropertyCard({ property }) {
  const { image, price, city, description } = property;

  return (
    <Card>
      <Image src={image} alt="" />
      <Details>
        <Price>${price}</Price>
        <Town>{city}</Town>
        <Description>{description}</Description>
      </Details>
    </Card>
  );
}

const Card = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Details = styled.div`
  padding: 1rem;
`;

const Price = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
`;

const Town = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 0 1rem 0;
`;

const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
`;
export default PropertyCard;
