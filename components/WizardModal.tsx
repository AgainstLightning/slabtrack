import { useState } from "react";
import { Wizard, useWizard } from "react-use-wizard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const WizardHeader = () => {
  const { activeStep, stepCount } = useWizard();
  return (
    <DialogHeader>
      <DialogTitle>Add slab</DialogTitle>
      <DialogDescription>
        Step {activeStep} of {stepCount}
      </DialogDescription>
    </DialogHeader>
  );
};

const WizardFooter = () => {
  return <div>Footer</div>;
};

const WizardModal = () => {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <Wizard header={<WizardHeader />} footer={<WizardFooter />}>
          <div>Step 1</div>
          <div>Step 2</div>
          <div>Step 3</div>
          <div>Step 4</div>
        </Wizard>
      </DialogContent>
    </Dialog>
  );
};

export default WizardModal;
