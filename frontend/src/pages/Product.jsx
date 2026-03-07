import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId);

    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])

  return productData ? (
    <div className='border-t pt-10 px-4 sm:px-8 lg:px-16 transition-opacity duration-500'>

      {/* Product Section */}
      <div className='flex flex-col lg:flex-row gap-10'>

        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse lg:flex-row gap-3'>

          {/* Thumbnail images */}
          <div className='flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto lg:w-[20%]'>
            {productData?.image?.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setImage(item)}
                className='w-20 lg:w-full cursor-pointer border'
                alt=""
              />
            ))}
          </div>

          {/* Main image */}
          <div className='w-full lg:w-[80%]'>
            <img className='w-full h-auto rounded' src={image} alt="" />
          </div>

        </div>

        {/* Product Info */}
        <div className='flex-1'>

          <h1 className='font-medium text-xl sm:text-2xl mt-2'>
            {productData.name}
          </h1>

          {/* Rating */}
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} className="w-4 sm:w-5" />
            <img src={assets.star_icon} className="w-4 sm:w-5" />
            <img src={assets.star_icon} className="w-4 sm:w-5" />
            <img src={assets.star_icon} className="w-4 sm:w-5" />
            <img src={assets.star_dull_icon} className="w-4 sm:w-5" />
            <p className='pl-2 text-sm'>(10)</p>
          </div>

          {/* Price */}
          <p className='mt-4 text-2xl sm:text-3xl font-medium'>
            {currency}{productData.price}
          </p>

          {/* Description */}
          <p className='mt-4 text-gray-500 text-sm sm:text-base lg:w-4/5'>
            {productData.description}
          </p>

          {/* Sizes */}
          <div className='flex flex-col gap-3 my-6'>
            <p className='font-medium'>Select Size</p>

            <div className='flex flex-wrap gap-2'>
              {productData?.sizes?.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border px-4 py-2 text-sm bg-gray-100 
                  ${item === size ? 'border-orange-500' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(productData._id, size)}
            className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 w-full sm:w-auto'
          >
            ADD TO CART
          </button>

          <hr className='mt-8' />

          {/* Product Policies */}
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery available.</p>
            <p>Easy return & exchange within 7 days.</p>
          </div>

        </div>

      </div>

      {/* Description */}
      <div className='mt-16'>

        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>

        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti eos voluptate doloribus fuga quia similique cum
            vitae corporis laborum.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nulla odit illum cupiditate porro quaerat recusandae.
          </p>
        </div>

      </div>

      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />

    </div>

  ) : <div className='opacity-0'></div>
}

export default Product