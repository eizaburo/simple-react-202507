import React from "react";
import './Contact.css';

import { useForm } from 'react-hook-form';

function Contact() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const _onSubmit = data => {

        const url = "https://script.google.com/macros/s/AKfycbyzNZmAv5bxnw-_MF_tZ91q8uxs3AT_Uz0Qomf56EyYyLq9Qr7mFjmLPiZM4HpsWjDv/exec";

        fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                title: data.title,
                email: data.email,
                message: data.message
            }).toString()
        })
            .then(response => response.text())
            .then(text => {
                alert(text);
            })
            .catch(error => {
                alert(error);
            });

    }

    return (
        <main>
            <section className="hero">
                <h1>お問合せフォーム</h1>
                <p>お気軽にお問合せください。</p>
            </section>
            <section>
                <form className="contact-form" onSubmit={handleSubmit(_onSubmit)}>

                    <label for="title">お問合せタイトル</label>
                    <input type="text" id="title" {...register("title", {
                        required: "タイトルは必須です。"
                    })} />
                    {errors.title && <p className="error-message">{errors.title.message}</p>}

                    <label for="email">Email</label>
                    <input type="email" id="email" {...register("email", {
                        required: "Emailは必須です。",
                        pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: "Emailを正しく入力してください。" }
                    })} />
                    {errors.email && <p className="error-message">{errors.email.message}</p>}

                    <label for="message">お問合せ内容</label>
                    <textarea id="message" rows={5} {...register("message", {
                        required: "お問合せ内容は必須です。",
                        maxLength: { value: 10, message: "10文字以下で入力してください。" }
                    })}></textarea>
                    {errors.message && <p className="error-message">{errors.message.message}</p>}

                    <button type="submit" id="button">送信</button>
                </form>
            </section>
        </main>
    );
}

export default Contact;