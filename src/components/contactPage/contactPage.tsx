"use client";

import { useForm } from "react-hook-form";
import TitleHero from "../ui/titleHero";
import { zodResolver } from "@hookform/resolvers/zod";
import { mailSchema } from "@/schema/mailSchema";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { sendEmailServer } from "@/server/actions/contact";
import { toast } from "sonner";
import { useState } from "react";
const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof mailSchema>>({
    resolver: zodResolver(mailSchema),
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
    },
  });
  async function onSubmit(values: z.infer<typeof mailSchema>) {
    try {
      setLoading(true);
      await sendEmailServer({
        message: values.message,
        email: values.email,
        fullname: values.fullname,
      });
      toast.success("Mesaj gönderme başarılı", {
        description: "Mesajınıza en kısa sürede geri dönüş yapacağım",
      });
      form.reset();
      setLoading(false);
    } catch {
      setLoading(false);
    }
  }
  return (
    <div className="bg-white dark:bg-[#2b2b2b] w-full h-full rounded-xl p-8">
      <TitleHero title="İletişim" />
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
        <div className="bg-[#FFEBD1] p-4 rounded-xl">
          <div className="flex flex-col gap-2">
            <h1>Telefon:</h1>
            <span className="font-bold text-[16px] font-poppins">
              +90 535 463 71 78
            </span>
          </div>
        </div>
        <div className="bg-[#F2F7FC] mds:p-4 p-3 rounded-xl">
          {" "}
          <div className="flex flex-col gap-2">
            <h1>Email:</h1>
            <span className="font-bold text-[16px] font-poppins">
              utkutoygunbektasoglu@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#F2F7FC] mt-24 p-8 font-raleway">
        <p className="mds:text-start text-center">
          Herhangi bir sorunuz olması durumunda bana her zaman e-posta ile
          ulaşabilirsiniz. E-postalarımı düzenli olarak kontrol ettiğim için
          size en kısa sürede geri dönüş yapacağım.
        </p>
        <div className="pt-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" font-normal font-poppins">
                      isim ve Soyad
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="isim ve soyad"
                        {...field}
                        className="dark:bg-transparent "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" font-normal font-poppins">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="email"
                        {...field}
                        className="dark:bg-transparent "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" font-normal font-poppins">
                      Mesaj
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        placeholder="mesaj"
                        {...field}
                        className="dark:bg-transparent "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="bg-black text-white hover:bg-gray-800"
                type="submit"
                disabled={loading}
              >
                {loading ? "Gönderiliyor..." : "Gönder"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
