import React from "react";
import ListSection from "../ListSection";
import { useRef } from "react";

export default function NewBridgesForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value
    const enteredImage = imageInputRef.current.value
    const enteredAddress = addressInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value

    const bridgeData = {
        title: enteredTitle,
        image: enteredImage,
        adress: enteredAddress,
        description: enteredDescription
    }

    props.onAddBridges(bridgeData)
  }

  return (
    <ListSection>
      <form className="form" onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="title">Bridge Title</label>
          <input type="text" required id="title" ref={titleInputRef}/>
        </div>
        <div className="control">
          <label htmlFor="image">Bridge Image</label>
          <input type="url" required id="image" ref={imageInputRef}/>
        </div>
        <div className="control">
          <label htmlFor="address">Bridge address</label>
          <input type="text" required id="address" ref={addressInputRef}/>
        </div>
        <div className="control">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows="5"
            required
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className="actions">
          <button className="btn">Add Bridge</button>
        </div>
      </form>
    </ListSection>
  );
}
