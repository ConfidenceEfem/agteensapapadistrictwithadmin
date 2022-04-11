import React from "react"
import styled from "styled-components"
import img from "./images/bg1.jpg"
const AboutComp = ({fd,mr,topic,bg,content,mt,image,w})=>{
    return(
        <Container mt={mt}>
            <Wrapper>
            <WhoWeAreComp fd={fd}>
                    <Contents mr={mr} w={w}>
                        <Topic>{topic}</Topic>
                        <MainText>
                        {content}
                        </MainText>
                    </Contents>
                </WhoWeAreComp>
            </Wrapper>
        </Container>
    )
}
export default AboutComp

const MainText = styled.div`
margin-top: 5px;
font-weight: 450;
font-family: Poppins;
letter-spacing: 0.1px;
font-size: 16px;
line-height: 35px;
@media screen and (max-width: 790px){

}
@media screen and (max-width: 639px){
    margin-top: 10px;
    line-height: 25px;

}
@media screen and (max-width: 623px){
  line-height: 23px;
}
@media screen and (max-width: 560px){
    font-size: 15px;
    text-align: center;
}
`
const Topic = styled.div`
font-family: hobo std;
font-size: 30px;
color: gold;
text-align: center;
@media screen and (max-width: 790px){
    font-size: 22px;
}
@media screen and (max-width: 623px){
    font-size: 18px;
}
@media screen and (max-width: 560px){
    font-size: 25px;
}
`
const Contents = styled.div`
width: ${({w})=>w? "60%": "50%"};
margin-right: ${({mr})=>mr?"80px": "0px"};
text-align:center;
font-family: poppins;

@media screen and (max-width: 749px){
    width: 85%;
     margin-right: ${({mr})=>mr?"40px": "0px"};
    
}
@media screen and (max-width: 560px){
    width: 85%;
    
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-right: ${({mr})=>mr?"0px": "0px"};
}
@media screen and (max-width: 950px){
    width: 85%;
    margin-right: ${({mr})=>mr?"40px": "0px"};
}
@media screen and (max-width: 950px){
   
    margin-right: ${({mr})=>mr?"40px": "0px"};
}
@media screen and (max-width: 562px){

    margin-right: ${({mr})=>mr?"0px": "0px"};
}
`
const OverLay = styled.div`
width: 100%;
height: 100%;
background-color: rgb(0,0,0,0.3);
/* background-color: red; */
position: absolute;
top: 0;
`
const Picture = styled.img`
width: 300px;
height: 250px;
border-radius: 10px;
overflow: hidden;
object-fit: cover;
/* background-image: url(${({ig})=>ig}); */
/* background-size: cover; */
/* background-repeat: no-repeat; */
@media screen and (max-width: 790px){
    width: 260px;
    height: 210px;
}
@media screen and (max-width: 750px){
    width: 260px;
    height: 210px;
    /* display: none; */
}
@media screen and (max-width: 623px){
    width: 220px;
    height: 170px;
    /* display: none; */
}
`
const PictureHolder = styled.div`

position: relative;
margin-right: ${({bg})=>bg?"100px": "0px"};
@media screen and (max-width: 950px){
    background-color: white;
    margin-right: ${({bg})=>bg?"100px": "0px"};
}
@media screen and (max-width: 880px){
    background-color: blue;
    margin-right: ${({bg})=>bg?"80px": "0px"};
}
@media screen and (max-width: 820px){
    background-color: green;
    margin-right: ${({bg})=>bg?"50px": "0px"};
}
@media screen and (max-width: 639px){
    background-color: green;
    margin-right: ${({bg})=>bg?"35px": "0px"};
}
@media screen and (max-width: 575px){
    display: none;
    margin-top: ${({mt})=>mt? "-70px" : "0px"};
}

`

const WhoWeAreComp = styled.div`
display: flex;
flex-direction: ${({fd})=>fd? "row-reverse": "row"};
align-items: center;
margin-bottom: 30px;
justify-content:center;

@media screen and (max-width: 575px){
    flex-wrap: wrap;
    justify-content: center;
}
`

const Wrapper = styled.div`
display: flex;
justify-content: center;
padding-top: 50px;


`
const Container = styled.div`
width: 100%;
min-height: 200px;
height: 100%auto;
margin-top: ${({mt})=>mt? "-70px" : "0px"};

/* background-color: red; */
/*  / */


`