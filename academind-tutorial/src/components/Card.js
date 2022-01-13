import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Card(props) {
  const [modalShow, setModalShow] = useState(false);

  function modalHandler() {
    setModalShow(true)
  }
  function closeModalHandler() {
    setModalShow(false)
  }
  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={modalHandler}>
            show modal
          </button>
        </div>
      </div>
      {modalShow ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> : null}
      {modalShow && <Backdrop onClose={closeModalHandler}/>}
    </div>
  );
}

export default Card;
