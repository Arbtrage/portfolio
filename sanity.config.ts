import { defineConfig } from "sanity";
import {deskTool} from "sanity/desk";
import schemas from './sanity/schemas';
const config=defineConfig({
    projectId:"pxe0eix7",
    dataset:"production",
    title:"My Personal Website",
    apiVersion:"2023-07-18",
    basePath:"/admin",
    plugins:[deskTool()],
    schema:{types:schemas}
})

export default config;