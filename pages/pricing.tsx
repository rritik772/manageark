import { Title } from "@mantine/core";
import Head from "next/head";
import PricingSpec from "../components/pricing/PricingSpecs";
import BottomBar from "../components/bottombar/BottomBar";

export default function Pricing() {
    return (
        <>
            <Head>
                <title>Pricing | Griiken.com</title>
                <meta name="description" content="Pricing page for griiken software solutions." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Title>Our Pricing</Title>
                <PricingSpec />
                <BottomBar />
            </main>
        </>
    )
}