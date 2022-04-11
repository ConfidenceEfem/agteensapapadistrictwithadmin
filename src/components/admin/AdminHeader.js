import React from 'react'
import styled from "styled-components"
import logo from "../images/logo.png"
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import MobileBar from './MobileBar'

const AdminHeader = () => {
    const [toggle, setToggle] = React.useState(false)

    const onToggle = ()=>{
        setToggle(!toggle)
    }
    return (
        <Header>
        <HeaderItems>
            <MainIconHolder>
           {toggle?
           <IconHolder1 onClick={onToggle}/>
        :
            <IconHolder onClick={onToggle}/>
        }
            {toggle?
            <MobileBar toggle={toggle} setToggle={setToggle}/>: null}
            </MainIconHolder>
            <LogoHolder>
            <Logo src={logo}/>
            </LogoHolder>
            <Text>ADMIN DASHBOARD</Text>
        </HeaderItems>
    </Header>
    )
}

export default AdminHeader

const MainIconHolder = styled.div`
display: none;
@media screen and (max-width: 960px){
    display: flex;
    flex: 0;
}
`
const IconHolder1 = styled(AiOutlineClose)`
display: none;
@media screen and (max-width: 960px){
    display: flex;
font-size: 30px;
cursor: pointer;
}
@media screen and (max-width: 500px){
    display: flex;
    font-size: 19px;
}
`
const IconHolder = styled(AiOutlineMenu)`
display: none;
@media screen and (max-width: 960px){
    display: flex;
font-size: 30px;
cursor: pointer;
}
@media screen and (max-width: 500px){
    display: flex;
    font-size: 19px;
}
`

const LogoHolder = styled.div`
display: flex;
flex: 1;
margin-left: 30px;
display: flex;
align-items: center;
@media screen and (max-width: 960px){
    flex: 0;
    align-items: center;
}
@media screen and (max-width: 500px){
    flex: 0;
    align-items: center;
    /* justify-content: center; */
}
`
const Text = styled.div`
color: #0E0E10;
font-family: hobo std;
font-size: 30px;
font-weight: bold;
@media screen and (max-width: 960px){
    font-size: 25px;
}
@media screen and (max-width: 500px){
    font-size: 12px;
}
@media screen and (max-width: 320px){
    font-size: 8px;
}
@media screen and (max-width: 375px){
    font-size: 10px;
}

`
const Logo = styled.img`
@media screen and (max-width: 960px){
    display: flex;
    width: 150px;
    height: 60px;
    object-fit: contain;
}
@media screen and (max-width: 500px){
    width: 100px;
    height: 40px;
}
@media screen and (max-width:320px){
    width: 80px;
}
`
const HeaderItems = styled.div`
display: flex;
align-items: center;
width: 95%;
@media screen and (max-width: 960px){
    justify-content: space-between;
}
`
const Header = styled.div`
width: 100%;
display: flex;
height: 80px;
box-shadow: 1px 1px 3px 1px lightgray;
margin-bottom: 0px;
position: relative;
z-index: 900;
@media screen and (max-width: 960px){
    justify-content: center;
}
@media screen and (max-width: 500px){
    height: 80px;
    /* background-color: blue; */
}

/* justify-content: center; */
`
