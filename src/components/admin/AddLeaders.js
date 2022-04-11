import React from 'react'
import styled from "styled-components"
import logo from "../images/logo.png"
import avatar from "../images/avatar.png"
import AdminHeader from './AdminHeader'
import {app} from "../../base"
import firebase from "firebase"
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import LinearProgress from '@mui/material/LinearProgress';
import NavComp from "./NavComp"
const AddEvent = () => {
    const [photo, setPhoto] = React.useState(avatar)
    const [image, setImage] = React.useState("")
    const [percent, setPercent]= React.useState(0)

    const schema = yup.object().shape({
        name: yup.string().required(),
        position: yup.string().required(),
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
                setPercent(0)
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
        const {name, position} = val
      

        await app.firestore().collection("leaders").add({
         name: name, 
         position: position,
         image: image,
        })


        reset()
        setPhoto(avatar)
    })

    return (
        <MainContainer>
        <NavComp/>
       <Container>
            <Right onSubmit={onsubmit}>
        <AdminHeader/>
    <NavName>Add Leaders</NavName>
        <EventImage src={photo}/>
        {percent>0 && percent<99.9999? <LinearProgress variant="determinate" value={Math.floor(percent)} style={{width: "300px", height: "4px", marginBottom: "20px"}}/>: null}
        <Upload htmlFor="pix">Upload Image</Upload>
        <input type="file" id="pix" style={{display: "none"}} onChange={upload}/>
        <Error><span>{errors?.name?.message}</span></Error>
        <Inputs placeholder="Enter Name"
        {...register("name")}/>
          <Error><span>{errors?.position?.message}</span></Error>
        <Inputs placeholder="Enter Position"
        {...register("position")}/>
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
width: 300px;
margin-bottom: 3px;
`

const Submit = styled.button`
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
border: none;
outline: none;
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
`



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
