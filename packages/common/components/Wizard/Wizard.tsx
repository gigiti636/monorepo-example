import type { CSSProperties, FC, ReactNode } from "react";
import { Box, Button, Stack, Step, StepLabel, Stepper } from "@mui/material";
import type { BoxProps } from "@mui/material/Box";
import type { StepIconProps } from "@mui/material/StepIcon";
import BackButton from "../Inputs/BackButton";
import PageTitle from "../Content/PageTitle";
import { Suspense } from "react";
import { Fallback } from "../common";

export interface WizardStepType {
  element: ReactNode;
  label: string;
  title: string;
  Validator?: StepValidation | null;
}

interface StepValidation {
  action?: ReactNode;
  is_valid?: boolean;
  stepCallback?: () => void;
  stepHandler?: () => void;
  action_footer_hidden?: boolean;
}

interface WizardProps extends BoxProps {
  steps: WizardStepType[];
  currentStep: number;
  handleNext?: () => void;
  handlePrev?: () => void;
  handleStepperPrev?: (_page: number) => void;
  LayoutWrapper?: FC<{ children: ReactNode }> | null;
}
export const Wizard = ({
  steps,
  currentStep,
  handleNext,
  handlePrev,
  handleStepperPrev,
  LayoutWrapper,
  ...rest
}: WizardProps) => {
  const current = steps[currentStep - 1];

  const Next = () => {
    if (current?.Validator?.stepHandler) {
      current.Validator.stepHandler();
    } else {
      if (current?.Validator?.stepCallback) {
        current.Validator.stepCallback();
      }
      if (handleNext) {
        handleNext();
      }
    }
  };

  const nextStepWithValidation = () => {
    if (Array.isArray(steps) && currentStep <= steps.length - 1) {
      if (current.Validator) {
        if (CheckButtonControl()) {
          Next();
        }
      } else {
        Next();
      }
    } else {
      if (!current.Validator || !current.Validator.stepCallback) {
        throw new Error(
          "Step Validator.stepCallback is Mandatory for final step"
        );
      } else {
        current.Validator.stepCallback();
      }
    }
  };

  const CheckButtonControl = () => {
    const control = current.Validator;
    if (control === null || typeof control?.is_valid === "undefined") {
      return true;
    }

    if (!Object.prototype.hasOwnProperty.call(control, "is_valid")) {
      return true;
    } else {
      return !!(
        control &&
        Object.prototype.hasOwnProperty.call(control, "is_valid") &&
        control?.is_valid
      );
    }
  };

  const handlerStepperPrev = (step: number) => {
    if (handleStepperPrev) {
      handleStepperPrev(step);
    }
  };

  return (
    <Box display={"flex"} flexDirection={"column"} {...rest}>
      <Box display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"}>
        <Box display={"flex"} alignItems={"start"} flexDirection={"column"}>
          {handlePrev && <BackButton onClick={handlePrev} sx={{ px: 1 }} />}

          <PageTitle title={steps[currentStep - 1].title} />
        </Box>
        <StepController
          stepsLabel={steps.map((StepNode) => StepNode.label)}
          currentStep={currentStep}
          handleStepperPrev={handlerStepperPrev}
        />
      </Box>

      <Suspense fallback={<Fallback />}>
        {LayoutWrapper ? (
          <LayoutWrapper>{current["element"]}</LayoutWrapper>
        ) : (
          <Box flexGrow={1} display={"flex"} flexDirection={"column"}>
            {current["element"]}
          </Box>
        )}
      </Suspense>

      {!current?.Validator?.action_footer_hidden && (
        <Stack justifyContent={"end"} direction={"row"} spacing={1}>
          {handlePrev && (
            <Button color={"secondary"} onClick={handlePrev}>
              Cancel
            </Button>
          )}

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ minWidth: "140px" }}
            onClick={nextStepWithValidation}
            disabled={!CheckButtonControl()}
          >
            {current?.Validator?.action ?? "Next step"}
          </Button>
        </Stack>
      )}
    </Box>
  );
};

type StepController = {
  stepsLabel: string[];
  currentStep: number;
  handleStepperPrev: (_step: number) => void;
};
const StepController = ({
  stepsLabel,
  currentStep,
  handleStepperPrev,
}: StepController) => {
  const handleSetStepper = (goToStep: number, isActive: boolean) => {
    if (isActive) {
      handleStepperPrev(goToStep);
    }
  };

  return (
    <Box>
      <Stepper activeStep={currentStep - 2} alternativeLabel>
        {stepsLabel.map((label, index) => (
          <Step
            key={label}
            sx={{
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              paddingX: { xs: 1 / 2, sm: 0.7, md: 2 },
              display: "flex",
              fontSize: { xs: "medium", md: "x-large" },
              "& .MuiStepConnector-root": {
                top: "24px",
                left: "calc(-50% + 25px)",
                right: "calc(50% + 25px)",
                "& .MuiStepConnector-line": {
                  display: { xs: "none", sm: "inherit" },
                  borderTopWidth: "3px",
                  borderColor:
                    index < currentStep ? "primary.main" : "text.secondary",
                },
                "& .MuiStepLabel-iconContainer": {
                  display: { xs: "none", sm: "inherit" },
                },
              },
              "& .MuiStepLabel-iconContainer .MuiBox-root": {
                borderRadius: "50%",
              },
            }}
          >
            <StepLabel
              sx={{ cursor: index + 1 < currentStep ? "pointer" : "default" }}
              onClick={() =>
                handleSetStepper(index + 1, index + 1 < currentStep)
              }
              StepIconComponent={(stepIconProps: StepIconProps) => (
                <CustomStepIcon
                  {...stepIconProps}
                  isActive={currentStep === index + 1}
                  isPassed={index + 1 < currentStep}
                />
              )}
            >
              <Box
                sx={{
                  fontSize: "small",
                  textAlign: "center",
                  justifyContent: "center",
                  display: { xs: "none", sm: "flex" },
                }}
              >
                {label}
              </Box>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

const CustomStepIcon = (
  props: StepIconProps & { isActive: boolean; isPassed: boolean }
) => {
  const { isActive, isPassed } = props;

  const activeStyle: CSSProperties = {
    backgroundColor: "transparent",
    color: getStepColor(isActive, isPassed),
  };

  return (
    <Box
      sx={{
        border: (theme) => `1px solid ${theme.palette.text.secondary}`,
        width: { xs: 30, md: 52 },
        height: { xs: 30, md: 52 },
        borderRadius: (theme) => theme.shape.borderRadius,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        borderWidth: 2,
        borderColor: isActive || isPassed ? "primary.main" : "text.secondary",
        ...activeStyle,
      }}
    >
      {props.icon}
    </Box>
  );
};

const getStepColor = (isActive: boolean, isPassed: boolean): string => {
  if (isActive || isPassed) {
    return "primary.main";
  } else {
    return "text.secondary";
  }
};
