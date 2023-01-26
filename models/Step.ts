import type { Section } from "@/shared/models/Section";

export interface Step {
  id: number;
  sections: Section[];
}
