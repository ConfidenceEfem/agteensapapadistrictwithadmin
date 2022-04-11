import React from 'react'
import styled from "styled-components"
import avatar from "../images/avatar.png"
import AdminHeader from './AdminHeader'
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import firebase from "firebase"
import {app} from "../../base"
import {useNavigate} from "react-router-dom"
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import NavComp from "./NavComp"
const AddEvent = () => {
    const navigate = useNavigate()
    const [hour, setHour] = React.useState(0)
    const [min, setMin] = React.useState(0)
    const [day, setDay] = React.useState(0)
    const [photo, setPhoto] = React.useState(avatar)
    const [image, setImage] = React.useState("")
    const [percent, setPercent] = React.useState(0)

    const schema = yup.object().shape({
        title: yup.string().required(),
        link: yup.string(),
        // hour: yup.number().required(),
        // min: yup.number().required(),
        // days: yup.number().required(),
    })


    const upload = async (e)=>{
        const file = e.target.files[0]
        const save = URL.createObjectURL(file)
        setPhoto(save)

        const fileRef = await app.storage().ref()
         const storageRef = fileRef.child("/img" + file.name).put(file)
         storageRef.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot)=>{
                const count = (snapshot.bytesTransferred/snapshot.totalBytes)*100
                console.log(count)
                setPercent(count)
         },(err)=>{
            console.log(err)
         },()=>{
             storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                 console.log(url)
                 setImage(url)
             })
         })
    }


    const {register, handleSubmit, formState:{errors}, reset} = useForm({resolver: yupResolver(schema)})

    const onsubmit = handleSubmit(async (val)=>{
        console.log(val)
        const {title, link} = val
        console.log(title, link, hour, min, day,image)

        await app.firestore().collection("events").add({
            title, 
            link, 
            image
        })



        reset()
        setHour(0)
        setMin(0)
        setDay(0)
        setPhoto(avatar)
        navigate("/agteenadmin/viewevent")
    })
    return (
        <MainContainer>
        <NavComp/>
       <Container>
            <Right onSubmit={onsubmit}>
        <AdminHeader/>
    <NavName>Add Event</NavName>
        <EventImage src={photo}/>

       {percent>0 && percent<99.9999? <LinearProgress variant="determinate" value={Math.floor(percent)} style={{width: "300px", height: "4px", marginBottom: "20px"}}/>: null}

        <Upload htmlFor="pix">Upload Image</Upload>
        <input type="file" id="pix" style={{display: "none"}} onChange={upload}/>
        <Error><span>{errors?.title?.message}</span></Error>
        <Inputs placeholder="Enter event title"
        {...register("title")}/>
                <Error><span>{errors?.link?.message}</span></Error>

        <Inputs placeholder="Enter event registration link"
        {...register("link")}/>
        <Submit type="submit">Submit</Submit>
    </Right>
       </Container>
       </MainContainer>
    )
}

export default AddEvent
const MainContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
`
const Error = styled.div`
font-size: 10px;
font-weight: bold;
color: red;
/* font-family: arial; */
display: flex;
width: 600px;
margin-bottom: 3px;
`

const Submit = styled.button`
width: 130px;
height: 35px;
display: flex;
justify-content:center;
align-items: center;
margin-top: 30px;
font-size: 14px;
background-color:#0E0E10;
border: none;
outline: none;
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
width: 680px;
height: 310px;
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


const Right = styled.form`
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
