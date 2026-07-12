import { useParams } from "react-router-dom";

function OrderDetails() {
  const { orderId } = useParams();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Order Details</h1>

      <p className="text-slate-500">Order ID : {orderId}</p>
    </div>
  );
}

export default OrderDetails;
