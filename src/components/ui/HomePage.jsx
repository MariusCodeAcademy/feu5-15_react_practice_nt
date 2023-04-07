import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import PropertyCard from './PropertyCard';

const filterButtons = [
  { label: 'All', value: 'all' },
  { label: 'Kaunas', value: 'kaunas' },
  { label: 'Vilnius', value: 'vilnius' },
  { label: 'Klaipeda', value: 'klaipeda' },
];

function HomePage() {
  // State for filter button active status
  const [activeFilter, setActiveFilter] = useState('all');

  // State for property data
  const [properties, setProperties] = useState([]);

  // Fetch property data from API on component mount
  useEffect(() => {
    fetch('https://robust-safe-crafter.glitch.me/')
      .then((response) => response.json())
      .then((data) => setProperties(data));
  }, []);

  // Function to handle filter button click
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    // Your JSX code for the HomePage component
    <div>
      <Header>
        <Title>Property list</Title>
        <Subtitle>See all the houses you want</Subtitle>
      </Header>

      <Filter>
        {filterButtons.map((button) => (
          <FilterButton
            key={button.value}
            active={activeFilter === button.value}
            onClick={() => handleFilterClick(button.value)}
          >
            {button.label}
          </FilterButton>
        ))}
      </Filter>

      <AddPropertyLink to="/add-property">Add Property</AddPropertyLink>

      <PropertyCards>
        {properties
          .filter((property) => {
            if (activeFilter === 'all') return true;
            return property.city.toLowerCase() === activeFilter;
          })
          .map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
      </PropertyCards>

      <Footer>Your footer content</Footer>
    </div>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
`;

const Filter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 500;
  background-color: ${({ active }) => (active ? '#000' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  border: 2px solid #000;
  border-radius: 2rem;
  margin-right: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const PropertyCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const AddPropertyLink = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 500;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 2rem;
  margin-bottom: 2rem;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background-color: #f7f7f7;
  color: #000;
  font-size: 1.2rem;
  font-weight: 500;
`;

export default HomePage;
