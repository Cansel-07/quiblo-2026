import Stripe from 'stripe';
import Product from '@/src/models/Product';
import { mongooseConnect } from '@/src/lib/mongoose';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  await mongooseConnect();
  
  try {
    const body = await req.json();
    const { title, description, price } = body;

    const stripeProduct = await stripe.products.create({
      name: title,
      description: description || '',
    });

    const stripePrice = await stripe.prices.create({
      product: stripeProduct.id,
      unit_amount: price * 100, 
      currency: 'usd',
    });

    const newProduct = await Product.create({
      title,
      description,
      price,
      stripeProductId: stripeProduct.id,
      stripePriceId: stripePrice.id,
    });

    return new Response(JSON.stringify(newProduct), { status: 201 });
  } catch (error) {
    console.error("Stripe/DB Hatası:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}