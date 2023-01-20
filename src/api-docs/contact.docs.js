const sendMessage = {
    tags:['Contact'],
    description:"Send message",
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        fullName:{
                            type:"string",
                            description:"Your name",
                            example:"Kaleb curry"
                        },
                        email:{
                            type:"string",
                            description:"your email",
                            example:"kalebcurry@gmail.com"
                        },
                        message:{
                            type:"string",
                            description:"the message you want to send",
                            example:"hi, i want to give you a job"
                        },
                    }
                }
            }
        }
    },
    responses:{
        201:{
            description:"OK",
            content:{
                "application/json":{
                    type:"object",
                    example:{
                        status:"success",
                        data:[]
                    }
                }
            }
        }
    }
}


export const contactRouteDocs = {
    "/api/contact/create":{
        post:sendMessage,
    }
}