import { elGR, enUS } from '@mui/x-data-grid';
import type { GridLocaleText } from '@mui/x-data-grid';

export const greek: Partial<GridLocaleText> = elGR.components.MuiDataGrid.defaultProps.localeText;
greek.filterOperatorIsAnyOf = 'είναι κάποιο από';
export const english: Partial<GridLocaleText> = enUS.components.MuiDataGrid.defaultProps.localeText;
