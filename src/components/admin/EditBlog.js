import React from 'react'
import styled from "styled-components"
import avatar from "../images/avatar.png"
import AdminHeader from './AdminHeader'
import {app} from "../../base"
import * as yup from "yup"
import {useForm} from "react-hook-form"

const AddEvent = () => {
    return (
       <Container>
            <Right>
        <AdminHeader/>
    <NavName>Edit Blog</NavName>
        <EventImage src={avatar}/>
        <Upload htmlFor="pix">Upload Image</Upload>
        <input type="file" id="pix" style={{display: "none"}}/>
        <Inputs placeholder="Enter Author Name"/>
        <Inputs placeholder="Enter Topic"/>
        <Inputs2 placeholder="Enter Description"/>
        <Inputs1 placeholder="Enter Contents"/>
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
margin-top: 10px;
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
margin: 15px 0;
font-weight: bold;
`

const Days = styled.input`
width: 100px;
@media screen and (max-width: 500px){
    width: 60px;
}
`

const Inputs = styled.input`
width: 600px;
height: 35px;
border: solid 2px #0E0E10;
outline: none;
margin-bottom: 10px;
@media screen and (max-width: 500px){
    width: 90%;
    margin-bottom: 20px;
    ::placeholder{
        font-size: 12px;
    }
}
`
const Inputs2 = styled.textarea`
width: 600px;
height: 35px;
border: solid 2px #0E0E10;
outline: none;
margin-bottom: 10px;
font-family:arial;


@media screen and (max-width: 500px){
    width: 90%;
    margin-bottom: 20px;
    ::placeholder{
        font-size: 12px;
    }
}
`
const Inputs1 = styled.textarea`
width: 600px;
height: 90px;
border: solid 2px #0E0E10;
outline: none;
margin-bottom: 10px;
font-family:arial;

@media screen and (max-width: 500px){
    width: 90%;
    margin-bottom: 20px;
    ::placeholder{
        font-size: 12px;
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
font-size: 16px;
letter-spacing: 0.3px;
transition: all 350ms;
transform: scale(1);
margin-bottom: 20px;
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
width: 340px;
height: 240px;
object-fit: cover;
border: solid 2px #0E0E10;
margin-bottom: 15px;
@media screen and (max-width: 500px){
    width: 90%;
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
