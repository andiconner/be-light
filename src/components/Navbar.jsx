
import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";



const Container = styled.div`
  height: 100px;
  background-color: #;
  
}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

`;

const Input = styled.input`
  border: none;
 
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  
`;

const Logo = styled.h1`
  
  
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
 
  
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  
  
`;



const Navbar = () => {
    

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>
                        <a href="/">
                            <img src={logo} className="" style={{ width: "45%" }} alt="logo" />
                        </a>
                    </Logo>
                </Left>
                <Center>

                    <SearchContainer>
                        
                    </SearchContainer>
                </Center>
                <Right>
                    <MenuItem>
                        
                    </MenuItem>
                    <MenuItem>
                                
                    </MenuItem>
                    <MenuItem>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};


export default Navbar