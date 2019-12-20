import { useState } from 'react';
import * as firebase from 'firebase/app';
import { LinkProps } from './link';

type AddProps = {
    handleUpdate: () => Promise<void>
}

export const AddLink = ({ handleUpdate } :AddProps) => {

    const [title, setTitle] = useState(''); 
    const [url, setUrl] = useState(''); 
    const [tags, setTags] = useState(''); 
    const [date, setDate] = useState(''); 

    const sendData = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addToDatabase({title, url, tags: tags.split(', '), date});
        setTitle('');
        setUrl('');
        setTags('');
        setDate('');
        handleUpdate();
    }

    return <div className="addLink">
        <h3>Add link</h3>
        <form id='form' onSubmit={sendData}>
            <label>
                Title:
                <input value={title} onChange={e => setTitle(e.target.value)} type="text" name="title" />
            </label>
            <label>
                URL:
                <input value={url} onChange={e => setUrl(e.target.value)} type="text" name="url" />
            </label>
            <label>
                Tags:
                <input value={tags} onChange={e => setTags(e.target.value)} type="text" name="tags" />
            </label>
            <label>
                Date:
                <input value={date} onChange={e => setDate(e.target.value)} type="text" name="date" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    </div>
}

const addToDatabase = async (link :LinkProps) => {
    try{
        firebase.firestore().collection('resources').add(link);
        console.log("Document successfully written!");
    } catch(e){
        console.error("Error writing document: ", e);
    };
}