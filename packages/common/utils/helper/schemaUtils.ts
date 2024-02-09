import * as yup from 'yup';

export function generateResetValues<T extends yup.Schema<T>>(schema: T): Partial<yup.InferType<T>> {
  const description = schema.describe();
  // @ts-ignore
  const fieldNames = description.fields ? Object.keys(description.fields) : [];
  const resetValues = fieldNames.reduce((acc, fieldName) => {
    // @ts-ignore
    acc[fieldName] = '';
    return acc;
  }, {} as Partial<yup.InferType<T>>);

  return resetValues;
}
