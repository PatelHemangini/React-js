import React from 'react';
import styled from 'styled-components';
import Header from "./Component/Header"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  background-color: #333;
  color: white;
  padding: 20px;
  width: 100%;
`;

const Title = styled.h1`
  margin: 0;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  width: 100%;
`;

const ProductCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductTitle = styled.h2`












  margin: 10px 0;
`;

const ProductPrice = styled.p`
  margin: 0;
`;

const HomePage = () => {
  return (
  <>
  <Header/>
    <Container>
      <Header>
        <Title>Shopping Site</Title>
      </Header>
      <ProductGrid>
        <ProductCard>
          <ProductImage src="https://via.placeholder.com/150" alt="Product 1" />
          <ProductTitle>Product 1</ProductTitle>
          <ProductPrice>$20</ProductPrice>
        </ProductCard>
        <ProductCard>
          <ProductImage src="https://via.placeholder.com/150" alt="Product 2" />
          <ProductTitle>Product 2</ProductTitle>
          <ProductPrice>$30</ProductPrice>
        </ProductCard>
        {/* Add more ProductCards as needed */}
      </ProductGrid>
    </Container>
    </>
  );
};

export default HomePage;
