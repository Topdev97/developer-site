import Markdown from "markdown-to-jsx";
import Link from "next/link";
import React from "react";
import { Service } from "../models/service.model";


export const ServiceDetail = (service: Service) => {

  const priceFormated = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "CLP",
  });

  return (
    <header className="mx-6 md:mx-24 mt-8">
      <article>
        <div className="service-description">
          <Markdown >{service.description}</Markdown>
        </div>
        <span>{priceFormated.format(service.price)} / Per section</span>
        {service.discount && (
          <span>{service.price * (1 - service.discount)}</span>
        )}
        <p>Each section has the size of the monitor display</p>
        <Link href="/contact" className="btn btn--primary">
          Contactar
        </Link>
      </article>
    </header>
  );
};
