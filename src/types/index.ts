export type Product = {
    id: string;
    name: string;
    price: number;
    power: string;
    temperature: string;
    type: "LED" | "incandescent" | "CFL" | "smart" | string;
    lamp_cap: string;
    image_url: string;
    created_at: string;
    updated_at: string;
};