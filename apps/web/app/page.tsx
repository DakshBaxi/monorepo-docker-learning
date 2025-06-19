import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import {prismaClient} from "db/client"

export default async function Home() {
  const user = await prismaClient.user.findMany();
    return (
    <div >
        {JSON.stringify(user)}
    </div>
  );
}

// export const revalidate = 60 // revalidate every 60 seconds
// or
// export const dynamic = 'force-dynamic'
