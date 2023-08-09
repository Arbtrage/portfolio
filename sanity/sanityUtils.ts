import { Project } from "@/types/Projects";
import {Page} from "@/types/Page"
import { createClient,groq } from "next-sanity";
import config from "./connection/sanityConfig";

export async function getProjects():Promise<Project[]> {
  
  return createClient(config).fetch(
    groq`*[_type=="project"]{
        _id,
        _createdAt,
        name,
        "slug":slug.current,\
        tags,
        "image":image.asset->url,
        url,
        content
    }`
  )
}


export async function getProject(slug:string):Promise<Project>{
    return createClient(config).fetch(
    groq`*[_type=="project" && slug.current==$slug][0]{
        _id,
        _createdAt,
        name,
        "slug":slug.current,
        "image":image.asset->url,
        url,
        content
    }`,
    {slug}
  );
}
