interface fieldStyles {
  borderRadius: string;
}

interface fieldProps {
  name: string;
  label: string;
  type?: string;
}

export interface Field {
  id: number;
  component: string;
  cols: number;
  props: fieldProps;
  styles: fieldStyles;
}
