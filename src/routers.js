/*
 * @Description: 
 * @Version: 2.0
 * @Autor: mapleLeaves
 * @Date: 2019-05-28 17:02:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-20 11:22:09
 * @weChat: 893774884
 */
import React from 'react'
import {BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Loadable from 'react-loadable'
function Loading() {
  return <div>loading...</div>
}

const routes = [
  {
    path: '/index',
    component: Loadable({
      loading: Loading,
      loader: () => import('./views/Index')
    }),
    exart: true,
    routes: [
      {
        path: '/index/home',
        component: Loadable({
          loading: Loading,
          loader: () => import('./views/home')
        }),
      },
      {
        path: '/index/article',
        component: Loadable({
          loading: Loading,
          loader: () => import('./views/article')
        }),
      },
      {
        path: '/index/articleInfo',
        component: Loadable({
          loading: Loading,
          loader: () => import('./views/article/components/articleInfo.jsx')
        }),
      },
      {
        path: '/index/board',
        component: Loadable({
          loading: Loading,
          loader: () => import('./views/board')
        }),
      },
      {
        path: '/index/question',
        component: Loadable({
          loading: Loading,
          loader: () => import('./views/question')
        }),
      },
      
      {
        path: '/index/aboutUs',
        component: Loadable({
          loading: Loading,
          loader: () => import('./views/aboutUs')
        }),
      },
      {
        path: '/index/message',
        component: Loadable({
          loading: Loading,
          loader: () => import('./views/message')
        }),
      }
    ]
  }
]
const BasicRoute = () => (
  <BrowserRouter >
    {renderRoutes(routes)}
  </BrowserRouter>
)

export default BasicRoute
