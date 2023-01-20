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

export const blogRouteDocs = {
    "/api/blog/all":{
        get:listAllBlogs
    }
}