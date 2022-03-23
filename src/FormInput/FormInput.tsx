import React , { useState} from 'react';
// import { InputState} from '../Interfaces/Interface'

const defaultValue = {
    title : "",
    body :""
}

const FormInput = () => {
    const [ input , setInput] = useState (defaultValue)
    const { title , body} = input;

    const OnChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
        setInput((pre)=>({
            ...pre,
            [e.target.id]: e.target.value,

        }));

    };
    const Submit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(input , "INPUT");
        setInput(defaultValue);
        
    }
    

  return (
    <div> <form onSubmit={ Submit}> 
        <label>Title</label>
        <input type="text" value={title} onChange={OnChange} id="title"/>
        <label>Body</label>
        <input type="text" value={body} onChange={ OnChange} id="body"/>
        <button type="submit" > Submit</button>
        </form>
    </div>
  )
}

export default FormInput