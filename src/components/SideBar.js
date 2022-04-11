import React from "react"
import styled from "styled-components"
import {NavLink} from "react-router-dom"

const SideBar = ({toggle, setToggle})=>{

    return(
        <Container>
            <Wrapper>
                <NavsHolder>
                    <Navs to="/" active onClick={()=>{
                        setToggle(!toggle)
                    }}>Home</Navs>
                    <Navs to="/about" active onClick={()=>{
                        setToggle(!toggle)
                    }}>About Us</Navs>
                    <Navs to="/leaders" active onClick={()=>{
                        setToggle(!toggle)
                    }}>Our Leaders</Navs>
                    <Navs to="/blog" active onClick={()=>{
                        setToggle(!toggle)
                    }}>Blog</Navs>
                    <Navs to="/about"  onClick={()=>{
                        setToggle(!toggle)
                    }}>Donate</Navs>
                </NavsHolder>
            </Wrapper>
        </Container>
    )
}

export default SideBar

const Navs = styled(NavLink)`
width: 100%;
border-bottom: 2px solid gold;
color: black;
display: flex;
justify-content: center;
align-items: center;
font-size: 16px;
height: 60px;
font-family: arial;
text-decoration: none;
background-color: ${({bg})=>bg};
cursor: pointer;
:hover{
    background-color: rgb(255,215,0,0.8);
}
&.active{
    background-color: gold;
}
`
const NavsHolder = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
display: flex;
align-items: center;
`
const Container = styled.div`
display:none;

@media screen and (max-width: 950px){

width: 300px;
height: 450px;
position: absolute;
background-color: rgb(255,255,255,0.9);
backdrop-filter: blur(6px);
top: 0;
right: 0;
display: flex;
justify-content: center;
}
@media screen and (max-width: 650px){
    width: 270px;
}
@media screen and (max-width: 500px){
    width: 220px;
}

`
const Wrapper = styled.div`
width: 100%;
height: 83%;
margin-top: 80px;
display: flex;
justify-content: center;
`

