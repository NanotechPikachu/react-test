import { useState } from 'react';

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

function SearchBar({ filterPr, inStock, stockChange, filterChange }) {
  return (
    <form>
    <input type="text" value={filterPr} placeholder="search" onChange={(e) => filterChange(e.target.value)} /><br />
    <label>
    <input type="checkbox" checked={inStock} onChange={(e) => stockChange(e.target.checked)} />{' '}Show only products in stock.
    </label>
    </form>
  )
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name : <span style={{ color: "red"}}>{product.name}</span>
  
  return (
    <tr>
    <td>{name}</td>
    <td>{product.price}</td>
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

function ProductTable({ products, inStock, filterPr }) {
  const rows = [];
  let lastCat = null;
  
  products.forEach((p) => {
    if (p.name.toLowerCase().indexOf(filterPr.toLowerCase()) === -1) return;
    if (inStock && !p.stocked) return;

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
  const [filterPr, setFilterPr] = useState('');
  const [inStock, setInStock] = useState(false);
  return (
    <div>
    <SearchBar filterPr={filterPr} inStock={inStock} filterChange={setFilterPr} stockChange={setInStock} />
    <ProductTable products={products} filterPr={filterPr} inStock={inStock} />
    </div>
  )
}

export default function App() {
  return <FilterTable products={PRODUCTS} />;
}