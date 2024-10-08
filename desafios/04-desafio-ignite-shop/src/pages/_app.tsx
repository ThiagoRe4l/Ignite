/* eslint-disable @next/next/no-img-element */
import type { AppProps } from "next/app";
import { CartProvider } from 'use-shopping-cart'
import { Header } from '../components/Header'
import { globalStyles } from "@/styles/global"
import { Container } from "@/styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <CartProvider
        stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string}
        cartMode="checkout-session"
        currency="BRL"
        shouldPersist
        >
            <Container>
                <Header />
                <Component {...pageProps} />
            </Container>
        </CartProvider>
    )
}