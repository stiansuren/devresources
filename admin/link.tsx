import { useState } from "react";
import * as firebase from "firebase/app";
import { EditLink } from "./editLink";

export type LinkProps = {
  title: string;
  id?: string;
  url: string;
  tags: Array<string>;
  date: string;
};

type LinksProps = {
  link: LinkProps;
  handleUpdate: () => Promise<void>;
};

export const Link = ({ link, handleUpdate }: LinksProps) => {
  const [edit, setEdit] = useState(false);

  const deleteData = async () => {
    await deleteFromDatabase(link.id);
    handleUpdate();
  };

  const update = async () => {
    setEdit(false);
    handleUpdate();
  };

  return (
    <tr>
      {edit ? (
        <td>
          <EditLink link={link} handleUpdate={update} />
        </td>
      ) : (
        <>
          <td>
            <a href={link.url}>{link.title}</a>
          </td>
          <td>{link.tags.join(", ")}</td>
          <td>{link.date}</td>
          <td>
            <button onClick={() => setEdit(true)}>Edit</button>
          </td>
          <td>
            <button onClick={() => deleteData()}>Delete</button>
          </td>
        </>
      )}
    </tr>
  );
};

const deleteFromDatabase = async (id: string | undefined) => {
  try {
    await firebase
      .firestore()
      .collection("resources")
      .doc(id)
      .delete();
    console.log("Document successfully deleted!");
  } catch (e) {
    console.log("Error removing document: ", e);
  }
};
