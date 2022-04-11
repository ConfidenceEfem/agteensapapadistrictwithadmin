import React,{ useRef, useState, useEffect} from 'react'
import styled from "styled-components"
import NavsComp from './NavsComp'
import bg1 from "./images/bg1.jpg"
import bg2 from "./images/bg2.jpg"
import bg3 from "./images/bg3.jpg"
import bg4 from "./images/bg4.jpg"
import bg5 from "./images/bg5.jpg"
import bg6 from "./images/bg6.jpg"
import bg7 from "./images/bg7.jpg"
import bg8 from "./images/bg8.jpg"
import who from "./images/whowe.jpg"
import SideBar from "./SideBar"
import {app} from "../base"
import {NavLink} from "react-router-dom"
import firebase from "firebase"

const Header = () => {
    const myRef = useRef()
    const [toggle, setToggle] = React.useState(false)
    const [counter, setCounter] = React.useState(0)
    const [avatar, setAvatar] = React.useState("")
    const bg = [bg1,bg2,bg8,bg6,bg3]
    const addCounter = ()=>{
        if(counter==bg.length-1){
            setCounter(0)
        }else{
            setCounter(counter+1)
        }
    }

    const minusCounter = ()=>{
       if(counter<=0){
           setCounter(bg.length - 1)
       }else{
           setCounter(counter-1)
       }
    }

    const pushData = async ()=>{
        await app.firestore().collection("background").add({
            image: avatar
        })      }


React.useEffect(()=>{
       setInterval(()=>{
            setCounter((e)=>e+1)
       },5000)
},[])

const colours = ["rgb(255,215,0,0.6)", "rgb(255,215,0)", "rgb(255,215,0)","rgb(255,215,0)", "rgb(255,215,0)"]



    return (
       <MainContainer bg={bg[counter%bg.length]}>
        {/* <BackgroundImage src={bg1}/> */}
           <OverLay>
           <NavsComp toggle={toggle} setToggle={setToggle}/>
        <TextAndTeens>
            <WelcomeText>
                Assemblies of God,Apapa District Teens Department
            </WelcomeText>
          
            <Button to="/about"><span>TEENS SOLUTION</span></Button>
        </TextAndTeens>
        <SliderDots>
            <Circle
             onClick={()=>{
                setCounter(0)
            }}
            ></Circle>
            <Circle
             onClick={()=>{
                setCounter(1)
            }}
            ></Circle>
            <Circle
             onClick={()=>{
                setCounter(2)
            }}
            ></Circle>
            <Circle
             onClick={()=>{
                setCounter(3)
            }}
            ></Circle>
            <Circle
            onClick={()=>{
                setCounter(4)
            }}
            ></Circle>
        </SliderDots>
           </OverLay>
            {/* {toggle? <SideBar toggle={toggle} setToggle={setToggle}/>: null} */}
       </MainContainer>
    )
}

export default Header

const Circle = styled.div`
width: 10px;
height: 10px;
border-radius: 50%;
margin: 0 8px;
background-color: rgb(255,215,0);
/* opacity: 0.8; */
`
const Button = styled(NavLink)`
width: 100%;
display: flex;
justify-content: center;
font-size: 15px;
color: white;
font-weight: bold;
text-decoration: none;
span{
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    background-color: rgb(255,215,0,0.8);
    border-radius: 5px;
    letter-spacing: 0.3px;
}

`
const WelcomeText = styled.div`
width: 630px;
text-align: center;
font-size: 35px;
font-weight: bold;
color: white;
margin-bottom: 35px;
letter-spacing: 0.3px;
line-height: 50px; 
@media screen and (max-width: 1000px){
    margin-bottom: 30px;
}
@media screen and (max-width: 820px){
    font-size: 32px;
    width: 600px; 
}
@media screen and (max-width: 650px){
    font-size: 30px;
    width: 550px;  
}
@media screen and (max-width: 550px){
    font-size: 29px;
    width: 500px;  
    line-height: 48px;
}
@media screen and (max-width: 500px){
    font-size: 26px;
    width: 450px;  
    line-height: 43px;
}
@media screen and (min-width: 360px) and (max-width: 430px){
    font-size: 20px;
    width: 340px;
    letter-spacing: 0px;
    line-height: 38px;
}
@media screen and (min-width: 300px) and (max-width: 360px){
    font-size: 16px;
    letter-spacing: 0px;
    width: 290px;
    line-height: 30px;
}
`
const SliderDots = styled.div`
display: flex;
`
const TextAndTeens = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 20px;
margin-bottom: 100px;
margin-top: 120px;
`
const OverLay = styled.div`
display: flex;
flex-direction: column;
width: 100%;
background-color: rgb(0,0,0,0.6);
padding-top: 5px;
align-items: center;
height: 100%;
@media screen and (min-width: 360px) and (max-width: 430px){
    width: 100%;
}
@media screen and (min-width: 320px) and (max-width: 350px){
    width: 100%;
}
`

const MainContainer = styled.div`
width: 100%;
height: 450px;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${({bg})=>bg});
background-repeat: no-repeat;
background-size: cover;
position: relative;

@media screen and (min-width: 360px) and (max-width: 430px){
    height: 420px;
    width: 100%;
  
}

@media screen and (max-width: 359px){
    width: 100%;
    height: 400px;
}
@media screen and (max-width: 320px){
    height: 400px;
    width: 320px;
    background-repeat: no-repeat;
background-size: cover;
background-color:red;
    
}
`

// const BackgroundImage = styled.img`
// /* width: 100%;
// height: 100%;
// object-fit: cover; */
// `
