
const ProductCard = ({ url, name, price }: { url: string, name: string, price: number }) => {
  return (
    <section className="product-card">
      <a href="">
        <img src={url} alt="" />
        <section className="product-card__info">
          <p className="product-card__name">{name}</p>
          <p className="product-card__price">{price}</p>
        </section>
      </a>
    </section>
  )
}

export default ProductCard
