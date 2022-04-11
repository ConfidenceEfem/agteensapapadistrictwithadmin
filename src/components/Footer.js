import React from "react"
import styled from "styled-components"
import fb from "./images/facebook.png"
import insta from "./images/instagram.png"
import whatsapp from "./images/whatsapp.png"
import youtube from "./images/youtube.png"
const Footer = ()=>{
    return(
        <Container>
            <Wrapper>
                <Spread>Spread the Word</Spread>
                <Social>
                    <a target="_blank" href="https://www.facebook.com/ADTeensForum/">
                    <SocialCircle>
                        <Icon src={fb}/>
                    </SocialCircle>
                    </a>
                    <a target="_blank" href="https://chat.whatsapp.com/HH9dQEitN0tBJUxXlZ0bz6">
                    <SocialCircle>
                        <Icon src={insta}/>
                    </SocialCircle>
                    </a>
                     <a target="_blank" href="https://chat.whatsapp.com/HH9dQEitN0tBJUxXlZ0bz6">
                    <SocialCircle>
                        <Icon src={whatsapp}/>
                    </SocialCircle>
                    </a>
                        <a target="_blank" href="https://www.facebook.com/ADTeensForum/">
                    <SocialCircle>
                        <Icon src={youtube}/>
                    </SocialCircle>
                    </a>
                </Social>
                <Location>
                    <Head>ASSEMBLIES OF GOD CHURCH,
                         APAPA DISTRICT</Head>
                         <TeensDepart>
                             TEENS SOLUTION DEPARTMENT
                         </TeensDepart>
                         <Address>
                             7th Avenue Festac Town, Festac Extension, Lagos.
                         </Address>
                </Location>
                <Copyright>Copyright@2021 || Developed by Confidence Efem</Copyright>
            </Wrapper>
        </Container>
    )
}
export default Footer
const Copyright =styled.div`
font-size: 10px;
color: lightgray;
width: 100%;
display: flex;
justify-content: center;
margin-bottom: 30px;
`
const Address = styled.div`
font-size: 13px;
font-family: arial;
color: gray;
@media screen and (max-width: 400px){
    font-size: 10px;
}
`
const TeensDepart = styled.div`
font-size: 16px;
font-family: arial;
color: lightgray;
margin-bottom: 10px;
@media screen and (max-width: 490px){
    font-size: 13px;
}
@media screen and (max-width: 400px){
    font-size: 10px;
}
@media screen and (max-width: 360px){
    font-size: 8px;
}
`
const Head = styled.div`
font-size: 17px;
font-family: arial;
font-weight: bold;
color: lightgray;
margin-bottom: 10px;
@media screen and (max-width: 490px){
    font-size: 14px;
}
@media screen and (max-width: 400px){
    font-size: 12px;
}
@media screen and (max-width: 360px){
    font-size: 10px;
}
`
const Location = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
`
const Icon = styled.img`
width: 25px;
height: 25px;
object-fit: contain;
`
const SocialCircle = styled.div`
width: 45px;
height: 45px;
border-radius: 50%;
background-color: whitesmoke;
display: flex;
justify-content: center;
align-items: center;
margin: 0 5px;
cursor: pointer;
transform: scale(1);
transition: all 350ms;
:hover{
    box-shadow: 1px 1px 2px 1px gray;
    transform: scale(1.02);
}
`
const Social = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
margin-bottom: 30px;
`
const Spread = styled.div`
font-size: 13px;
font-family: hobo std;
color: gold;
width: 100%;
display: flex;
justify-content: center;
padding-top: 40px;
margin-bottom: 30px;
`

const Wrapper = styled.div`
flex-direction: column;
align-items: center;
`
const Container = styled.div`
width: 100%;
height: 300px;
background-color:#0E0E10;
`