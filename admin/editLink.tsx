import { useState, FormEvent } from "react";
import * as firebase from "firebase/app";
import { LinkProps } from "./link";

type EditProps = {
  link: LinkProps;
  handleUpdate: () => Promise<void>;
};

export const EditLink = ({ link, handleUpdate }: EditProps) => {
  const [title, setTitle] = useState(link.title);
  const [url, setUrl] = useState(link.url);
  const [tags, setTags] = useState(link.tags.join(", "));
  const [date, setDate] = useState(link.date);

  const sendData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateDatabase({
      id: link.id,
      title,
      url,
      tags: tags.split(", "),
      date
    });
    handleUpdate();
  };

  return (
    <form onSubmit={sendData}>
      <label>
        Title:
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          name="title"
        />
      </label>
      <label>
        URL:
        <input
          value={url}
          onChange={e => setUrl(e.target.value)}
          type="text"
          name="url"
        />
      </label>
      <label>
        Tags:
        <input
          value={tags}
          onChange={e => setTags(e.target.value)}
          type="text"
          name="tags"
        />
      </label>
      <label>
        Date:
        <input
          value={date}
          onChange={e => setDate(e.target.value)}
          type="text"
          name="date"
        />
      </label>
      <button>Submit</button>
    </form>
  );
};

const updateDatabase = async (link: LinkProps) => {
  try {
    await firebase
      .firestore()
      .collection("resources")
      .doc(link.id)
      .set(link);
    console.log("Link updated: ", link);
  } catch (e) {
    console.log("Failed to update database: ", e);
  }
};
