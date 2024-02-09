import { Wizard } from "./Wizard";
import { useState } from "react";
import { Box } from "@mui/material";

export default {
  title: "Components/Wizard",
  component: Wizard,
};

const Stepper = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevState) => prevState + 1);
  };

  const prevStep = () => {
    if (step > 1) {
      setStep((prevState) => prevState - 1);
    }
  };

  const handleStepperPrev = (step) => {
    setStep(step);
  };

  return (
    <Wizard
      currentStep={step}
      handleNext={nextStep}
      handlePrev={prevStep}
      handleStepperPrev={handleStepperPrev}
      steps={[
        {
          element: <Box minHeight={"300px"}>Step 1</Box>,
          label: "Step 1",
          title: "This is step 1",
          Controller: null,
        },
        {
          element: <Box minHeight={"300px"}>Step 2</Box>,
          label: "Step 2",
          title: "This is step 2",
          Controller: null,
        },
        {
          element: <Box minHeight={"300px"}>Step 3</Box>,
          label: "Step 3",
          title: "This is step 3",
          Controller: null,
        },
        {
          element: <Box minHeight={"300px"}>Step 4</Box>,
          label: "Step 4",
          title: "This is step 4",
          Controller: null,
        },
        {
          element: <Box minHeight={"300px"}>Step 5</Box>,
          label: "Step 5",
          title: "Final Step",
          Controller: {
            action: "final step",
            stepCallback: () => alert("form finished"),
          },
        },
      ]}
    />
  );
};

export const Default = Stepper.bind({});
