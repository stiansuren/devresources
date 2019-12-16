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
                const data = {title: doc.data().title, URL: doc.data().URL, id: doc.id};
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
            return <li key={resource.id}><a className="resource" href={resource.URL}>{resource.title} -></a></li>
        })}
    </div>
}