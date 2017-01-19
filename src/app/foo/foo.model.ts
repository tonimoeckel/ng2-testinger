import {
  DynamicFormControlModel,
  DynamicCheckboxModel,
  DynamicInputModel,
  DynamicRadioGroupModel
} from "@ng2-dynamic-forms/core";

export const FOO_MODEL: Array<DynamicFormControlModel> = [

  new DynamicInputModel({

    id: "exampleInput",
    label: "Example Input",
    maxLength: 42,
    placeholder: "example input"
  }),

  new DynamicRadioGroupModel<string>({

    id: "exampleRadioGroup",
    label: "Example Radio Group",
    options: [
      {
        label: "Option 1",
        value: "option-1",
      },
      {
        label: "Option 2",
        value: "option-2"
      },
      {
        label: "Option 3",
        value: "option-3"
      }
    ],
    value: "option-3"
  }),

  new DynamicCheckboxModel({

    id: "exampleCheckbox",
    label: "I do agree"
  })
];
