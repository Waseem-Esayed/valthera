import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateProductAmount } from "../features/cart/cartSlice";
import type CartProductType from "../types/CartProduct";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);

  function handleUpdateAmount(id: string, newAmount: number) {
    dispatch(updateProductAmount({ id, newAmount }));
  }

  return (
    <main className="mx-[4%] border-t border-[#e5e7eb]">
      <div className="flex items-center mt-15 mb-6">
        <h3 className="text-2xl uppercase text-[#6b7280] flex justify-center items-center tracking-wide flex-wrap">
          your
          <span className="text-[#374151] font-medium ml-2 text-wrap">
            cart
          </span>
        </h3>
        <hr className="w-9 ml-2.5 border-[0.5] border-[#374151]" />
      </div>

      <hr className="border-[#e5e7eb] mb-5" />
      {cartProducts.map((product: CartProductType) => (
        <div>
          <div>
            <img src={product.image} alt={product.name} />
          </div>
          <div>
            <input
              type="number"
              min={1}
              value={product.amount}
              onChange={(e) =>
                handleUpdateAmount(product.id, parseInt(e.currentTarget.value))
              }
            />
          </div>
        </div>
      ))}

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
        <span>$ 0.00</span>
      </div>
      <div className="border-b border-[#e5e7eb] flex justify-between py-2.5">
        <span>Shipping Fee</span>
        <span>$ 10.00</span>
      </div>
      <div className=" flex justify-between py-2.5">
        <span className="font-semibold">Total</span>
        <span className="font-semibold">$ 0.00</span>
      </div>
      <div className="flex justify-end">
        <button className="uppercase bg-black text-white text-sm px-8 py-3 mt-5">
          proceed to checkout
        </button>
      </div>
    </main>
  );
};

export default CartPage;
