import React from "react";
import ProductItem from "./ProductItem";
import { ProductType } from "./types";
import { GetStaticProps } from "next";


interface Props {
  relatedProd: ProductType[]
}

const RelatedProducts: React.FC<Props> = ({relatedProd}) => {
  return (
    <section className="sec-relate-product bg0 p-t-45 p-b-105">
      <div className="container">
        <div className="p-b-45">
          <h3 className="ltext-106 cl5 txt-center">Related Products</h3>
        </div>

        <div className="wrap-slick2">
          <div className="d-flex">
            {relatedProd.map(product => (
              <ProductItem product={product} key={product.id} />

            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
