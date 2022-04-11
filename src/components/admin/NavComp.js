import React from 'react'
import styled from "styled-components"
import {NavLink} from "react-router-dom"

const NavComp = () => {
    return (
        <Left>
        <LeftItems>
            <Navs to="/agteenadmin/addevent">ADD EVENT</Navs>
            <Navs to="/agteenadmin/addblog">ADD BLOG</Navs>
            <Navs to="/agteenadmin/addleader">ADD LEADERS</Navs>
            <Navs to="/agteenadmin/addimage">ADD IMAGES</Navs>
            <Navs to="/agteenadmin/addvideo">ADD VIDEOS</Navs>
            <Navs to="/agteenadmin/viewevent">EVENTS</Navs>
            <Navs to="/agteenadmin/viewblog">BLOGS</Navs>
            <Navs to="/agteenadmin/viewleader">LEADERS</Navs>
            <Navs to="/agteenadmin/viewimage">IMAGES</Navs>
            <Navs to="/agteenadmin/viewvideo">VIDEOS</Navs>
        </LeftItems>
    </Left>
    )
}

export default NavComp

const Navs = styled(NavLink)`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
background-color: whitesmoke;
height: 40px;
font-weight: bold;
font-family: arial;
cursor: pointer;
margin: 10px 0;
color: black;
:hover{
    background-color: red;
}
`
const LeftItems = styled.div`
width: 85%;
display: flex;
margin-top: 90px;
flex-direction: column;
align-items: center;
`

const Left = styled.div`
min-height: 100vh;
height: 100%;
width: 25%;
display: flex;
flex-direction: column;
background-color:#0E0E10;
position: sticky;
align-items: center;
z-index: 10;
@media screen and (max-width: 960px){
    display: none;
}
`
