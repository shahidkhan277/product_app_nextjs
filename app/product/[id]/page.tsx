import AddToCartButton from '@/app/components/AddToCart';
import { Product } from '@/app/types/types';

async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}

export default async function ProductDetails({ params }: { params: { id: string } }) {
  const product: Product = await getProduct(params.id);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/2 h-80">
          {/* Optimized image using Next.js Image */}
          <img src={product.image} alt={product.title} className='w-full h-40 object-contain mb-2' />
        </div>

        <div className="ml-4 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-green-600 text-xl">${product.price}</p>
          <p className="mt-4">{product.description}</p>
          <p className="italic text-sm mt-2">Category: {product.category}</p>

          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}