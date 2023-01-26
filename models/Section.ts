import type { Row } from "@/shared/models/Row";

export interface Section {
  id: number;
  props: object;
  rows: Row[];
}
