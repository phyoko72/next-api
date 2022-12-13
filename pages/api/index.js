export default function handler(req,res,next){
    console.log('what is req: ',req);
    res.status(200).json({"testing":"Test API"})
}