import { useWizard } from "react-use-wizard";
import { Button } from "../ui/button";

const Footer = ({ handleSubmit }) => {
  const { activeStep, stepCount, nextStep, previousStep, isLastStep } = useWizard();
  return (
    <div className="flex justify-between items-center">
      {stepCount > 1 && (<Button onClick={previousStep} variant="outline">Previous</Button>)}
      {stepCount > 1 && (<span className="text-sm">{activeStep + 1} of {stepCount}</span>)}
      {isLastStep ? <Button type="submit" className="ml-auto" onClick={handleSubmit}>Submit</Button> : <Button onClick={nextStep}>Next</Button>}
    </div>
  );
};

export default Footer;
