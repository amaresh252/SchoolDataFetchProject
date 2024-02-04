
import {con} from '@utils/database'

export const GET=async()=>{
    try{
      const result= await con.query('SELECT * FROM schooldata')
            if(!result){
                return new Response(JSON.stringify('Error in data fetching'),{status:400})
            }
            else{
                return new Response(JSON.stringify(result),{status:200})
               
            }
    }catch(err){
        return new Response(JSON.stringify('error in data fetching'),{status:400})
    }
}