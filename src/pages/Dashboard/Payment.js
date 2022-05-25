import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(
  "pk_test_51L1A7TFEhAtE4KXiNYmOinDpEnKlgcnyZHHmSpoFJUjXRhSJMvna9Wo9TGwjjJVIuqlUpDExP5OzMuJDAdTnubzT00EZv5zayw"
);

const Payment = () => {
  const { id } = useParams();

  const { data: order, isLoading } = useQuery("order", () =>
    fetch(`http://localhost:5000/order/${id}`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div class="card w-50 max-w-md bg-base-200 shadow-xl my-12">
        <div class="card-body">
          <p className="text-orange-500 font-bold">Hello, {order.name}</p>
          <h2 class="card-title text-accent">Pay for {order.tool} </h2>

          <p>Please pay: ${order.totalPrice}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckOutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
