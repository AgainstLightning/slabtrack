import { useState } from "react";
import { Wizard, useWizard } from "react-use-wizard";
import { Button } from "@/components/ui/button"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import SearchField from "./SearchField";
import { Plus } from "lucide-react";

const DIALOG_DESCRIPTION_STEPS = [
  "Provide your slab's certification number",
  "Confirm your slab's details",
  "Provide additional information about your slab",
  "Review your slab submission"
];

const WizardHeader = () => {
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

const WizardFooter = () => {
  const { activeStep, stepCount, nextStep, previousStep, isLastStep, handleStep } = useWizard();
  console.log("activeStep", activeStep)
  return (
    <div className="flex justify-between items-center">
      <Button onClick={previousStep} variant="outline">Previous</Button>
      <span className="text-sm">{activeStep + 1} of {stepCount}</span>
      {isLastStep ? <Button>Submit</Button> : <Button onClick={nextStep}>Next</Button>}
    </div>
  );
};

const CertificationForm = () => {
  const { handleStep } = useWizard();
  handleStep(() => `transitioning from step 1`);
  return <SearchField />
}

const WizardModal = () => {
  return (
    <Dialog>
      <DialogTrigger><Button><Plus className="mr-4" />Add New Slab </Button></DialogTrigger>
      <DialogContent>
        <Wizard header={<WizardHeader />} footer={<WizardFooter />}>
          <CertificationForm />
          <div>Step 2</div>
          <div>Step 3</div>
          <div>Step 4</div>
        </Wizard>
      </DialogContent>
    </Dialog>
  );
};

export default WizardModal;
