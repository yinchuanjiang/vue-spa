/**
 * Created by yinchuanjiang on 2018/2/13.
 */
/**
 * Created by yinchuanjiang on 2018/1/18.
 */
import VueRouter from 'vue-router';
//import jwt from './components/helper/JwtToken'
//import Store from './components/store/index'
let routes = [
    {
        path: '/',
        name:'home',
        component: require('./components/page/Home'),
        meta:{requiresAuth:false}
    },
    {
        path: '/about',
        component: require('./components/page/About'),
        meta:{requiresAuth:false}
    },
    {
        path: '/post/:id',
        name: 'post',
        component: require('./components/posts/Post'),
        meta:{requiresAuth:false}
    },
    {
        path: '/register',
        name: 'register',
        component: require('./components/register/Register'),
        meta:{requiresGate:true}
    },
    {
        path: '/confirm',
        name: 'confirm',
        component: require('./components/confirm/Email'),
        meta:{}
    },
    {
        path: '/login',
        name: 'login',
        component: require('./components/login/Login'),
        meta:{requiresGate:true}
    },
    {
        path: '/profile',
        component: require('./components/user/ProfileWrapper'),
        children:[
            {
                name: 'profile',
                path:'',
                component: require('./components/user/Profile'),
                meta:{requiresAuth:true}
            },
            {
                name: 'editProfile',
                path:'/edit-profile',
                component: require('./components/user/EditProfile'),
                meta:{requiresAuth:true}
            },
            {
                name: 'editPassword',
                path:'/edit-password',
                component: require('./components/pssword/EditPassword'),
                meta:{requiresAuth:true}
            },
        ],
    },
];
const router = new VueRouter({
    mode: 'history',
    routes
})
// router.beforeEach((to,from,next)=>{
//     if(to.meta.requiresAuth){
//         if(!jwt.getToken() && !Store.state.AuthUser.isLogin && !jwt.getAuthId()){
//             return next({'name':'login'})
//         }
//     }
//     if(to.meta.requiresGate){
//         console.log(Store.state.AuthUser);
//         console.log(Store.state.AuthUser.isLogin);
//         if(jwt.getToken() || Store.state.AuthUser.isLogin){
//             return next({'name':'home'});
//         }
//     }
//     next();
// });
export default router;