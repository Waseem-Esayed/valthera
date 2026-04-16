import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import type CartProductType from "../types/CartProduct";
import trashIcon from "../assets/images/trash-icon.svg";

const CartPage = () => {
  const { cart, updateAmount, deleteProduct } = useContext(CartContext);

  const subtotal = cart.reduce((sum, p) => sum + p.price, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <main className="mx-[4%] border-t border-[#e5e7eb] flex flex-col">
      <div className="flex items-center mt-15 mb-6">
        <h3 className="text-2xl uppercase text-[#6b7280] flex justify-center items-center tracking-wide flex-wrap">
          your
          <span className="text-[#374151] font-medium ml-2 text-wrap">
            cart
          </span>
        </h3>
        <hr className="w-9 ml-2.5 border-[0.5] border-[#374151]" />
      </div>

      <hr className="border border-[#e5e7eb] mb-4" />
      {cart.map((product: CartProductType, i: number) => (
        <div key={i}>
          <div className="flex justify-between items-center gap-5.5 mb-4">
            <div className="flex items-center gap-5.5 flex-[0.65]">
              <img
                src={product.image}
                alt={product.name}
                className="h-20 min-[650px]:h-25"
              />
              <div className="self-start">
                <p className="text-xs min-[650px]:text-lg mb-2">
                  {product.name}
                </p>
                <div className="flex items-center gap-4.5">
                  <p>${product.price}</p>
                  <p
                    className={
                      "text-sm bg-gray-100 py-0.5 px-2 border border-[#e5e7eb] h-fit"
                    }>
                    {product.size}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-[0.3] flex justify-between items-center gap-3 mr-[4%]">
              <input
                type="number"
                className="border border-[#e5e7eb] w-15 px-1.5 py-1"
                value={product.amount}
                onChange={(e) => updateAmount(product, Number(e.target.value))}
              />
              <button>
                <img
                  src={trashIcon}
                  alt="Remove"
                  className="w-5 cursor-pointer"
                  onClick={() => deleteProduct(product)}
                />
              </button>
            </div>
          </div>
          <hr className="border border-[#e5e7eb] mb-4" />
        </div>
      ))}

      <div className="w-full lg:w-[50%] self-end">
        <div className="flex items-center mt-16 mb-13">
          <h3 className="text-2xl uppercase text-[#6b7280] flex justify-center items-center tracking-wide flex-wrap">
            cart
            <span className="text-[#374151] font-medium ml-2 text-wrap">
              totals
            </span>
          </h3>
          <hr className="w-9 ml-2.5 border-[0.5] border-[#374151]" />
        </div>
        <div className="border-b border-[#e5e7eb] flex justify-between py-2.5">
          <span>Subtotal</span>
          <span>$ {subtotal.toFixed(2)}</span>
        </div>
        <div className="border-b border-[#e5e7eb] flex justify-between py-2.5">
          <span>Shipping Fee</span>
          <span>$ {shipping.toFixed(2)}</span>
        </div>
        <div className=" flex justify-between py-2.5">
          <span className="font-semibold">Total</span>
          <span>$ {total.toFixed(2)}</span>
        </div>
        <div className="flex justify-end">
          <button className="uppercase bg-black text-white text-sm px-8 py-3 mt-5 cursor-pointer">
            proceed to checkout
          </button>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
