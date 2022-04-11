import React from 'react'
import styled from "styled-components"
import avatar from "../images/avatar.png"
import AdminHeader from './AdminHeader'
const AddEvent = () => {
   
    return (
       <Container>
            <Right>
        <AdminHeader/>
    <NavName>Edit Image</NavName>
        <EventImage src={avatar}/>
        <Upload htmlFor="pix">Upload Image</Upload>
        <input type="file" id="pix" accept="image/png, image/jpeg, image/jpg, image/gif" style={{display: "none"}}/>
        <Inputs placeholder="Enter Event" />
        <Submit>Submit Edit</Submit>
    </Right>
       </Container>
    )
}

export default AddEvent

const Submit = styled.div`
width: 130px;
height: 30px;
display: flex;
justify-content:center;
align-items: center;
margin-top: 18px;
font-size: 14px;
background-color:#0E0E10;
transform: scale(1);
transition: all 350ms;
cursor: pointer;
color: white;
font-family: Arial, Helvetica, sans-serif;
border-radius: 4px;
:hover{
    background-color: lightgray;
    transform: scale(0.9);
}
`

const Container = styled.div`
width: 100%;
min-height: 100vh;
height: 100%;
display: flex;
justify-content: flex-end;
position: absolute;
top: 0;
`

const NavName = styled.div`
font-size: 15px;
margin: 20px 0;
font-weight: bold;
@media screen and (max-width: 500px){
    margin-top: 40px;
}
`



// const RightItems = styled.div`
// flex-direction: column;
// height: 100%auto;
// display: flex;
// align-items: center;
// width: 90%;
// overflow-y: scroll;

// `
const Inputs = styled.input`
width: 400px;
height: 35px;
border: solid 2px #0E0E10;
outline: none;
margin-bottom: 10px;
@media screen and (max-width: 500px){
    width: 80%;
    height: 30px;
    margin-bottom: 20px;
    ::placeholder{
        font-size: 14px;
    }
}
`
const Upload = styled.label`
width: 250px; height: 40px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
background-color:#0E0E10;
color: white;
font-family: Arial, Helvetica, sans-serif;
font-size: 18px;
letter-spacing: 0.3px;
transition: all 350ms;
transform: scale(1);
margin-bottom: 30px;
:hover{
    transform: scale(1.02);
    cursor: pointer;
}
@media screen and (max-width: 500px){
    width: 200px;
    height: 45px;
    font-size: 13px;
}
`
const EventImage = styled.img`
width: 250px;
height: 200px;
object-fit: cover;
border: solid 2px #0E0E10;
margin-bottom: 20px;
@media screen and (max-width: 500px){
    width: 200px;
    height: 150px;
    margin-bottom: 10px;
}
@media screen and (max-width: 375px){
    margin-bottom: 20px;
}

`



const Right = styled.div`
width: 75%;
min-height: 100vh;
height: 100%;
display: flex;
flex-direction: column;
background-color: #eee;
align-items: center;
position: relative;
@media screen and (max-width: 960px){
    width: 100%;
    margin-bottom: 0px;
}

`
