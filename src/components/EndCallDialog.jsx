import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import React from "react";

const EndCallDialog = ({ open, setOpen }) => {
  return (
    <Dialog size="sm" open={open}>
      <DialogHeader className="text-xl">
        Do you want to end this call?
      </DialogHeader>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={() => setOpen(false)}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={() => window.close()}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default EndCallDialog;
