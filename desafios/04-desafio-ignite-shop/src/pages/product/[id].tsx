import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from 'next/router'
import Stripe from "stripe"
import { useShoppingCart } from 'use-shopping-cart'
import { stripe } from "@/lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"

interface ProductProps {
    product: {
        id: string;
        name: string;
        imageUrl: string;
        formattedPrice: string;
        description: string;
        defaultPriceId: string;
        price: number;
    }
}

export default function Product({ product }: ProductProps) {
    const { isFallback } = useRouter()
    const { addItem } = useShoppingCart()

    function addItemToCart() {
        addItem(
          {
            name: product.name,
            description: product.description,
            id: product.id,
            price: product.price,
            currency: 'BRL',
            image: product.imageUrl,
            price_id: product.defaultPriceId,
          },
          { count: 1 },
        )
      }
    
      if (isFallback) {
        return <p>Loading...</p>
      }

    // async function handleBuyProduct() {
    //   try {
    //     setIsCreatingCheckoutSession(true);

    //     const response = await axios.post('/api/checkout', {
    //         priceId: product.defaultPriceId,
    //     })

    //     const { checkoutUrl } = response.data;

    //     window.location.href = checkoutUrl;
    //   } catch (err) {
    //     // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)

    //     setIsCreatingCheckoutSession(false);

    //     alert('Falha ao redirecionar ao checkout!')
    //   }
    // }

    return (
        <>
            <Head>
                <title>{product.name} | Ignite Shop</title>
            </Head>
            
            <ProductContainer>
                <ImageContainer>
                <Image src={product.imageUrl} alt="" width={520} height={480} />
                </ImageContainer>
                <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.formattedPrice}</span>

                <p>{product.description}</p>
                <button onClick={addItemToCart}>Comprar agora</button>
                </ProductDetails>
            </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: 'prod_Qf9smZn8AxRmw6' } },
        ],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params.id;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price'],
    });

    const price = product.default_price as Stripe.Price 
    
    return {
        props: {
          product: {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            formattedPrice: new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format((price.unit_amount as number) / 100),
            description: product.description,
            defaultPriceId: price.id,
            price: price.unit_amount,
          },
        },
        revalidate: 60 * 60 * 1, // 1 hour
    }
}