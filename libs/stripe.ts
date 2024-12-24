import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY environment variable is missing.");
}

const stripe = new Stripe(
    process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-06-20",
    appInfo: {
        name: "Fumes Music Player",
        version: "1.0.1",
    },
});

export default stripe;