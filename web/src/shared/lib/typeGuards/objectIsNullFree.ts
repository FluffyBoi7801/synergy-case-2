import { NonNullableFields } from "@/shared/globalTypes.ts";

export const objectIsNullFree = <TObject extends object>(
  obj: TObject
): obj is TObject & Required<NonNullableFields<TObject>> => {
  return !!(
    typeof obj === "object" &&
    obj !== null &&
    Object.values(obj).map((value) => value !== null)
  );
};
