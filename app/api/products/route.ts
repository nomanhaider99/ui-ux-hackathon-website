import { client } from "@/sanity/lib/client";

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

        return data;

    } catch (error) {
        throw new Error(error as any);
    }
}