export type NonNullableFields<T> = {
  [K in keyof T as T[K] extends null ? never : K]: NonNullable<T[K]>;
};
