import Image from "next/image";
import { getProducts } from "./api/Product/page";
import Link from 'next/link';


export default async function Home() {
  const user = await getProducts();

  const list_data = user.data.data.products;

  return (
    <main>
      <div>
        {list_data.map((item: any) => (
          <Link href={`/Product_Item/${item._id}`} key={item._id} className='w-[60%] m-auto flex items-center'>
            <img src={item.image} alt=""  className='w-[70px]'/>
            <p className="mr-3">{item.name}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
