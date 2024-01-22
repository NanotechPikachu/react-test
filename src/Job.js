import { useState } from 'react';

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

function SearchBar() {
  return (
    <form>
    <input type="text" placeholder="search" />
    <label>
    <input type="checkbox" />{' '}Show only products in stock.
    </label>
    </form>
  )
}

function ProductRow({ product }) {
  const pr = product.stocked ? product.name : <span style={{ color: "red"}}>{product.name}</span>
  
  return (
    <tr>
    <td>{name}</td>
    <td>{product.prize}</td>
    </tr>
  )
}

function ProductCatRow({ category }) {
  return (
    <tr>
    <th colspan="2">{category}</th>
    </tr>
  )
}

function ProductTable({ products }) {
  const rows = [];
  const lastCat;
  
  products.forEach((p) => {
    if (p.category !== lastCat) {
      rows.push(
        <ProductCatRow category={p.category} key={p.category} />
      )
    }
    rows.push(
      <ProductRow product={p} key={p.name} />
    )
    lastCat = p.category;
  })
  return (
    <table>
    <thead>
    <tr><th>Name</th><th>Price</th></tr>
    </thead>
    <tbody>{rows}</tbody>
    </table>
  )
}

function FilterTable({ products }) {
  return (
    <div>
    <SearchBar />
    <ProductTable products={products} />
    </div>
  )
}