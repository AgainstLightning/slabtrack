"use client"
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
import { PlusCircle } from "lucide-react";
import { Slabs_Insert_Input } from "@/lib/gql/types";
import Review from "./Review";

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

const CertificationForm = ({ setCgcData }) => {
  return <SearchField setCgcData={setCgcData} />
}

const sampleSlabsObject: Slabs_Insert_Input = {
  art_comments: undefined,
  asking_price: undefined,
  certification_number: undefined,
  created_at: undefined,
  grade: undefined,
  grade_category: undefined,
  grade_date: undefined,
  grader_notes: undefined,
  id: undefined,
  issue: undefined,
  issue_date: undefined,
  issue_year: undefined,
  key_comments: undefined,
  page_quality: undefined,
  personal_note: undefined,
  publisher: undefined,
  purchase_date: undefined,
  purchase_platform: undefined,
  purchase_price: undefined,
  signatures: undefined,
  title: undefined,
  updated_at: undefined,
  variant: undefined,
};

const FIELDS: (keyof Slabs_Insert_Input)[] = Object.keys(sampleSlabsObject) as (keyof Slabs_Insert_Input)[];

const Confirmation = ({ cgcData }) => {
  console.log("cgcData", cgcData);
  console.log("FIELDS", FIELDS)
  return cgcData ? <div>{JSON.stringify(cgcData)}</div> : <div>Loading...</div>
}

const WizardModal = () => {
  const [cgcData, setCgcData] = useState(null);

  return (
    <Dialog>
      <DialogTrigger asChild><Button><PlusCircle className="mr-4" />Add New Slab </Button></DialogTrigger>
      <DialogContent>
        <Wizard header={<WizardHeader />} footer={<WizardFooter />}>
          <CertificationForm setCgcData={setCgcData} />
          <Review cgcData={cgcData} />
          <div>Step 2</div>
          <div>Step 3</div>
          <div>Step 4</div>
        </Wizard>
      </DialogContent>
    </Dialog>
  );
};

export default WizardModal;
