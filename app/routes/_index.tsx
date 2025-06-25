import type { MetaFunction } from "@remix-run/node";
import { Link } from '@remix-run/react';


export const meta: MetaFunction = () => {
  return [
    { title: "The Creative Authority" },
    { name: "description", content: "Pakistan’s Premium Shopify App Development & Design Agency" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};