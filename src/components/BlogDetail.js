import React from "react"
import styled from "styled-components"
import {app} from "../base"
import {useParams} from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const BlogDetail = ()=>{
    const {id} = useParams()
    const [data, setData] = React.useState([])

     const getData = async (id)=>{
            await app.firestore().collection("blogs").doc(id).get().then((el)=>{
                    setData(el.data())
            })
          
            console.log(data)
    }

    React.useEffect(()=>{
getData(id)
    },[])

    return(
        <MainContainer>
        <Header/>
        <Container>
        <Heading>
        AG TEENS BLOG
        </Heading>
            <Wrapper>
            <Image src={data.image}/>
                <Topic>{data.heading}</Topic>
                <Contents>{data.content}</Contents>
                <Author><span>Written by:</span>{" "}{data.author}</Author>
            </Wrapper>
            <Line></Line>
        </Container>
        <Footer/>
        </MainContainer>
    )
}
export default BlogDetail
const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100%;
`
const Line = styled.div`
width: 100%;
background-color: black;
height: 3px;
margin-bottom: 30px;
`
const Author = styled.div`
width: 100%;
justify-content: center;
display: flex;
color: gold;
font-size: 12px;
font-weight: bold;
font-family: arial;
margin: 20px 0;
span{
    color:black; 
    margin-right: 5px;
}
`
const Contents = styled.div`
width: 90%;
display: flex;
font-size: 14px;
font-family: poppins;
line-height: 25px;
color: black;
margin-bottom: 10px;
justify-content: center;
text-align: left;
`
const Topic = styled.div`
font-size: 20px;
font-family: hobo std;
width: 100%;
display: flex;
justify-content: center;
color: gold;
text-align: center;
@media screen and (max-width:425px){
    margin-bottom: 15px;
}
`
const Image = styled.img`
width: 450px;
height: 350px;
object-fit: cover;
margin-bottom: 20px;
@media screen and (max-width: 768px){
    width: 400px;
    height: 320px;
    object-fit: cover;
}
@media screen and (max-width: 425px){
    width: 300px;
    height: 280px;
    object-fit: cover;
}
@media screen and (max-width: 375px){
    width: 280px;
    height: 250px;
    object-fit: cover;
}
@media screen and (max-width: 375px){
    width: 270px;
    height: 240px;
    object-fit: cover;
}
`
const Wrapper = styled.div`
width: 95%;
display: flex;
flex-direction: column;
align-items: center;
`
const Heading = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin: 30px 0;
font-size: 30px;
font-family: hobo std;
font-weight: bold;
color: gold;
margin-bottom: 30px;
`
const Container = styled.div`
width: 100%;
min-height: calc(100vh - 450px);
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`