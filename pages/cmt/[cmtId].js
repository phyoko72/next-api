import {comments} from '../../data/comment'

const CommentId = ({cmtData}) => {
    console.log('dynamic: ',cmtData);
    return ( 
        <>
            <h1>Comment Id Page</h1>
            <p>Id: {cmtData.id}/ Title: {cmtData.text} </p>
        </>
     );
}
 
export default CommentId;

export async function getStaticPaths(){

    return({
        paths:[
            {
                params: {cmtId:'1'}
            }
        ],
        fallback: false
    })
}

export async function getStaticProps(context){
    console.log('Context: ',context);

    const data = comments

    const id = context.params.cmtId

    const finding = data.find(x=>x.id===Number(id))

    return {
        props:{
            cmtData: finding
        }
    }
};

