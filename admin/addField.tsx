import { useState } from "react";
import * as firebase from 'firebase/app';

export const AddField = () => {
    const [field, setField] = useState('');

    return <form onSubmit={e => addFieldToLinksInDatabase(e, field)}>
        <label><h3>New field title</h3></label>
        <input value={field} type="text" onChange={e => setField(e.target.value)}/>
        <input type="submit" value="Submit" />
    </form>
}

const addFieldToLinksInDatabase = async (e :React.FormEvent<HTMLFormElement>, field :string) => {
    e.preventDefault();
    try{
        const snapshot = await firebase.firestore().collection('resources').get();
        const docs = snapshot.docs;
        docs.map(doc => {
            firebase.firestore().collection('resources').doc(doc.id).set(
                {
                    ...doc.data(),
                    [field]: ""
                }
            );
        })
    } catch(e){
        console.error("Error writing document: ", e);
    };
}