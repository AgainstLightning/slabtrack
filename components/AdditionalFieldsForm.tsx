import { AdditionalFields } from "./EditModal";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

type AdditionalFieldsProps = {
  additionalFields: AdditionalFields;
  setAdditionalFields: React.Dispatch<React.SetStateAction<AdditionalFields>>;
};

const AdditionalFieldsForm: React.FC<AdditionalFieldsProps> = ({ additionalFields, setAdditionalFields }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    console.log("deployyyyyy");
    setAdditionalFields(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <form>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <Label htmlFor="purchase_price" className="font-medium">Purchase Price</Label>
          <Input type="text" id="purchase_price" name="purchase_price" value={additionalFields.purchase_price} onChange={handleChange} className="p-2 border rounded-md" />
          <Label htmlFor="purchase_date" className="font-medium">Purchase Date</Label>
          <Input type="date" id="purchase_date" name="purchase_date" value={additionalFields.purchase_date} onChange={handleChange} className="p-2 border rounded-md" />
        </div>
        <div>
          <Label htmlFor="asking_price" className="font-medium">Asking Price</Label>
          <Input type="text" id="asking_price" name="asking_price" value={additionalFields.asking_price} onChange={handleChange} />
          <Label htmlFor="purchase_platform" className="font-medium">Purchase Platform</Label>
          <Input type="text" id="purchase_platform" name="purchase_platform" value={additionalFields.purchase_platform} onChange={handleChange} className="p-2 border rounded-md" />
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <Label htmlFor="personal_note" className="font-medium">Personal Note</Label>
        <Textarea id="personal_note" name="personal_note" rows={4} value={additionalFields.personal_note} onChange={handleChange} className="p-2 border rounded-md"></Textarea>
      </div>
    </form>
  );
};

export default AdditionalFieldsForm;
