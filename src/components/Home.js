import React from 'react'
import styled from "styled-components"
import scripture from "./images/scripture.jpg"
import logo1 from "./images/logo1.png"
import event from "./images/event.jpeg"
import {NavLink} from "react-router-dom"
import {BsArrowRightSquareFill,BsArrowLeftSquareFill} from "react-icons/bs"
import event1 from "./images/event1.jpg"
import event2 from "./images/event2.jpg"
import {app} from "../base"
import AboutComp from './AboutComp'
import who from "./images/whowe.jpg"
import Header from "./Header"
import Footer from "./Footer"
const Home = () => {

    const [counter, setCounter ] = React.useState(0)
    const [data, setData] = React.useState([])
    const [events, setEvents] = React.useState([])
    const im = [event,event1,event2]
    const addCounter = ()=>{
        if(counter===im.length-1){
            setCounter(0)
        }else{
            setCounter(counter+1)
        }
    }

    const minusCounter = ()=>{
       if(counter<=0){
           setCounter(im.length - 1)
       }else{
           setCounter(counter-1)
       }
    }

     

     const getEvent = async ()=>{
            await app.firestore().collection("events")
            .onSnapshot((snapshot)=>{
                const store = []
                snapshot.forEach((doc)=>{
                    store.push({...doc.data(), id: doc.id})
                })
                setEvents(store)
            })
            console.log(events)
    }
     const getData = async ()=>{
            await app.firestore().collection("teenagers")
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
        getEvent()
        
    },[])

    const mainEvent = events[counter % events.length]
    return (
        <MainContainer>
        <Header/>
        <Container>
            <Wrapper>
                {/* <WhoWeAreComp>
                   <PictureHolder>
                   <Picture bg={img}>
                        <OverLay></OverLay>
                    </Picture>
                   </PictureHolder>
                    <Contents>
                        <Topic>WHO WE ARE?</Topic>
                        <MainText>
                        Assemblies of God Teen’s Ministries 
                        focuses on helping teens to experience,
                         grow and enjoy an endless life of
                          intimacy with God. We achieve this by
                           training teens in the way they should
                            go; raising a fresh
                         generation that passionately seeks God.
                        </MainText>
                        <ReadButton to="/about">Read More</ReadButton>
                    </Contents>
                </WhoWeAreComp> */}
                 <AboutComp bg w
                 style={{fontSize: "30px", color: "red"}}
                 mt w
             topic="WHO WE ARE"
             image={who}
             content="The Teens Solution Ministry of the Assemblies of God Nigeria does not subscribe to the wrong belief that assumes that “the teen period is a fairly neutral environment where ‘children’ toe the line and follow in the footsteps of their parents’ spirituality.” Instead, in training teens in the way they should go, we CULTIVATE A WORTHY TOMORROW TODAY; we MOLD THE FUTURE – both of the church and the world at large. In Teens Solution, our assignment is so STRATEGIC and DECISIVE. This is because we know that whatever we do with the teens today has a way of determining our future of both the church and the society at large. Thus, we apply WISDOM, DILIGENCE, and COMPLETELY DEPEND on God, as we train teens in the way they should go"
            />
                <ScriptureComp>
                    <Bible src={scripture}/>
                    <TheLogo src={logo1}/>
                    <Blur></Blur>
                    <TextHolder>
                        <OurScripture>
                            Our Scripture
                        </OurScripture>
                            <TheScripture>
                            Train up a child in the way he should go:
                             and when he is old,
                             he will not depart from it. 
                            </TheScripture>
                            <BibleText>
                            (Proverbs 22:6, NKJV)
                            </BibleText>
                    </TextHolder>
                </ScriptureComp>
                <EventComp>
                {events.length === 0 || events.length < 0?null:<UpcomingEvent>UPCOMING EVENTS</UpcomingEvent>}
                 
                {events.length === 0 || events.length < 0?null :  
                    <SliderEvent>
                            <MoverIcon onClick={minusCounter}>
                                <BsArrowLeftSquareFill/>
                            </MoverIcon>
                        <ImageEvent>
                            <EventFlyer src={mainEvent?.image}/>
                           
                        </ImageEvent>
                        <MoverIcon1 onClick={addCounter}>
                        <BsArrowRightSquareFill/>
                        </MoverIcon1>
                    </SliderEvent>}
                    
                    <Register>
                    {mainEvent?.link}
                    </Register>
                    </EventComp>
               {data.length === 0 || data.length < 0? null : (
                 
                    <GalleryComp>
                       
                       {data?.map((props)=>(
                           <GalleryImages>
                           <GalleryImage src={props.image}/>
                           <GalleryOverlay>
                               <GalleryProgram>{props.program}</GalleryProgram>
                           </GalleryOverlay>
                       </GalleryImages>
                       ))}
                    </GalleryComp>
               )}
                <Line></Line>
            </Wrapper>
        </Container>
        <Footer/>
        </MainContainer>
        
    )
}

export default Home
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
const GalleryImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const GalleryImages = styled.div`
min-width: 280px;
height: 250px;
border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
margin: 12px;
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
const Register = styled.div`
font-size: 12px;
color: black;
margin-top: 5px;
color: blue;
`
const Week = styled.div`
font-size: 27px;
font-weight: bold;
letter-spacing: 0.4px;
@media screen and (max-width: 700px){
   font-size: 22px;
}
@media screen and (max-width: 600px){
    font-size: 16px;
}
@media screen and (max-width: 790px){
    font-size: 20px;
}
@media screen and (max-width: 475px){
    font-size: 14px;
}
`
const Number = styled.div`
font-size: 45px;
letter-spacing: 0.3px;
margin-bottom: 10px;
font-weight: bold;
@media screen and (max-width: 700px){
   font-size: 30px;
}
@media screen and (max-width: 600px){
    font-size: 25px;
}
@media screen and (max-width: 475px){
    font-size: 22px;
    margin-bottom: 5px;
}
`
const CountHold = styled.div`
width: 110px;
height: 150px;
border: solid 2px gold;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: gold;
font-family: hobo std;
@media screen and (max-width: 700px){
   width: 80px;
   height: 120px;
}
@media screen and (max-width: 600px){
    width: 60px;
    height: 100px;
}
@media screen and (max-width: 790px){
    width: 85px;
}
@media screen and (max-width: 475px){
    width: 50px;
    height: 80px;
}
`
const CountdownHolder = styled.div`
width: 70%;
display: flex;
justify-content: space-between;
@media screen and (max-width: 1000px){
    width: 90%;
}
`
const EventName = styled.div`
width: 100%;
font-size: 20px;
color: gold;
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
padding-top: 30px;
margin-bottom: 130px;
@media screen and (max-width: 700px){
   margin-bottom: 80px;
}
@media screen and (max-width: 475px){
    font-size: 16px;
}
@media screen and (max-width: 380px){
    margin-bottom: 40px;
}
`
const EventOverLay = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-color: rgb(0,0,0,0.4);
top: 0;
display: flex;
flex-direction: column;
align-items:center;

`
const EventFlyer = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const MoverIcon1 = styled(BsArrowRightSquareFill)`
font-size: 30px;
cursor: pointer;
color: black;
@media screen and (max-width: 1000px){
   font-size: 25px;
}
@media screen and (max-width: 700px){
   font-size: 20px;
}
`
const MoverIcon = styled(BsArrowLeftSquareFill)`
font-size: 30px;
cursor: pointer;
color: black;
@media screen and (max-width: 1000px){
   font-size: 25px;
}
@media screen and (max-width: 700px){
   font-size: 20px;
}
`
const ImageEvent = styled.div`
margin: 0 20px;
width: 900px;
height: 500px;
border-radius: 5px;
overflow: hidden;
position: relative;
@media screen and (max-width: 1100px){
    width: 850px;
    color: blue;
}
@media screen and (max-width: 1000px){
    width: 750px;
    color: white;
}
@media screen and (max-width: 900px){
    width: 650px;
    color: red;  
}
@media screen and (max-width: 800px){
    width: 550px;
    color: green;  
}
@media screen and (max-width: 790px){
    width: 500px;
    color: purple;
    height: 400px;  
    margin: 0 10px;
}
@media screen and (max-width: 600px){
    width: 350px;
    height: 380px;
    color: indigo;
}
@media screen and (max-width: 475px){
    width: 290px;
    height: 300px;
    color: yellow;
    margin: 0 5px;
}
@media screen and (max-width: 380px){
    width: 250px;
    height: 260px;
}
/* @media screen and (max-width: 379px){
    width: 250px;
    height: 280px;
}
@media screen and (max-width: 360px){
    width: 250px;
} */
`
const SliderEvent = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
const UpcomingEvent = styled.div`
font-size: 30px;
font-family: hobo std;
color: gold;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin: 30px 0;
@media screen and (max-width: 475px){
    font-size: 20px;
}
`
const EventComp = styled.div`
width: 96%;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 30px;
`
const BibleText= styled.div`
color: white;
font-size: 14px;
`
const TheScripture = styled.div`
width: 550px;
text-align: center;
font-size: 22px;
font-family: poppins;
margin-bottom: 10px;
@media screen and (max-width: 400px){
    font-size: 18px;
    width: 310px;
}
@media screen and (max-width: 600px){
    font-size: 20px;
    margin-top: 10px;
    width: 340px;
}
@media screen and (max-width: 379px){
    font-size: 16px;
    margin-top: 7px;
    width: 300px;
}
`
const OurScripture = styled.div`
font-family: hobo std;
font-size: 35px;
color: gold;
margin-top: 40px;
margin-bottom: 20px;
@media screen and (max-width: 400px){
    font-size: 30px;
    margin-top: 10px;
}

`
const TextHolder = styled.div`
position: absolute;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
background-color: rgb(0,0,0,0.1);
z-index: 3;
color: white;
font-weight: 400;
`

const Blur = styled.div`
width: 100%;
height: 100%;
position: absolute;
backdrop-filter: blur(4px);
/* background-color: rgb(0,0,0,0.4); */
`

const TheLogo = styled.img`
position: absolute;
top: 5;
left: 40;
opacity: 0.3;
z-index: 1;
width: 200px;
height: 350px;
object-fit: contain;
`

const Bible = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`

const ScriptureComp = styled.div`
width: 100%;
height: 350px;
display: flex;
justify-content: center;
align-items: center;
position: relative;
box-shadow: 1px 1px 6px 3px lightgray;
/* background-image: url(${({bg})=>bg});
background-repeat: no-repeat;
background-size: contain; */
`

const PictureHolder = styled.div`
display: flex;
flex: 1;
`
const ReadButton = styled(NavLink)`
width: 130px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(255,215,0,0.8);
border-radius: 5px;
font-size: 14px;
color: white;
font-weight: bold;
cursor: pointer;
transition: all 350ms;
transform: scale(1);
:hover{
    transform: scale(1.03);
}
@media screen and (max-width: 850px){
    font-size: 12px;
    width: 120px;
    height: 30px;
}
`
const MainText = styled.div`
margin: 20px 0;
font-weight: 450;
font-family: poppins;
letter-spacing: 0.2px;
font-size: 14px;
line-height: 30px;
@media screen and (max-width: 1000px){
    margin: 15px 0;
    font-size: 13px;
    line-height: 28px;
}
@media screen and (max-width: 850px){
    margin: 10px 0;
    font-size: 12px;
}
@media screen and (max-width: 750px){
    text-align: center;
    margin: 15px 0;
    font-size: 14px;
}
`
const Topic = styled.div`
font-family: hobo std;
font-size: 30px;
color: gold;
@media screen and (max-width: 1000px){
    font-size: 26px;
   
}
@media screen and (max-width: 850px){
    font-size: 23px;
}
`
const Contents = styled.div`
width: 500px;
@media screen and (max-width: 1300px){
    width: 450px;
}
@media screen and (max-width: 1000px){
    width: 400px;
}
@media screen and (max-width: 850px){
    width: 350px;
}
@media screen and (max-width: 750px){
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`
const OverLay = styled.div`
width: 100%;
height: 100%;
background-color: rgb(0,0,0,0.3);
`
const Picture = styled.div`
width: 300px;
height: 250px;
border-radius: 10px;
/* border: solid 2px gray; */
overflow: hidden;
background-image: url(${({bg})=>bg});
background-size: cover;
background-repeat: no-repeat;
@media screen and (max-width: 850px){
    width: 270px;
    height: 220px;
}
@media screen and (max-width: 750px){
    display: none;
}
`
const WhoWeAreComp = styled.div`
display: flex;
width: 75%;
align-items: center;
margin-bottom: 60px;
@media screen and (max-width: 1200px){
    width: 80%;
}
@media screen and (max-width: 1100px){
    width: 90%;
}
@media screen and (max-width: 820px){
    width: 92%;
}
@media screen and (max-width: 750px){
    flex-wrap: wrap;
    width: 90%;
    justify-content: center;
}
`

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
padding-top: 45px;
align-items: center;
`

const Container = styled.div`
width: 100%;
min-height: calc(100vh - 450px);
height: 100%;
display: flex;
justify-content: center;
margin-bottom: 30px;
`
