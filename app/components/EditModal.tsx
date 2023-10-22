"use client"

import { useState } from "react";
import { Wizard } from "react-use-wizard";
import { Button } from "./ui/button"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Pencil } from "lucide-react";
import { Slabs_Insert_Input } from "@/lib/gql/types";
import AdditionalDataForm from "./AdditionalFieldsForm";
import Footer from "./WizardModal/Footer";

const WizardHeader = () => {
  return (
    <DialogHeader>
      <DialogTitle>Update slab</DialogTitle>
      <DialogDescription>
        Provide updated details
      </DialogDescription>
    </DialogHeader>
  );
};

export type AdditionalFields = {
  asking_price: string;
  purchase_date: string;
  purchase_platform: string;
  purchase_price: string;
  personal_note: string;
}

const DEFAULT_VALUES: AdditionalFields = {
  asking_price: "",
  purchase_date: "",
  purchase_platform: "",
  purchase_price: "",
  personal_note: "",
};

const EditModal = ({ slab }: { slab: any }) => {
  const [additionalFields, setAdditionalFields] = useState<AdditionalFields>({ ...DEFAULT_VALUES });

  const handleSubmit = () => {
    const populatedAdditionalFields = filterEmptyFields(additionalFields);
    updateSlab({ id: slab.id, ...populatedAdditionalFields });
  };

  return (
    <Dialog>
      <DialogTrigger asChild><Button variant="ghost" size="icon"><Pencil width={20} height={20} /></Button></DialogTrigger>
      <DialogContent>
        <Wizard header={<WizardHeader />} footer={<Footer handleSubmit={handleSubmit} />}>
          <AdditionalDataForm additionalFields={additionalFields} setAdditionalFields={setAdditionalFields} />
        </Wizard>
      </DialogContent>
    </Dialog>
  );
};

export default EditModal;

const filterEmptyFields = (fields: AdditionalFields): Partial<AdditionalFields> => {
  return Object.fromEntries(
    Object.entries(fields).filter(([_, value]) => value !== "")
  );
}

async function updateSlab(slab: Partial<Slabs_Insert_Input> | any) {
  const response = await fetch("/api/update-slab", {
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
