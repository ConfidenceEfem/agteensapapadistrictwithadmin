import React from 'react'
import styled from "styled-components"
import logo from "../images/logo.png"
import avatar from "../images/avatar.png"
import AdminHeader from './AdminHeader'
const AddEvent = () => {
    const [hour, setHour] = React.useState(0)
    const [min, setMin] = React.useState(0)
    const [day, setDay] = React.useState(0)
    return (
       <Container>
            <Right>
        <AdminHeader/>
    <NavName>Edit Event</NavName>
        <EventImage src={avatar}/>
        <Upload htmlFor="pix">Upload Image</Upload>
        <input type="file" id="pix" style={{display: "none"}}/>
        <Inputs placeholder="Enter event title"/>
        <Inputs placeholder="Enter event registration link"/>
        <TimeAndCountHolder>
           <TextAndInput ml="0px">
               <Label>Event Time</Label>
                <Hour type="Number"
                value={hour}
                onChange={(e)=>{
                    if(hour>=9 || hour==-1){
                        setHour(0)
                    }else{
                        setHour(e.target.value)
                    }    
                }}
               /> <span>:</span> <Min type="Number"
               value={min}
                onChange={(e)=>{
                    if(min>=60){
                        setMin(0)
                    }else{
                        setMin(e.target.value)
                    }    
                }}
                />
           </TextAndInput>
           <TextAndInput ml="15px">
               <Label>Days to Go</Label>
               <Days type="Number"
               value={day}
               onChange={(e)=>{
                       setDay(e.target.value)
               }}
               />
           </TextAndInput>
        </TimeAndCountHolder>
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
margin-top: 14px;
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
const Min = styled.input`
width: 90px; 
/* @media screen and (max-width: 500px){
    width: 120px;
} */
@media screen and (max-width: 500px){
    width: 60px;
}
`
const Hour = styled.input`
width: 90px; 
/* @media screen and (max-width: 500px){
    width: 120px;
} */
@media screen and (max-width: 500px){
    width: 60px;
}
`
const Label = styled.div`
font-weight: bold;
font-size: 13px;
margin-bottom: 5px;
@media screen and (max-width: 500px){
    font-size: 10px;
}
`
const TextAndInput = styled.div`
margin: 0 20px;
span{
    font-weight: bold;
}
@media screen and (max-width: 500px){
   margin-left: ${({ml})=>ml};
}
`
const TimeAndCountHolder = styled.div`
display: flex;
width: 600px;
justify-content: center;
margin-top: 5px;
@media screen and (max-width: 500px){
    width: 90%;
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
width: 700px;
height: 330px;
object-fit: cover;
border: solid 2px #0E0E10;
margin-bottom: 20px;
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
