const listAllBlogs = {
    tags:['Blog'],
    description:"List all Blogs",
    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}

const getBlogById = {
    tags:['Blog'],
    description:"Get blog by id",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the blog",
            type:"string",
            example:"63caaf3527b29e1d399896da"
        }
    ],
    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}

export const blogRouteDocs = {
    "/api/blog/all":{
        get:listAllBlogs
    },
    "/api/blog/{id}":{
        get:getBlogById
    }
}