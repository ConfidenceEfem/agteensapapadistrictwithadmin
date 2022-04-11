import React from "react"
import styled from "styled-components"
import {app} from "../base"
import Header from "./Header"
import Footer from "./Footer"
const Leaders = ()=>{
    const [data, setData] = React.useState([])

     const getData = async ()=>{
            await app.firestore().collection("leaders")
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
            <Wrapper>
                {data?.map((props)=>(
                    <Box>
                    <Profile src={props.image}/>
                    <OverLay>
                        <Position>
                            {props.position}
                        </Position>
                        <Names>
                            {props.name} 
                        </Names>
                    </OverLay>
                </Box>
                ))}
            </Wrapper>
            <Line></Line>
        </Container>
        <Footer/>
        </MainContainer>
    )
}
export default Leaders
const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100%;
`
const Names = styled.div`

    display: flex;
    margin-bottom: 10px;
width: 95%;
color: gold;
justify-content: center;
align-items: center;
text-align: center;
font-weight: bold;
font-size: 13px;

`

const Position = styled.div`
transition: all 350ms;
    display: flex;
    margin-bottom: 5px;
font-size: 10px;
color: white;

`
const Line = styled.div`
width: 100%;
height: 3px;
background-color: black;
margin-bottom: 30px;
`
const OverLay = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
background-color: rgb(0,0,0,0.3);
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
font-family: poppins;
:hover{
    background-color: rgb(0,0,0,0.5);
    
}
`
const Profile = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const Box = styled.div`
width: 250px;
height: 300px;
display: flex;
margin: 10px;
border-radius: 8px;
overflow: hidden;
position: relative;
`

const Container = styled.div`
width: 100%;
min-height: calc(100vh - 450px);
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
`
const Wrapper = styled.div`
display: flex;
width: 90%;
flex-wrap: wrap;
padding-top: 50px;
padding-bottom: 30px;
justify-content: center;
`