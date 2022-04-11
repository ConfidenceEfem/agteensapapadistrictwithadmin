import React from 'react'
import styled from "styled-components"
import avatar from "../images/avatar.png"
import AdminHeader from './AdminHeader'
import {app} from "../../base"
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import firebase from "firebase"
import LinearProgress from '@mui/material/LinearProgress';
import NavComp from "./NavComp"

const AddEvent = () => {
    const [percent, setPercent] = React.useState(0)

    const [photo, setPhoto] = React.useState(avatar)
    const [image, setImage] = React.useState("")

    const schema = yup.object().shape({
        name: yup.string().required(),
        topic: yup.string().required(),
        desc: yup.string().required(),
        content: yup.string().required(),
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
        const {name, topic, desc, content} = val

        await app.firestore().collection("blogs").add({
                author: name,
                content: content,
                desc: desc,
                heading: topic,
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
    <NavName>Add Blog</NavName>
        <EventImage src={photo}/> {percent>0 && percent<99.9999? <LinearProgress variant="determinate" value={Math.floor(percent)} style={{width: "300px", height: "4px", marginBottom: "20px"}}/>: null}

        <Upload htmlFor="pix">Upload Image</Upload>
        <input type="file" id="pix" style={{display: "none"}} onChange={upload}/>
        <Error><span>{errors?.name?.message}</span></Error>
        <Inputs placeholder="Enter Author Name"
        {...register("name")}
        />
        <Error><span>{errors?.topic?.message}</span></Error>
        <Inputs placeholder="Enter Topic"
        {...register("topic")}/>
        <Error><span>{errors?.desc?.message}</span></Error>
        <Inputs2 placeholder="Enter Description"
        {...register("desc")}/>
        <Error><span>{errors?.content?.message}</span></Error>
        <Inputs1 placeholder="Enter Contents"
        {...register("content")}/>
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
margin-top: 10px;
font-size: 14px;
background-color:#0E0E10;
transform: scale(1);
transition: all 350ms;
outline: none;
border: none;
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
width: 300px;
height: 200px;
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
