const express = require("express");
// const Vue = require("vue");
// const vueApp = require("./src/app.js");
const vueApp = require("./src/entry-server")
const path = require("path");
const fs = require("fs")

const vueServerRender = require("vue-server-renderer").createRenderer({
    template: fs.readFileSync(path.join(__dirname,"./index.html"),"utf-8")
});

const app = express();

app.get('*', async (request,respones) => {
    // const vueApp = new Vue({
    //     data:{
    //         message:"Hello,Vue SSR!"
    //     },
    //     template:`<h1>{{message}}</h1>` 
    // });
    let {url} = request;
    let vm = await vueApp({url})

    respones.status(200);
    respones.setHeader("Content-Type","text/html;charset-utf-8;");
    vueServerRender.renderToString(vm).then((html) => {
        respones.end(html);
    }).catch(error => console.log(error));
})

app.listen(3000,() => {
    console.log("服务已启动")
});