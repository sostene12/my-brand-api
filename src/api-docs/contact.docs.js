const listAllContacts = {
    tags:['Contact'],
    description:"List all contacts",
    security: [
        {
          token: [],
        },
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

const messageById = {
    tags:['Contact'],
    description:"get the contact/message by id",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of message",
            type:"string",
            example:"63caaf3527b29e1d399896da"
        }
    ],
    security: [
        {
          token: [],
        },
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

const deleteContactById = {
    tags:['Contact'],
    description:"Delete the contact/message by id",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of message",
            type:"string",
            example:"63caaf3527b29e1d399896da"
        }
    ],
    security: [
        {
          token: [],
        },
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


export const contactRouteDocs = {
    "/api/contact/all":{
        get:listAllContacts
    },
    "/api/contact/{id}":{
        get:messageById
    },
    "/api/contact/create":{
        post:sendMessage,
    },
    "/api/contact/delete/{id}":{
        delete:deleteContactById
    }
}