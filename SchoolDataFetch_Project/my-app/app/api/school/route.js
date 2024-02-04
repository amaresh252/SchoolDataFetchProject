import { con } from "@utils/database";

export const POST=async(req)=>{
    const {name,address,city,state,contact,image,email_id}=await req.json();
    try{
        const sql=`CREATE TABLE IF NOT EXISTS schooldata (
            id int AUTO_INCREMENT PRIMARY KEY,
            name TEXT,
            address VARCHAR(20),
            city VARCHAR(20),
            state VARCHAR(20),
            contact int,
            image TEXT,
            email_id TEXT
        )`;
       await con.query(sql);
       
       const  result=await con.query(`INSERT INTO schooldata (name,address, city, state, contact, image, email_id) VALUES ('${name}','${address}', '${city}', '${state}', ${contact}, '${image}', '${email_id}')`);
            if(!result){
                return new Response(JSON.stringify('Error in data insertion'),{status:400})
            }
            else{
                return new Response(JSON.stringify(result),{status:201})
            }
    }catch(err){
        return new Response(JSON.stringify('error in data insertion'),{status:400})
    }
}