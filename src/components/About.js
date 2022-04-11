import React from "react"
import AboutComp from "./AboutComp"
import styled from "styled-components"
import {app} from "../base"
// import who from "./images/who.jpg"
import who from "./images/whowe.jpg"
import vision from "./images/vision.jpg"
import aim from "./images/bg8.jpg"
import mission from "./images/who.jpg"
import Header from "./Header"
import Footer from "./Footer"
const About = ()=>{
  const [data, setData] = React.useState([])

   const getData = async ()=>{
          await app.firestore().collection("videos")
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
             <AboutComp bg 
             image={who}
             topic="WHO WE ARE"
             content="The Teens Solution Ministry of the Assemblies of God Nigeria does not subscribe to the wrong belief that assumes that “the teen period is a fairly neutral environment where ‘children’ toe the line and follow in the footsteps of their parents’ spirituality.” Instead, in training teens in the way they should go, we CULTIVATE A WORTHY TOMORROW TODAY; we MOLD THE FUTURE – both of the church and the world at large. In Teens Solution, our assignment is so STRATEGIC and DECISIVE. This is because we know that whatever we do with the teens today has a way of determining our future of both the church and the society at large. Thus, we apply WISDOM, DILIGENCE, and COMPLETELY DEPEND on God, as we train teens in the way they should go"
            />
            
             <AboutComp  fd 
             image={vision}
              topic="OUR VISION"
              content="To raise a fresh generation of teenagers who are grounded in the Word of God, equipped to exert strong and godly influence on their generation and beyond thereby excelling in everything worthy"/>
             <AboutComp bg
             image={aim}
             topic="Our Culture, Objectives, & Profession"
             content="In Teens Solution Ministries, we have shared assumptions, values, and beliefs, which govern what we do. They’re not just mere dry creed we recite during special days or events. Rather, they are our ministry objectives; and they’re expressed in our confession and slogan. They define what is acceptable to the ministry, the hope the ministry embodies, and the ministry expectations of the membership. They consist of the following"
             />
             <AboutComp fd
             image={mission}
             topic="OUR MISSION STATEMENT"
             content="To bring teens to Christ and mature them for excellence in life and ministry through serial exposure to the Word of God and Life Workshops. This develops them into veritable tools for reaching their generation, ensuring greater ministry in the nation and the world at large"/>
             {data.length == 0 || data.length < 0 ? null : 
              <GalleryComp>       
              {data?.map((props)=>(
                  <GalleryImages>
                  <GalleryImage src={props.image} controls/>
                  <GalleryOverlay>
                      <GalleryProgram>{props.program}</GalleryProgram>
                  </GalleryOverlay>
              </GalleryImages>
              ))}
           </GalleryComp>}
                <Line></Line>
        </Container>
        <Footer/>
        </MainContainer>
    )
}
export default About
const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100%;
`
const Line = styled.div`
margin-bottom: 30px;
width: 100%;
background-color: black;
height: 3px;
`
const GalleryProgram = styled.div`
width: 100px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
color: gold;
`
const GalleryOverlay = styled.div`
background-color: rgb(0,0,0,0.4);
display: flex;
justify-content: center;
align-items: center;
font-size: 15px;
font-family: hobo std;
width: 100%;
height: 100%;
position: absolute;

`
const GalleryImage = styled.video`
width: 100%;
height: 100%;
object-fit: cover;
`
const GalleryImages = styled.div`
min-width: 290px;
height: 250px;
border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
margin: 15px;
`
const GalleryComp = styled.div`
width: 95%;
display: flex;
/* flex-wrap: wrap; */
justify-content: center;
margin-top: 30px;
margin-bottom: 30px;
/* background: red; */
overflow-x: scroll;
@media screen and (max-width: 400px){
    /* overflow-x:hidden; */
}
`

const Wrapper = styled.div``
const Container = styled.div`
width: 100%;
display: flex;
min-height: calc(100vh - 450px);
height: 100%;
flex-direction: column;
align-items: center;
`