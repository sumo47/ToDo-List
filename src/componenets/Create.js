import { useState } from "react";
import axios from 'axios' //

function Create() {
    const [title, setTitle] = useState("") //
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("")

    const CreateTodo = async function (event) {

        event.preventDefault();
        let url = "https://localhost:3001/createtask";
        await axios.post(url, { title, description, status })
            .then((res) => {
                alert("TodoList created successfully")
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }
    return (
        <>
            <div className='container mt-5'>
                <form onSubmit={CreateTodo} className='shadow-none p-3 mb-5 bg-light rounded'>
                    <h1>Create ToDo</h1>
                    <input type='text' placeholder="Title" onChange={(e) => setTitle(e.target.value)} /><br />
                    <input type='text' placeholder="description" onChange={(e) => setDescription(e.target.value)} /><br />
                    <input type='text' placeholder="status" onChange={(e) => setStatus(e.target.value)} /><br />
                    <button type='button' className='btn btn-outline-success btn-fluid'>Submit</button>
                </form>
            </div>

        </>
    )
}
export default Create