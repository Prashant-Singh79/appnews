import NextAuth from "next-auth"

import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({

    providers:[
        CredentialsProvider({
            name:"credentials",
            credentials:{
                username:{label : "Email", type:"text", placeholder:"Enter email"},
                password:{label : "Password", type:"password"},

            },
            authorize: (credentials)=>{

                if(credentials.username==="john" && credentials.password==="test"){
                    return {
                        id:2,
                        name:"john",
                        email:"123@gmail.com"
                    };
                }

                return null;
            },
        }),
    ],

    callbacks:{
        jwt:async ({token,user}) =>{
            if(user){
                token.id=user.id
            }
            return token;
        },
        session : ({session,token })=>{

            if(token){
                session.id=token.id
            }
                return session;
        },
    },

    secret:"test",
    jwt:{ secret:"test",
    encryption:true,

    },
});