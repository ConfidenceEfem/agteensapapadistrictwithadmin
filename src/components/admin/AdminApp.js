import React from 'react'
import styled from "styled-components"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavComp from './NavComp'
import AddEvent from './AddEvent'
import AddBlog from './AddBlog'
import AddLeaders from './AddLeaders'
import AddImages from './AddImages'
import AddVideos from './AddVideos'
import ViewBlog from './ViewBlog'
import ViewPictures from './ViewPictures'
import ViewVideos from './ViewVideos'
import ViewLeaders from './ViewLeaders'
import ViewEvent from './ViewEvent'
import EditEvent from './EditEvent'
import EditBlog from './EditBlog'
import EditLeaders from './EditLeaders'
import EditPictures from './EditPictures'
import EditVideo from './EditVideo'
import AdminHeader from './AdminHeader'

const AdminApp = () => {
    return (
        <div>
            <Router>
                <NavComp/>
                <Routes>
                    <Route exact path="/editvideo/:id" element={<EditVideo/>}/>
                    <Route exact path="/editpicture/:id" element={<EditPictures/>}/>
                    <Route exact path="/editleader" element={<EditLeaders/>}/>
                    <Route exact path="/editblog" element={<EditBlog/>}/>
                    <Route exact path="/editevent" element={<EditEvent/>}/>
                    <Route exact path="/addevent" element={<AddEvent/>}/>
                    <Route exact path="/addblog" element={<AddBlog/>}/>
                    <Route exact path="/adminheader" element={<AdminHeader/>}/>
                    <Route exact path="/addleader" element={<AddLeaders/>}/>
                    <Route exact path="/addimage" element={<AddImages/>}/>
                    <Route exact path="/addvideo" element={<AddVideos/>}/>
                    <Route exact path="/viewblog" element={<ViewBlog/>}/>
                    <Route exact path="/viewimage" element={<ViewPictures/>}/>
                    <Route exact path="/Viewvideo" element={<ViewVideos/>}/>
                    <Route exact path="/Viewleader" element={<ViewLeaders/>}/>
                    <Route exact path="/Viewevent" element={<ViewEvent/>}/>
                    <Route/>
                </Routes>
            </Router>
        </div>
    )
}

export default AdminApp

