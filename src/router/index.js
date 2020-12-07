import Vue from 'vue'
import VueRouter from 'vue-router'

function validateFileName (str) {
  return /^\S+\.vue$/.test(str) && str.replace(/^\S+\/(\w+)\.vue$/, (rs, $1) => $1)
}

// 设计里面的路由
const designArr = require.context('../views/design', true, /\.vue$/).keys();
const designRouters = designArr.map(v => {
  const path = validateFileName(v);
  const suffixSubscript = v.indexOf('.vue');
  const name = v.substring(2, suffixSubscript);
  return {
    path: "/home/design/" + path,
    name: path,
    component: require(`../views/design/${name}`).default
  }
})

// 施工里面的路由
const liangchangArr = require.context('../views/liangchang', true, /\.vue$/).keys();
const liangchangRouters = liangchangArr.map(v => {
  const path = validateFileName(v);
  const suffixSubscript = v.indexOf('.vue');
  const name = v.substring(2, suffixSubscript);
  return {
    path: "/home/liangchang/" + path,
    name: path,
    component: require(`../views/liangchang/${name}`).default
  }
})

// 梁场里面的路由
const constructionArr = require.context('../views/constructions', true, /\.vue$/).keys();
const constructionRouters = constructionArr.map(v => {
  const path = validateFileName(v);
  const suffixSubscript = v.indexOf('.vue');
  const name = v.substring(2, suffixSubscript);
  return {
    path: "/home/constructions/" + path,
    name: path,
    component: require(`../views/constructions/${name}`).default
  }
})

// 养护里面的路由
const curingArr = require.context('../views/curing', true, /\.vue$/).keys();
const curingRouters = curingArr.map(v => {
  const path = validateFileName(v);
  const suffixSubscript = v.indexOf('.vue');
  const name = v.substring(2, suffixSubscript);
  return {
    path: "/home/curing/" + path,
    name: path,
    component: require(`../views/curing/${name}`).default
  }
})

Vue.use(VueRouter)

const routes = [
  { path: "/", redirect: "/login" },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/projectSelect',
    name: 'PojectSelect',
    component: () => import('../views/projectSelect.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    redirect: '/home/design',
    children: [
      {
        path: '/home/design',
        name: 'design',
        component: () => import('../views/SubHome.vue'),
        children: designRouters
      },
      {
        path: '/home/constructions',
        name: 'constructions',
        component: () => import('../views/SubHome.vue'),
        children: constructionRouters
      },
      {
        path: '/home/liangchang',
        name: 'liangchang',
        component: () => import('../views/SubHome.vue'),
        children: liangchangRouters
      },
      {
        path: '/home/curing',
        name: 'curing',
        component: () => import('../views/SubHome.vue'),
        children: curingRouters
      }
    ]
  }
]

console.log(routes)

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
