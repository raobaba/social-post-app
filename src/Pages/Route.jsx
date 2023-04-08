import React from 'react'
import {Routes,Route} from "react-router-dom";
import TotalPosts from '../Components/TotalPosts';
import TotalUsers from '../Components/TotalUsers';
import UserForm from '../Components/UserForm';
import PostForm from '../Components/PostForm';
import UserLists from '../Components/UserLists';
import PostLists from '../Components/PostLists';
export default function routes() {
  return (
    <Routes>
       <Route path='/' Component={TotalPosts} />
       <Route path='/totalUsers' Component={TotalUsers} />
       <Route path='/userForm' Component={UserForm} />
       <Route path='/postForm' Component={PostForm} />
       <Route path='/allUsers' Component={UserLists} />
       <Route path='/allPosts' Component={PostLists} />
    </Routes>
  )
}
