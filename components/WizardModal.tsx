import { useState } from "react";
import { Wizard, useWizard } from "react-use-wizard";

const WizardHeader = () => {
  const { activeStep, stepCount } = useWizard();
  return <div>Add Item step: {activeStep + "/" + stepCount}</div>;
};

const WizardFooter = () => {
  return <div>Footer</div>;
};

const WizardModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    console.log("clicked");
    setIsOpen(true);
  };

  return (
    <>
      <button onClick={handleClick}>Open Modal</button>
      {isOpen && (
        <Wizard header={<WizardHeader />} footer={<WizardFooter />}>
          <div>Step 1</div>
          <div>Step 2</div>
          <div>Step 3</div>
          <div>Step 4</div>
        </Wizard>
      )}
    </>
  );
};

export default WizardModal;
