import { useWizard } from "react-use-wizard";
import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";

const DIALOG_DESCRIPTION_STEPS = [
  "Provide certification number",
  "Confirm details",
  "Add additional information and submit",
];

const Header = () => {
  const { activeStep } = useWizard();

  return (
    <DialogHeader>
      <DialogTitle>Add slab</DialogTitle>
      <DialogDescription>
        {DIALOG_DESCRIPTION_STEPS[activeStep]}
      </DialogDescription>
    </DialogHeader>
  );
};

export default Header;


