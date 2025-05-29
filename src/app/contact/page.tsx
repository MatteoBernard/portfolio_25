"use client";

import {useTranslations} from "use-intl";
import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import {useState} from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const t = useTranslations();

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const templateParams = {
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message
        };

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then(
                () => {
                    alert(t("contact.email.sent"));
                    setForm({ name: "", email: "", subject: "", message: "" });
                },
                () => {
                    alert(t("contact.email.error"));
                }
            );
    };

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 flex flex-col items-center justify-center">
                <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white flex flex-col items-center justify-center text-center">
                    <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("contact.title")}</h1>
                            <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                {t("contact.description")}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center text-center">
                    <div className="container px-4 md:px-6 mx-auto max-w-6xl flex flex-col items-center justify-center text-center">
                        <div className="grid gap-10 lg:grid-cols-2 items-start justify-start">
                            <div className="space-y-8 text-left w-full">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter">{t("contact.info.title")}</h2>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3">
                                        <Mail className="h-6 w-6 text-violet-600"/>
                                        <span>{t("contact.info.email.value")}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <MapPin className="h-6 w-6 text-violet-600"/>
                                        <span>{t("contact.info.location.value")}</span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold">{t("contact.social.title")}</h3>
                                    <div className="flex gap-4">
                                        <Link href="https://github.com/MatteoBernard" target="_blank"
                                              rel="noopener noreferrer">
                                          <span
                                              className="inline-flex items-center justify-center rounded-full border border-violet-300 hover:bg-violet-100 hover:text-violet-700 w-10 h-10">
                                            <Github className="h-5 w-5"/>
                                            <span className="sr-only">GitHub</span>
                                          </span>
                                        </Link>
                                        <Link href="https://www.linkedin.com/in/matt%C3%A9o-bernard-00137a255/"
                                              target="_blank" rel="noopener noreferrer">
                                          <span
                                              className="inline-flex items-center justify-center rounded-full border border-violet-300 hover:bg-violet-100 hover:text-violet-700 w-10 h-10">
                                            <Linkedin className="h-5 w-5"/>
                                            <span className="sr-only">LinkedIn</span>
                                          </span>
                                        </Link>
                                        <Link href="mailto:bernard.matteo.travail@gmail.com">
                                          <span
                                              className="inline-flex items-center justify-center rounded-full border border-violet-300 hover:bg-violet-100 hover:text-violet-700 w-10 h-10">
                                            <Mail className="h-5 w-5"/>
                                            <span className="sr-only">Email</span>
                                          </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <form onSubmit={handleSubmit}
                                    className="bg-white dark:bg-gray-900 rounded-xl shadow p-8 flex flex-col gap-4 text-left">
                                    <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">{t("contact.form.title")}</h2>
                                    <p className="text-gray-500 dark:text-gray-400 text-center mb-4">{t("contact.form.description")}</p>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="name"
                                               className="text-sm font-medium">{t("contact.form.name.label")}</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder={t("contact.form.name.placeholder")}
                                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white dark:bg-gray-800 text-black dark:text-white"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="email"
                                               className="text-sm font-medium">{t("contact.form.email.label")}</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder={t("contact.form.email.placeholder")}
                                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white dark:bg-gray-800 text-black dark:text-white"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="subject"
                                               className="text-sm font-medium">{t("contact.form.subject.label")}</label>
                                        <input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            value={form.subject}
                                            onChange={handleChange}
                                            placeholder={t("contact.form.subject.placeholder")}
                                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white dark:bg-gray-800 text-black dark:text-white"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="message"
                                               className="text-sm font-medium">{t("contact.form.message.label")}</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder={t("contact.form.message.placeholder")}
                                            className="border border-gray-300 rounded px-3 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white dark:bg-gray-800 text-black dark:text-white"
                                        />
                                    </div>
                                    <button type="submit"
                                            className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded transition">
                                        {t("contact.form.submitButton")}
                                        <Send className="h-4 w-4"/>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Contact;