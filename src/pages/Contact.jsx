import React from "react";
// import './Contact.css';

import { useForm } from 'react-hook-form';
import Hero from '../components/Hero';
import styles from './Contact.module.css';

function Contact() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const _onSubmit = data => {

        const url = "https://path/to/api";

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

    const contactHero = {
        bgcolor: "#aaa",
        color: "#fff",
        height: "120px",
        headline: "お問合せフォーム",
        caption: "お気軽にお問合せください。"
    }

    return (
        <main className={styles.main}>
            <section className={styles.hero} >
                <h1>お問合せフォーム</h1>
                <p>お気軽にお問合せください。</p>
            </section>
            {/* <Hero params={contactHero} /> */}
            <section>
                <form className={styles.contactForm} onSubmit={handleSubmit(_onSubmit)}>

                    <label htmlFor="title">お問合せタイトル</label>
                    <input type="text" id="title" {...register("title", {
                        required: "タイトルは必須です。"
                    })} />
                    {errors.title && <p className={styles.errorMessage}>{errors.title.message}</p>}

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register("email", {
                        required: "Emailは必須です。",
                        pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: "Emailを正しく入力してください。" }
                    })} />
                    {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}

                    <label htmlFor="message">お問合せ内容</label>
                    <textarea id="message" rows={5} {...register("message", {
                        required: "お問合せ内容は必須です。",
                        maxLength: { value: 10, message: "10文字以下で入力してください。" }
                    })}></textarea>
                    {errors.message && <p className={styles.errorMessage}>{errors.message.message}</p>}

                    <button type="submit" id="button">送信</button>
                </form>
            </section>
        </main>
    );
}

export default Contact;