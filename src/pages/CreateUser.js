import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { uploadImage } from './../actions/productAction';
import { createUser } from './../actions/userAction';


export default function UserForm(){
    const navigate = useNavigate()
    const [source, setSource] = useState("")
    const [user, setUser] = useState({
        "name": "",
        "email": "",
        "password": "",
        "role": "customer",
        "avatar": "https://api.lorem.space/image/face?w=640&h=480"
    })
    const handleInputChange = (e) => {
        console.log(e)
        const {name, value} = e.target
        setUser(prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    const onFileUploadHandler = (e) => {
        console.log(e.target.files[0])
        setSource(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("handle submit")
        const formData = new FormData()
        formData.append("file", source)
        uploadImage(formData)
        .then(response => {
            user.images = [response.data.location]
            console.log(user)
            createUser(user)
            .then(resp => {
                console.log(resp)
                alert("Insert User Sucess")
                navigate("/")
            })
        })
    }
  
    return(
        <form 
            className="mt-5 w-50 m-auto"
            onSubmit={handleSubmit}
        >
        <h1 className="text-center">Create Account</h1>
        <div className="mb-3">
            <label htmlFor="name" class="form-label">Name</label>
            <input 
                type="text" 
                class="form-control"
                placeholder="Chhel Chhempanha"
                name="name"
                onChange={handleInputChange}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
                type="text" 
                className="form-control"
                placeholder="panhach349@gmail.com"
                name="email"
                onChange={handleInputChange}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
                type="password" 
                className="form-control"
                placeholder="**********"
                name="password"
                onChange={handleInputChange}
            />
        </div>
        <div className="mb-3">
                <label htmlFor="avatar" className="form-label">Upload Image</label>
                <input 
                    type="file" 
                    className="form-control"
                    name="avatar"
                    onChange={onFileUploadHandler}
                />
            </div>
            
            <div className="mb-3">
                <img className="w-50" 
                    src={source && URL.createObjectURL(source)} alt="" />
            </div>
            <button 
                type="submit" 
                class="btn btn-primary mt-4 w-100"
            >Create Account</button>
        </form>
    )
}