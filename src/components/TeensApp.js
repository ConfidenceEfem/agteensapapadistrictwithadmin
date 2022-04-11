import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Leaders from "./Leaders"
import Home from './Home'
import styled from "styled-components"
import About from "./About"
import Blog from "./Blog"
import BlogDetail from "./BlogDetail"
import AddBlog from "./admin/AddBlog"
import AddEvent from "./admin/AddEvent"
import AddImages from "./admin/AddImages"
import AddLeaders from "./admin/AddLeaders"
import AddVideos from "./admin/AddVideos"
import AdminHeader from "./admin/AdminHeader"
import EditBlog from "./admin/EditBlog"
import EditEvent from "./admin/EditEvent"
import EditLeaders from "./admin/EditLeaders"
import EditPictures from "./admin/EditPictures"
import EditVideo from "./admin/EditVideo"
import ViewBlog from "./admin/ViewBlog"
import ViewEvent from "./admin/ViewEvent"
import ViewLeaders from "./admin/ViewLeaders"
import ViewPictures from "./admin/ViewPictures"
import ViewVideos from "./admin/ViewVideos"





const TeensApp = () => {
    return (
        <Container>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/about" element={<About/>}/>
                    <Route exact path="/leaders" element={<Leaders/>}/>
                    <Route exact path="/blog" element={<Blog/>}/>
                    <Route exact path="/blog/:id" element={<BlogDetail/>}/>

                    <Route exact path="" element={<EditVideo/>}/>
                    <Route exact path="" element={<EditPictures/>}/>
                    <Route exact path="/editleader" element={<EditLeaders/>}/>
                    <Route exact path="/editblog" element={<EditBlog/>}/>
                    <Route exact path="/editevent" element={<EditEvent/>}/>
                    <Route exact path="/agteenadmin/addevent" element={<AddEvent/>}/>
                    <Route exact path="/agteenadmin/addblog" element={<AddBlog/>}/>
                    <Route exact path="/agteenadmin/addleader" element={<AddLeaders/>}/>
                    <Route exact path="/agteenadmin/addimage" element={<AddImages/>}/>
                    <Route exact path="/agteenadmin/addvideo" element={<AddVideos/>}/>
                    <Route exact path="/agteenadmin/viewblog" element={<ViewBlog/>}/>
                    <Route exact path="/agteenadmin/viewimage" element={<ViewPictures/>}/>
                    <Route exact path="/agteenadmin/Viewvideo" element={<ViewVideos/>}/>
                    <Route exact path="/agteenadmin/viewleader" element={<ViewLeaders/>}/>
                    <Route exact path="/agteenadmin/viewevent" element={<ViewEvent/>}/>
                   
                </Routes>

            </Router>


            <Router>
            <Routes>
            <Route exact path="/agteens/viewevent" element={<ViewEvent/>}/>
            </Routes>
            </Router>
        </Container>
    )
}

export default TeensApp

const Container = styled.div`
width: 100%;

`