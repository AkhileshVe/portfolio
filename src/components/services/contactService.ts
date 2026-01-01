import emailjs from "@emailjs/browser";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const sendContactEmail = (data: ContactFormData) => {
  return emailjs.send(
    import.meta.env.VITE_EMAIL_SERVICE_ID as string,
    import.meta.env.VITE_EMAIL_TEMPLATE_ID as string,
    //data,
   // import.meta.env.VITE_EMAIL_PUBLIC_KEY as string
  );
};

