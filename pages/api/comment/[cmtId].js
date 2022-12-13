import { comments } from "../../../data/comment";

export default function commentId(req,res){

    const cmtId = req.query.cmtId
    console.log('Request.method: ',req.method);
    console.log('cmtId: ', cmtId);

    console.log('Data: ',req.body);

    if(req.method==='DELETE'){
        const filteredResult = comments.filter(cmt=>cmt.id !== Number(cmtId))

        const findOne = comments.find(cmt=>cmt.id===Number(cmtId))
        
        console.log('findOne: ',findOne);

        const findIndex = comments.findIndex(index=>index.id===findOne.id)

        console.log('findIndex: ',findIndex);
 
        comments.splice(findIndex,1)

        res.status(200).json({filteredResult})        

    }else if(req.method==='PATCH'){
        const {body} = req
        console.log('updateCmt: ',body.updateCmt);
    }

};