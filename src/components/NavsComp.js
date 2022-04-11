import React from 'react'
import styled from "styled-components"
import logo from "./images/logo.png"
import {NavLink} from "react-router-dom"
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import SideBar from './SideBar'
import {BrowserRouter, Routes, Route} from "react-router-dom"
const NavsComp = ({toggle,setToggle}) => {
    const onToggle = ()=>{
        setToggle(!toggle)
    }
    return (
        <Container>
            <Wrapper>
               <LogoHolder>
               <Logo src={logo}/>
               </LogoHolder>
                <NavBars>
                    <Navs to="/" active>Home</Navs>
                    <Navs to="/about" active>About Us</Navs>
                    <Navs to="/leaders" active>Our Leaders</Navs>
                    <Navs to="/blog" active>Blog</Navs>
                    {/* <Navs to="/about">Donate</Navs> */}
                </NavBars>
               
               
            {toggle?
                 <MediaIconC onClick={onToggle}>
                 <AiOutlineClose/>
             </MediaIconC>:
              <MediaIconM onClick={onToggle}>
              <AiOutlineMenu/>
          </MediaIconM>}
         {toggle?  <SideBar toggle={toggle} setToggle={setToggle}/>: null}
            </Wrapper>
        </Container>
    )
}

export default NavsComp
const MediaIconC = styled(AiOutlineClose)`
display: none;
@media screen and (max-width:950px){
    font-size: 30px;
    display: block;
    cursor: pointer;                                                       
    color: gold;
    z-index: 100;
}
`
const MediaIconM = styled(AiOutlineMenu)`
display: none;
@media screen and (max-width:950px){
    font-size: 30px;
    display: block;
    cursor: pointer;
    color: gold;
    z-index: 10;
}
`

const LogoHolder = styled.div`
display: flex;
flex: 1;
margin-left: 10px;
`
const Navs = styled(NavLink)`
margin: 0 15px;
display: flex;
color: gold;
justify-content: center;
align-items: center;
transition: all 350ms;
cursor: pointer;
text-decoration: none;
:hover{
color: white;
}
&.active{
    color: white;
}

`
const NavBars = styled.div`
display:flex;
font-size: 14px;
font-weight: bold;
@media screen and (max-width: 950px){
    display: none;
}
`
const Logo = styled.img`
width: 160px;
height: 45px;
object-fit: contain;
@media screen and (min-width: 300px) and (max-width: 350px){
    width: 120px;
}
`
const Container  = styled.div`
width: 100%;
height: 90px;
display: flex;
justify-content: center;
align-items: center;
background-color: transparent;
backdrop-filter: blur(3px);
color: white;
margin-bottom: 20px;
position: fixed;
z-index: 2;
/* margin-bottom: 200px;  */

`
const Wrapper  = styled.div`
width: 95%;
display: flex;
align-items: center;
position: relative;
`

