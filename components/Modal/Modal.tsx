import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

type ModalProps = {
  title: string;
  content: string;
  isOpen: any;
  onOpenChange: any;
};

export const ModalComponent = ({
  title,
  content,
  isOpen,
  onOpenChange,
}: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="bg-black">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>
              <p>{content}</p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
