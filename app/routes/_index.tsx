import type { MetaFunction } from "@remix-run/node";
import { Link } from '@remix-run/react';


export const meta: MetaFunction = () => {
  return [
    { title: "The Creative Authority" },
    { name: "description", content: "Pakistans Premium Shopify App Development & Design Agency" },
  ];
};

export default function Index() {
  return (
    <div>
        <div className="ml-8 w-40 h-20">
          <img src="tcalogo2025.svg" alt="The Creative Authority" />
        </div>
        <div className="ml-8 mt-12">
          <img src="woman-stands.jpg" alt="Woman Stands with her arm folded in a store" />
        </div>
        <div>
          <p className="ibm-plex-serif-semibold">Pakistans Premium Shopify App Development & Design Agency</p>
        </div>
    </div>
  );
};