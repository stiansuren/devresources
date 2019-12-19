import { useState } from 'react';
import * as firebase from 'firebase/app';

type Data = {
    title: string,
    url: string,
    tags: Array<string>
}

export const AddLink = () => {

    const [data, setData] = useState({title: "", url: "", tags: [""]});

    const handleChange = (e :React.ChangeEvent<HTMLInputElement>) => {
        switch(e.target.name){
            case 'title':
                setData({...data, title: e.target.value})
                break;
            case 'url':
                setData({...data, url: e.target.value})
                break;
            case 'tags':
                const tags = e.target.value.split(", ")
                setData({...data, tags: tags})
                break;
        } 
    }

    const sendData = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addToDatabase(data);
    }

    return <div className="addLink">
        <h3>Add link</h3>
        <form id='form' onSubmit={sendData}>
            <label>
                Title:
                <input value={data.title} onChange={handleChange} type="text" name="title" />
            </label>
            <label>
                URL:
                <input value={data.url} onChange={handleChange} type="text" name="url" />
            </label>
            <label>
                Tag:
                <input key="tag" onChange={handleChange} type="text" name="tags" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    </div>
}

const addToDatabase = async (data :Data) => {
    firebase.firestore().collection('resources').add(data)
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}