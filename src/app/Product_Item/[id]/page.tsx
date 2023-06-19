import React from "react";
import { getProducts_item } from "../../api/Product/page";
import Head from "next/head";
import {  ResolvingMetadata  ,type Metadata} from 'next'




 
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id
 
  const product = await getProducts_item(id)
 
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    openGraph: {
      images: [`${product.data.data.image}`, ...previousImages],
    },
  }
}




export default async function Page({ params ,searchParams}: any) {
  const data = await getProducts_item(params.id);
  const item = data.data.data;

  return (
    <div>
      <Head>
        <title>My website</title>
        <meta name="description">
          This text will appear in the description section of search engine
          results.
        </meta>
      </Head>
      <div className="w-[60%] m-auto ">
        <p>{item.name}</p>
        <img src={item.image} className="w-[200px] h-[200px]" alt="" />
      </div>
    </div>
  );
}



 