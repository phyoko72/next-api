import {comments} from '../../../data/comment';

export default function handler(req,res){
    console.log('Request@index: ',req.method);
    console.log('Data@index: ',req.body);

    if(req.method==='GET'){

        res.status(200).json(comments)

    }else if(req.method==='POST'){

        const newComment = {
            id: Date.now(),
            text: req.body
        }
        comments.push(newComment)
        
        res.status(201).json({apiReturn:newComment})
    };
    
}
