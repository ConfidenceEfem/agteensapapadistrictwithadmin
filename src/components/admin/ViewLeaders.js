import React from 'react'
import styled from "styled-components"
import avatar from "../images/avatar.png"
import AdminHeader from './AdminHeader'
import {app} from "../../base"
import {NavLink} from "react-router-dom"
import NavComp from "./NavComp"
const AddEvent = () => {
    const [data, setData] = React.useState([])

    const getData = async ()=>{
        await app
        .firestore()
        .collection("leaders")
        .onSnapshot((snapshot)=>{
            const store = []
            snapshot.forEach((doc)=>{
                store.push({...doc.data(), id: doc.id})
            })
            setData(store)
            
        })
    }

    React.useEffect(()=>{
        getData()
        console.log(data)
    },[])

    const DeleteItem = async (id)=>{
        await app.firestore().collection("leaders").doc(id).delete()
    }

    return (
        <MainContainer>
        <NavComp/>
       <Container>
            <Right>
        <AdminHeader/>
    <NavName>View Leaders</NavName>
        <CardHolder>
            {data?.map((props)=>(
                <Card key={props.id}>
                <Image src={props.image}/>
                <Topic>
                    {props.name}
                </Topic>
                <Desc>{props.position}</Desc>
                <ButtonHolder>
                    <Button1 bg="gold" to="/editleader">Edit</Button1>
                    <Button bg="red" onClick={()=>{
                        DeleteItem(props.id)
                    }}>Delete</Button>
                </ButtonHolder>
            </Card>
            ))}
        </CardHolder>

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
const Button1 = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center;
width: 100px;
background-color: ${({bg})=>bg};
height: 33px;
border-radius: 3px;
color: white;
font-size: 14px;
cursor: pointer;
transform: scale(1);
transition: all 350ms;
text-decoration: none;
:hover{
    transform: scale(1.02);
    background-color: lightgray;
}
`
const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100px;
background-color: ${({bg})=>bg};
height: 33px;
border-radius: 3px;
color: white;
font-size: 14px;
cursor: pointer;
transform: scale(1);
transition: all 350ms;
:hover{
    transform: scale(1.02);
    background-color: lightgray;
}
`
const ButtonHolder = styled.div`
display: flex;
width: 90%;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
`
const Desc = styled.div`
width: 95%;
height: 10%;
/* background-color: red; */
font-size: 13px;
display: flex;
justify-content: center;
text-align: center;
margin-bottom: 7px;
`
const Topic = styled.div`
width: 90%;
font-size: 13px;
font-weight: bold;
font-family: hobo std;
color: gold;
margin: 8px 0;
display: flex;
justify-content: center;
text-align:center;

`
const Image = styled.img`
width: 100%;
height: 150px;
object-fit: cover;
`
const Card = styled.div`
width: 230px;
min-height: 260px;
height: 100%auto;
margin: 20px;
background-color: white;
border-radius: 10px;
box-shadow: 1px 1px 5px 1px lightgray;
overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;
`
const CardHolder = styled.div`
width: 97%;
display: flex;
flex-wrap: wrap;
justify-content: center;
overflow-y: scroll;
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
const LogoHolder = styled.div`
display: flex;
flex: 1;
margin-left: 30px;
display: flex;
align-items: center;
`
const Text = styled.div`
color: #0E0E10;
font-family: hobo std;
font-size: 30px;
font-weight: bold;
`
const Logo = styled.img`
`
const HeaderItems = styled.div`
display: flex;
align-items: center;
width: 95%;
`
const Header = styled.div`
width: 100%;
display: flex;
height: 90px;
box-shadow: 1px 1px 3px 1px lightgray;
margin-bottom: 0px;
/* justify-content: center; */
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
