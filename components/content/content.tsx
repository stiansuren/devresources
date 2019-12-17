import React, { useEffect, useState } from "react";
import firebase from '../../utils/firebase';
import './content.scss';

const test_resources: Array<object> = [
  {id: '7jaskhdfwe7', title: 'Grid Critters', URL: 'https://gridcritters.com'},
  {id: 'g37dh3h83h2',title: 'CSS Grid Garden', URL: 'https://cssgridgarden.com'}
];

let resources: Array<any> = [];

export const Content = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        firebase.firestore().collection('resources').get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                const data = {title: doc.data().title, URL: doc.data().URL, id: doc.id, tags: doc.data().tags};
                resources = [...resources, data];
                resources.sort((a, b) => (a.title > b.title) ? 1 : -1);
            });
            setLoading(false);
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    }, [loading]);

    return <div className="links">
        {resources.map((resource) => {
            return <li className="links__link" key={resource.id}>
                <a className="links__link__title" href={resource.URL}>{resource.title} -></a>
                {resource.tags.map((tag:any)=> <p className="links__link__tag">{tag}</p>)}
            </li>
        })}
    </div>
}