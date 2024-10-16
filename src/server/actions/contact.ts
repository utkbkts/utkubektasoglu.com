"use server";

import { getContactHtmlTemplate } from "@/utils/contact-template";
import sendEmail from "@/utils/mail-utils";

export async function sendEmailServer({
  email,
  message,
  fullname,
}: {
  email: string;
  message: string;
  fullname: string;
}) {
  const messageHtml = getContactHtmlTemplate(email, message, fullname);

  try {
    await sendEmail({
      email,
      subject: "İletişim Formu Mesajı",
      message: messageHtml,
    });

    return { message: "Başarılı" };
  } catch (error) {
    console.error("E-posta gönderimi sırasında hata:", error);
    throw new Error("E-posta gönderiminde hata oluştu");
  }
}
