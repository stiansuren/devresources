import { useState, useEffect, useContext } from "react";
import firebase from "../utils/firebase";

import { ContentList } from "./contentList";
import { AddLink } from "./addLink";
import { AddField } from "./addField";
import { AuthContext } from "./authContext";

export const AdminContent = () => {
  const [links, setLinks]: any = useState([]);

  const { handleSignOut } = useContext(AuthContext);

  const handleUpdate = async () => {
    const updatedLinks = await getLinksFromDatabase();
    setLinks(updatedLinks);
  };

  useEffect(() => {
    handleUpdate();
  }, []);

  return (
    <>
      <button onClick={handleSignOut}>Sign out</button>
      <ContentList handleUpdate={handleUpdate} links={links} />
      <AddLink handleUpdate={handleUpdate} />
      <AddField />
    </>
  );
};

const getLinksFromDatabase = async () => {
  try {
    const snapshot = await firebase
      .firestore()
      .collection("resources")
      .orderBy("title")
      .get();
    return snapshot.docs.map(doc => {
      const data = doc.data();
      const id = doc.id;
      return {
        title: data.title,
        url: data.url,
        id: id,
        tags: data.tags,
        date: data.date
      };
    });
  } catch (e) {
    console.error("Error getting links: ", e);
    return [];
  }
};
