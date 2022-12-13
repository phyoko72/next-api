import { useEffect, useState } from "react"

const CommentPage = () => {

    const [comments,setComments] = useState({
        isUpdate:false,
        comment:[]
    })

    const [effcmt, setEffcmt] = useState([]);

    const [newCmt, setNewCmt] = useState('');

    const [updateCmt, setUpdateCmt] = useState({
        id:0,
        cmt:''
    });

    const handleInput = e =>{
        console.log('Input: ',e.target.value);
        setNewCmt(e.target.value)
    }

    const handleSubmit = e =>{
        e.preventDefault()
        console.log('Form Submit');
        fetch('/api/comment',{
            method:'POST',
            body: JSON.stringify({newCmt}),
            headers:{type:'application/json'}
        }).then(res=>res.json())
        .then(data=>{
            console.log('Return from api: ',data);
        }).catch(err=>{
            console.log('err: ',err);
        })
    };

    const delCmt = (id) =>{
        console.log('delete Comment Id: ',id);
        fetch('/api/comment/'+id,{
            method:'DELETE',
            body: JSON.stringify({id}),
            headers:{type:'application/json'}
        }).then(res=>res.json())
        .then(data=>{
            setEffcmt(prev=>data.filteredResult)
            fetchCmt()
            console.log('Return from api: ',data);
        }).catch(err=>{
            console.log('err: ',err);
        })
    };

    useEffect(()=>{
        async function yama () { 
            const res = await fetch('/api/comment')
            const data = await res.json()
            console.log('useEffect: ',data);
            setEffcmt(data)
        }
        yama()

        console.log('Data fetching in useEffect');
    },[])

    const fetchCmt = async()=>{
        console.log('fetching Comment Rendered');
        const res = await fetch('/api/comment')
        const data = await res.json()
        setComments(prev=>{
            return{...prev,comment:data}
        })
    };

    const handleUpdate = (cmt,id) =>{
        
        setUpdateCmt({id,cmt})

        const copy = [...comments.comment]

        copy.map(x=>{
            if(x.id===id){
                x.text = cmt
            }
        })

        setComments(prev=>{
            return{
                ...prev,
                comment: copy
            }
        })
    };

    const handleUpdateSubmit = async () =>{

        // const res = await fetch(`/api/${updateCmt.id}`,{
        //     method: 'UPDATE',
        //     body: JSON.stringify({updateCmt}),
        //     headers: {
        //         type: 'application/json'
        //     }
        // })

        // const data = await res.json()

        fetch(`/api/comment/${updateCmt.id}`,{
            method:'PATCH',
            body: JSON.stringify({updateCmt}),
            headers:{type:'application/json'}
        }).then(res=>res.json())
        .then(data=>{

            console.log('Return from api: ',data);
        }).catch(err=>{
            console.log('err: ',err);
        })


    }

    const handleEditBtn = (e) =>{
        console.log('event: ',e);
        console.log('nextElementSibling: ',e.target.nextElementSibling.style.display);
        console.log('nextSibling: ',e.target.nextSibling.style);
        // e.target.nextSibling.hidden = true
        e.target.nextElementSibling.style.display = ''
    }



    return ( 
        <>
            <h1>Comment Page</h1>
            <button onClick={fetchCmt}>Load Comment</button>
            <form onSubmit={handleSubmit} method="post">
                <input type="text" onChange={handleInput} placeholder="Type your comment" name="comment" id="" />
   
                <button>Comment</button>
            </form>
            <hr />
            <ul>
                {
                    comments.comment.map(cmt=>(
                        <li key={cmt.id}>
                            <b>No.</b> {cmt.id}/  <b>Text:</b> <span 
                            
                            >{cmt.text}</span>.
                        
                            <div>
                                <button className={cmt.id} onClick={handleEditBtn}>Edit</button>
                                <input style={{'display':'none'}} type="text" name="updateCmt" id="" 
                                onBlur={handleUpdateSubmit} 
                                onChange={(e)=>handleUpdate(e.target.value,cmt.id)} 
                                value={cmt.text}/>                                
                            </div>

                            <button onClick={()=>delCmt(cmt.id)}>Delete</button>
                            <br />
                        </li>
                    ))
                }
            </ul>
            <hr />
            <h3>UseEffect</h3>
            <ol>
                {
                    effcmt.map(eff=>(
                        <li key={eff.id}>
                            No.{eff.id}/ Text: {eff.text}
                        </li>
                    ))
                }
            </ol>

        </> 
    );
}
 
export default CommentPage;