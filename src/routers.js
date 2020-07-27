/*
 * @Description: 
 * @Version: 2.0
 * @Autor: mapleLeaves
 * @Date: 2019-05-28 17:02:15
 * @LastEditors: mapleleaves
 * @LastEditTime: 2020-07-27 22:16:56
 * @weChat: 893774884
 */
import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Loadable from 'react-loadable'
function Loading(){
    return <div>loading...</div>
}
const Index=Loadable({
    loading:Loading,
    loader:()=>import('./views/home')
})
const routes = [
  {
    path:'/index',
    component: Index,
    exart: true,
  }
]
const BasicRoute = () => (
  <BrowserRouter >
    {renderRoutes(routes)}
  </BrowserRouter>
)

export default BasicRoute
