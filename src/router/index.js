import vueRouter from "vue-router";
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld";

Vue.use(vueRouter);
export default () => {
    return new vueRouter({
        // mode:"history",
        // routes:[
        //     {
        //         path:"/",
        //         component:HelloWorld,
        //         name:"HelloWorld"
        //     },
        // ]
        mode:"history",
        routes:[
            {
                path:"/",
                component:{
                    template:`<h1>这里是首页</h1>`
                },
                name:"home"
            },
            {
                path:"/about",
                component:{
                    template:`<h1>这里是关于我</h1>`
                },
                name:"about"
            }
        ]
    })
}