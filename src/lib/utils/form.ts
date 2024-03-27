import { z } from "zod";

export type Attachment = {
  name: string;
  content: string;
};

export type FormInputs = {
  name: string;
  email: string;
  message: string;
  attachments: FileList | null;
};

export const formSchema = z.object({
  name: z.string().trim().min(1, { message: "Please enter your name." }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Please enter your email, we'll never share it." })
    .email({ message: "Please enter a valid email." }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Please tell us how we can help you." }),
  attachments: z.any().optional().nullable(),
});

export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      const data = result.split(",")[1]; // need to remove prefix like this for Brevo
      resolve(data);
    };
    reader.onerror = (error) => reject(error);
  });
};

export const filesToBase64 = async (data: FileList): Promise<Attachment[]> => {
  const files = [];
  for (const file of data) {
    files.push({
      name: file.name,
      content: await fileToBase64(file),
    });
  }
  return files;
};

export const transformZodErrors = (errors: any) => {
  const zodErrors = JSON.parse(errors);
  const transformedErrors: any = {};
  for (const error of zodErrors) {
    for (const path of error.path) {
      transformedErrors[path] = [
        ...(transformedErrors[path] || []),
        error.message,
      ];
    }
  }
  return transformedErrors;
};
