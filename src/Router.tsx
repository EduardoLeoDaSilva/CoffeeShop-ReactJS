import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/default-layout";
import { ProductPage } from "./pages/products";
import { Checkout } from "./pages/checkout";
import { OrderFinished } from "./pages/order-finished";

export function Router() {
    return (

        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<ProductPage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-finished" element={<OrderFinished />} />
            </Route>
        </Routes>

    );
}