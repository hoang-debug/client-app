import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../InputFields/Input";
import "./modalPost.css";
import {createPost} from "../../redux/postSlice"

const ModalPost = (props) => {
  const { isOpenPost, setOpenPost } = props;

  const [title, setTitle] = useState("Add a title");
  const [desc, setDesc] = useState("Add descriptions");
  const tags = ["None", "Hot", "NSFW", "New", "Quotes"];
  const [selectedIdx, setSelectedIdx] = useState(0);
  const dispatch = useDispatch();
  const handlePost = ()=> {
    setOpenPost(false);
    const newPost = {
      title: title,
      description: desc,
      tag: selectedIdx
    };
    dispatch(createPost(newPost));
  }
  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        <p className="makepost-save" onClick={handlePost}>ADD</p>
      </div>
      <Input
        data={title}
        inputType="textarea"
        setData={setTitle}
        label="Title"
        classStyle="makepost-title"
      />
      <Input
        className="makepost-desc"
        data={desc}
        label="Descriptions"
        setData={setDesc}
        inputType="textarea"
      />
      <label>
        <div className="makepost-tags">
          {tags.map((tag, index) => {
            return (
              <button
                key={index}
                className={`${
                  selectedIdx === index
                    ? `makepost-tags-selected`
                    : `makepost-tags-${tag}`
                }`}
                onClick={() =>setSelectedIdx(index)}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </label>
    </section>
  );
};

export default ModalPost;
