export type Product = {
    _id: string,
    name: string,
    status: number,
}
export type ProductCreate = {
    name?: string,
    status?: number,
}
