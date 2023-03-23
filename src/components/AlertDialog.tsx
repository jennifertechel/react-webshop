import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";

interface AlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  onConfirm: () => void;
  confirmButtonText: string;
}

export default function MyAlertDialog(props: AlertDialogProps) {
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <AlertDialog
      isOpen={props.isOpen}
      leastDestructiveRef={cancelRef}
      onClose={props.onClose}
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader>{props.title}</AlertDialogHeader>
        <AlertDialogBody>{props.message}</AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={props.onClose}>
            Ångra
          </Button>
          <Button
            data-cy="confirm-delete-button"
            colorScheme="red"
            ml={3}
            onClick={props.onConfirm}
          >
            {props.confirmButtonText}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
