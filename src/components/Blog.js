import React from "react"
import styled from "styled-components"
import {NavLink} from "react-router-dom"
import {app} from "../base"
import Header from "./Header"
import Footer from "./Footer"
const Blog = ()=>{
    const [data, setData] = React.useState([])

     const getData = async ()=>{
            await app.firestore().collection("blogs")
            .onSnapshot((snapshot)=>{
                const store = []
                snapshot.forEach((doc)=>{
                    store.push({...doc.data(), id: doc.id})
                })
                setData(store)
            })
            console.log(data)
    }

    React.useEffect(()=>{
        getData()
        
    },[])
    return(
        <MainContainer>
        <Header/>
        <Container>
        <Heading>
            AG TEENS BLOG
        </Heading>
            <Wrapper>
            {data?.map((props)=>(
                <Box>
                <Image src={props.image}/>
                <Topic>{props.heading}</Topic>
                <Desc>
               {props.desc}
                </Desc>
                <Author>
                {props.author}
                </Author>
                <Button to={`/blog/${props.id}`}>
                    Read More...
                </Button>
            </Box>
            ))}
            </Wrapper>
            <Line></Line>
        </Container>
        <Footer/>
        </MainContainer>
    )
}
export default Blog
const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100%;
`
const Line = styled.div`
width: 100%;
height: 3px;
background-color: black;
margin-bottom: 30px;
`

const Desc = styled.div`
width: 95%;
display: flex;
text-align: center;
font-size: 13px;
font-family: poppins;
`
const Button = styled(NavLink)`
background-color: gold;
font-size: 12px;
width: 100px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
color: black;
border-radius: 4px;
transform: scale(1);
transition: all 350ms;
text-decoration: none;
:hover{
    transform: scale(1.02);
    cursor: pointer;
}
`
const Author = styled.div`
font-size: 16px;
font-weight: bold;
font-family: arial;
margin: 10px 0;
`
const Topic = styled.div`
font-size: 13px;
font-family: hobo std;
color: gold;
text-align: center;
margin: 12px 0;
`
const Image = styled.img`
width: 100%;
height: 45%;
`
const Box = styled.div`
width: 300px;
height: 100%auto;
background-color: white;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
display: flex;
flex-direction: column;
border-radius: 8px;
overflow: hidden;
align-items: center;
margin: 10px;
`
const Heading = styled.div`
font-size: 35px;
width:90%;
display: flex;
justify-content: center;
font-family: hobo std;
margin: 30px 0;
color: gold;
`

const Wrapper = styled.div`
width: 90%;
display: flex;
flex-wrap: wrap;
justify-content: center;
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