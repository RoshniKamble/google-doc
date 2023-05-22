import { Modal, ModalBody, ModalFooter } from "@material-tailwind/react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { Link } from "react-router-dom";
import { useState} from "react";

const DocRow = ({ id, fileName, date }) => {
  const [showModal, setShowModal] = useState(false);
  const toggle = () => setShowModal(!showModal);

  return (
    <>
      <div className="flex max-w-3xl mx-auto items-center p-4 rounded-lg hover:bg-gray-300 cursor-pointer text-gray-700 text-sm">
        <Icon name="article" size="3xl" color="blue" />

        <Link to={`/doc`} className="flex items-center w-full">
          <p className="flex-grow pl-5 pr-10">{fileName}</p>
          <p className="pr-5 text-sm truncate">
            {`${new Date(date).toDateString()} at ${new Date(date).toLocaleTimeString()}`}
          </p>
        </Link>
        <Button
          color="gray"
          buttonType="outline"
          ripple="dark"
          iconOnly={true}
          rounded={true}
          className="border-0 block"
          onClick={() => setShowModal(true)}
        >
          <Icon name="delete" size="3xl" />
        </Button>
      </div>
      <Modal size="sm" active={showModal} toggler={toggle}>
        <ModalBody>Do you really want to delete this document?</ModalBody>
        <ModalFooter>
          <Button color="red" ripple="dark" type="submit">
            Yes
          </Button>
          <Button
            color="blue"
            buttonType="link"
            onClick={() => setShowModal(false)}
            ripple="dark"
          >
            No
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default DocRow;
