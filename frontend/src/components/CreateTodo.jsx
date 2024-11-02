import React, { useState }  from "react";

function CreateTodo(props){

    const [title,setTitle]= useState("")
    const [description,setDescription]= useState("")
    return(
        <div>
            <input style={{padding:10 , margin:10}} type="text" onChange={function(e){
                const value = e.target.value
                setTitle(e.target.value)
            }} placeholder="Title" /> <br />
            <input style={{padding:10 , margin:10}} type="text" onChange={function(e){
                const value = e.target.value
                setDescription(e.target.value)
            }} placeholder="Description" /> <br />

            <button onClick={()=>{
                fetch("http://localhost:3000/todos",{
                    method:"POST",
                    body:JSON.stringify({
                        title:title,
                        description:description
                    }),
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
                .then(async function(res){
                    const json = await res.json()
                })
            }} >Add a ToDo</button>
        </div>
    )
}

export default CreateTodo