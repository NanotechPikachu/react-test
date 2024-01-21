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