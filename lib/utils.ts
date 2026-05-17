export const getHash = () =>
  typeof window !== "undefined" ? decodeURIComponent(window.location.hash) : ""

export const parseFormData = <T extends Record<string, FormDataEntryValue>>(
  formData: FormData
) => Object.fromEntries(formData) as T
