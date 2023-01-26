import type { Step } from "@/shared/models/Step";

export interface Form {
  _id: string;
  name: string;
  theme: {
    fields: {
      component: string;
      styles: {}[];
    }[];
  };
  steps: Step[];
}
