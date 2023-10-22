"use client"
import { useState } from "react";
import { Wizard, useWizard } from "react-use-wizard";
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import SearchField from "../SearchField";
import { PlusCircle } from "lucide-react";
import { Slabs_Insert_Input } from "@/lib/gql/types";
import Review from "../Review";
import AdditionalDataForm from "../AdditionalFieldsForm";
import Header from "./Header";
import { AdditionalFields } from "@/lib/types";
import Footer from "./Footer";

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

const WizardModal = () => {
  const [cgcData, setCgcData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [additionalFields, setAdditionalFields] = useState<AdditionalFields>({ asking_price: "", purchase_date: "", purchase_platform: "", purchase_price: "", personal_note: "" });
  const { toast } = useToast()

  const handleSubmit = () => {
    const populatedAdditionalFields = filterEmptyFields(additionalFields);
    saveSlab({ ...cgcData, ...populatedAdditionalFields }, toast);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild><Button><PlusCircle className="mr-4" />Add New Slab </Button></DialogTrigger>
      <DialogContent>
        <Wizard header={<Header />} footer={<Footer handleSubmit={handleSubmit} />}>
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

async function saveSlab(slab: Partial<Slabs_Insert_Input>, toast) {
  const response = await fetch("/api/add-slab", {
    method: "POST",
    body: JSON.stringify(slab),
  });

  if (response.ok) {
    const { data } = await response.json();
    toast({
      title: "Slab saved successfully!",
      description: `Certification #${data.insert_slabs_one.certification_number}`,
    })
  } else {
    const data = await response.json();
    toast({
      title: "Error saving slab!",
      variant: "destructive",
      description: data?.error?.message
    })
  }
}
