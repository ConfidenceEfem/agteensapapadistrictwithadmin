import React from "react"
import styled from "styled-components"
import {NavLink} from "react-router-dom"
const MobileBar = ({toggle, setToggle})=>{
    const onToggle = ()=>{
        setToggle(!toggle)
    }
    return(
            <Container>
        <LeftItems>
            <Navs onClick={onToggle} to="/agteenadmin/addevent">ADD EVENT</Navs>
            <Navs onClick={onToggle} to="/agteenadmin/addblog">ADD BLOG</Navs>
            <Navs onClick={onToggle} to="/agteenadmin/addleader">ADD LEADERS</Navs>
            <Navs onClick={onToggle} to="/agteenadmin/addimage">ADD IMAGES</Navs>
            <Navs onClick={onToggle} to="/agteenadmin/addvideo">ADD VIDEOS</Navs>
            <Navs onClick={onToggle} to="/agteenadmin/viewevent">EVENTS</Navs>
            <Navs onClick={onToggle} to="/agteenadmin/viewblog">BLOGS</Navs>
            <Navs onClick={onToggle} to="/agteenadmin/viewleader">LEADERS</Navs>
            <Navs onClick={onToggle} to="/agteenadmin/viewimage">IMAGES</Navs>
            <Navs onClick={onToggle} to="/agteenadmin/viewvideo">VIDEOS</Navs>
        </LeftItems>
            </Container>
    )
}
export default MobileBar

const Container = styled.div`
width: 97%;
height: 60vh;
background-color:#0E0E10;
position: absolute;
top: 80px;
z-index:50;
display: flex;
justify-content: center;
overflow-y: scroll;
`
const Navs = styled(NavLink)`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
color: whitesmoke;
border-bottom: 2px solid whitesmoke;
padding: 10px 0;
text-decoration: none;
cursor: pointer;

`
const LeftItems = styled.div`
display: flex;
flex-direction: column;
width: 85%;
align-items: center; 
padding-bottom: 20px;
`
