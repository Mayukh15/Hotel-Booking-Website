import { json } from "express";
import User from "../models/user.js";
import { Webhook } from "svix";

const clerkWebHooks=async (req,res)=>{
   try {
      //create a webhook instance with clerk webhook secret
        const wHook=new Webhook(process.env.CLERK_WEBHOOK_SECRET)
        const  headers={
            "svix-id" : req.headers["svix-id"],
            "svix-timestamp" : req.headers["svix-timestamp"],
            "svix-signature" : req.headers["svix-signature"],

        };
        //verifying headers
        await wHook.verify(JSON.stringify(req.body),headers);

        //Getting data from request
        const {data,type}=req.body;
        const userData={
            _id:data.id,
            email:data.email_addresses[0].email_address,
            username: data.first_name +"" + data.last_name,
            image: data.image_url ,

        }
        //switch for different Events
      switch (type) {
        case "user.created":{
            await User.create(userData)
            break;
        }
            
             case "user.updated":{
            await User.findByIdAndUpdate(data.id , userData)
            break;
        }
              case "user.deleted":{
            await User.findByIdAndDelete(data.id)
            break;
        }
            
        default:
            break;
      }
       return res.json({success:"true" , message:"WebHook Recieved"});
   } catch (error) {
       console.log(error.message);
      return   res.json({success:false, message:error.message});

       
   }
}

export default clerkWebHooks;