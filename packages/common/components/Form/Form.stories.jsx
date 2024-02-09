import {
  FormSectionLabel,
  FormField,
  FormSelect,
  FormCheckboxField,
  FormDatePick,
  SubmitButtonFooter,
} from "./index";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Box } from "@mui/material";

const FormStories = () => {
  const onSubmit = async (data) => {
    console.log(data);
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yup.object().shape({
      value_1: yup.string().required("field is required"),
      value_2: yup.string().required("field is required"),
      value_3: yup.string().required("field is required"),
      value_4: yup.string().required("field is required"),
    }),
    mode: "onChange",
    defaultValues: {
      value_1: "",
      value_2: "",
      value_3: "",
      value_4: "",
    },
  });

  return (
    <Box component={"form"} maxWidth={"700px"} mx={"auto"}>
      <FormSectionLabel label={"Section Label inputs"} />
      <Box mt={4} mb={3}></Box>
      <FormField
        for_name={"value_1"}
        with_label={"value 1 label"}
        control={control}
        has_error={!!errors["value_1"]}
        error_message={errors.value_1?.message ?? ""}
      />
      <FormField
        for_name={"value_1"}
        with_label={"value 1 label"}
        control={control}
        has_error={!errors["value_1"]}
        error_message={"with error"}
      />

      <Box mt={4} mb={3}></Box>
      <FormSelect
        for_name={"value_2"}
        with_label={"Select label"}
        control={control}
        has_error={!!errors["value_2"]}
        error_message={errors.legal_status?.message ?? ""}
        options={[
          { value: "", label: "no value" },
          { value: "value_1", label: "label value 1" },
          { value: "value_2", label: "label value 2" },
          { value: "value_3", label: "label value 3" },
          { value: "value_4", label: "label value 4" },
        ]}
        withValueTitle={true}
      />
      <FormSelect
        for_name={"value_2"}
        with_label={"Select label"}
        control={control}
        has_error={!errors["value_2"]}
        error_message={"Select an Option"}
        options={[
          { value: "", label: "no value" },
          { value: "value_1", label: "label value 1" },
          { value: "value_2", label: "label value 2" },
          { value: "value_3", label: "label value 3" },
          { value: "value_4", label: "label value 4" },
        ]}
        withValueTitle={true}
      />
      <Box mt={4} mb={3}></Box>
      <FormCheckboxField
        for_name={"value_3"}
        with_label={"Checkbox label"}
        control={control}
        has_error={!!errors["value_3"]}
        error_message={errors.value_3?.message ?? ""}
      />
      <FormCheckboxField
        for_name={"value_3"}
        with_label={"Checkbox label"}
        control={control}
        has_error={!errors["value_3"]}
        error_message={"Checkbox error"}
      />
      <Box mt={4} mb={3}></Box>
      <FormDatePick
        for_name={"value_4"}
        with_label={"Date Pick"}
        control={control}
        has_error={!!errors["value_4"]}
        error_message={errors.value_4?.message ?? ""}
        noFuture={true}
      />
      <FormDatePick
        for_name={"value_4"}
        with_label={"Date Pick"}
        control={control}
        has_error={!errors["value_4"]}
        error_message={"Error on datePick"}
        noFuture={false}
      />
      <Box mt={4} mb={3}></Box>
      <SubmitButtonFooter onClick={handleSubmit(onSubmit)} isValid={isValid} />
      <SubmitButtonFooter onClick={handleSubmit(onSubmit)} isValid={!isValid} />
    </Box>
  );
};

export default {
  title: "HookForm/ControlledForm",
  component: FormStories,
  parameters: {
    controls: { expanded: true },
  },
};

const Template = ({ theme, ...args }) => {
  return <FormStories />;
};

export const Default = Template.bind({});
