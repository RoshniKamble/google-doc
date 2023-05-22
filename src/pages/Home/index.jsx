import React, { useState } from "react";
import { useHistory } from "react-router";


import Header from "../../components/Header";
import DocRow from "../../components/DocRow";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Modal from "@material-tailwind/react/Modal";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import ModalBody from "@material-tailwind/react/ModalBody";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState("");
  const [userDocs, setUserDocs] = useState([]);
  const history = useHistory();

  const createDoc = () => {
    if (!input) return;

    const newDoc = {
      id: userDocs.length + 1,
      name: input,
      time: new Date().toISOString()
    };

    setUserDocs([...userDocs, newDoc]);

    setInput("");
    setShowModal(false);
  };

  const modal = (
    <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createDoc();
        }}
      >
        <ModalBody>
          <input
            type="text"
            className="outline-none w-full bg-gray-200 p-3 rounded-md"
            placeholder="Enter name of the document."
            onChange={({ target }) => setInput(target.value)}
            value={input}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            color="blue"
            buttonType="link"
            onClick={() => setShowModal(false)}
            ripple="dark"
          >
            Cancel
          </Button>
          <Button color="blue" onClick={createDoc} ripple="dark" type="submit">
            Create
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );

  const goToEditor = (docId) => {
    history.push(`/${docId}`);
  };

  return (
    <>
      <Header />
      {modal}
      <section className="bg-[#f8f9fa] p-2 w-full mx-auto md:pb-10 md:px-10">
        <div className="max-w-3xl w-full mx-auto">
          <div className="py-6 flex items-center justify-between">
            <h2 className="text-gray-700">Start a new document</h2>
            <Button
              color="gray"
              ripple="dark"
              buttonType="outline"
              iconOnly={true}
              className="border-0"
            >
              <Icon name="more_vert" size="3xl" />
            </Button>
          </div>
          <div>
            <div
              className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700"
              onClick={() => setShowModal(true)}
            >
              <img src="https://links.papareact.com/pju" alt="add-doc" />
            </div>
            <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">
              Blank
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white w-full md:px-10 md:mb-20">
        <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
          <div className="flex p-4 items-center justify-between">
            <h2 className="font-medium flex-grow">My Documents</h2>
            <p className="mr-12">Date Created</p>
            <Icon name="folder" size="3xl" color="gray" />
          </div>
        </div>
        {userDocs.length === 0 ? (
          <div className="w-full text-center py-5">No documents</div>
        ) : (
          userDocs.map((doc) => (
            <DocRow
              key={doc.id}
              id={doc.id}
              fileName={doc.name}
              date={doc.time}
              onClick={() => goToEditor(doc.id)}
            />
          ))
        )}
      </section>
    </>
  );
};

export default Home;
