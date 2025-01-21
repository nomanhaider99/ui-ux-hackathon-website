import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const query = `
            *[_type == "product"]{
            _id,
            productName,
            category,
            price,
            inventory,
            colors,
            status,
            "imageUrl": image.asset->url, 
            description
            }
        `;

        const data = await client.fetch(query);

        return NextResponse.json(data);

    } catch (error) {
        throw new Error(error as any);
    }
}