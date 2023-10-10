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
import AdditionalDataForm from "./AdditionalFieldsForm";

const DIALOG_DESCRIPTION_STEPS = [
  "Provide certification number",
  "Confirm details",
  "Add additional information and submit",
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

const WizardFooter = ({ handleSubmit }) => {
  const { activeStep, stepCount, nextStep, previousStep, isLastStep } = useWizard();
  return (
    <div className="flex justify-between items-center">
      <Button onClick={previousStep} variant="outline">Previous</Button>
      <span className="text-sm">{activeStep + 1} of {stepCount}</span>
      {isLastStep ? <Button onClick={handleSubmit}>Submit</Button> : <Button onClick={nextStep}>Next</Button>}
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

export type AdditionalFields = {
  asking_price: string;
  purchase_date: string;
  purchase_platform: string;
  purchase_price: string;
  personal_note: string;
}

const FIELDS: (keyof Slabs_Insert_Input)[] = Object.keys(sampleSlabsObject) as (keyof Slabs_Insert_Input)[];

const WizardModal = () => {
  const [cgcData, setCgcData] = useState({});
  const [additionalFields, setAdditionalFields] = useState<AdditionalFields>({ asking_price: "", purchase_date: "", purchase_platform: "", purchase_price: "", personal_note: "" });

  const handleSubmit = () => {
    const populatedAdditionalFields = filterEmptyFields(additionalFields);
    saveSlab({ ...cgcData, ...populatedAdditionalFields });
  };

  return (
    <Dialog>
      <DialogTrigger asChild><Button><PlusCircle className="mr-4" />Add New Slab </Button></DialogTrigger>
      <DialogContent>
        <Wizard header={<WizardHeader />} footer={<WizardFooter handleSubmit={handleSubmit} />}>
          <CertificationForm setCgcData={setCgcData} />
          <Review cgcData={cgcData} />
          <AdditionalDataForm additionalFields={additionalFields} setAdditionalFields={setAdditionalFields} />
        </Wizard>
      </DialogContent>
    </Dialog>
  );
};

export default WizardModal;

const filterEmptyFields = (fields: AdditionalFields): Partial<AdditionalFields> => {
  return Object.fromEntries(
    Object.entries(fields).filter(([_, value]) => value !== "")
  );
}

async function saveSlab(slab: Partial<Slabs_Insert_Input>) {
  const response = await fetch("/api/add-slab", {
    method: "POST",
    body: JSON.stringify(slab),
  });

  if (response.ok) {
    console.log("Slab saved successfully!");
  } else {
    console.error("Error saving slab");
    console.error(response);
  }
}
