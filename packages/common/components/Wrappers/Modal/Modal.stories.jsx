import Modal from "./index";
import { useState } from "react";
import { Box, Button } from "@mui/material";

export default {
  title: "Wrappers/Modal",
  component: Modal,
};

const Template = ({ theme, ...args }) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setDeleteShowModal] = useState(false);
  const [showDisabledModal, setShowDisabledModal] = useState(false);

  return (
    <Box height={"70vh"}>
      <Box>
        <Button onClick={() => setShowModal(true)}>Show Normal Modal</Button>
      </Box>
      <Box>
        <Button onClick={() => setDeleteShowModal(true)}>
          Show Delete Modal
        </Button>
      </Box>
      <Box>
        <Button onClick={() => setShowDisabledModal(true)}>
          Show Modal with disabled action
        </Button>
      </Box>
      <Modal
        open={showModal}
        header={"Modal header"}
        action={"Action"}
        callToAction={() => alert("Call to action")}
        cancelAction={() => setShowModal(false)}
        closeModal={() => setShowModal(false)}
      >
        This is modal content, modal is always rendered in the cennter of the
        page
      </Modal>
      <Modal
        open={showDeleteModal}
        header={"Modal header"}
        action={"Action"}
        callToAction={() => alert("Call to action")}
        cancelAction={() => setDeleteShowModal(false)}
        closeModal={() => setDeleteShowModal(false)}
        callToActionIsDelete={true}
      >
        This is modal content, modal is always rendered in the cennter of the
        page
      </Modal>
      <Modal
        open={showDisabledModal}
        header={"Modal header"}
        action={"Action"}
        callToAction={() => alert("Call to action")}
        cancelAction={() => setShowDisabledModal(false)}
        closeModal={() => setShowDisabledModal(false)}
        disabled={true}
      >
        This is modal content, modal is always rendered in the cennter of the
        page
      </Modal>
    </Box>
  );
};

export const Default = Template.bind({});
