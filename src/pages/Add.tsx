import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { CustomerContext } from "../store/CustomerProvider.tsx";
import { Customer } from "../models/Customer.ts";
import { CustomerModal } from "../components/CustomerModal";
import React from "react";
import {ItemContext} from "../store/ItemProvider";
import {Item} from "../models/Item";
import {ItemModel} from "../components/ItemModel";

export function Add() {

  const navigate = useNavigate();
  const [customers, customerDispatch] = useContext(CustomerContext);
  const [items, itemDispatch] = useContext(ItemContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [code, setCode] = useState();
  const [itemName, setItemName] = useState("");
  const [qty, setQty] = useState();

  function handleCustomerSubmit() {
    const newCustomer = new Customer(name, email, phone);
    customerDispatch({type: 'ADD_CUSTOMER', payload: newCustomer});
    navigate("/");
  }

  function handleItemSubmit() {
    const newItem = new Item(code, itemName, qty);
    itemDispatch({type: 'ADD_ITEM', payload: newItem});
    navigate("/");
  }

  return (
      <>
        <div className="bg-white shadow-md rounded-lg p-6">
          <header>
            <h2 className="text-2xl font-bold text-gray-700 md-1">Add Customer</h2>
          </header>
          <br/>

          <CustomerModal
              handleSubmit={handleCustomerSubmit}
              setName={setName}
              setEmail={setEmail}
              setPhone={setPhone}
          >
            Add Customer
          </CustomerModal>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <header>
            <h2 className="text-2xl font-bold text-gray-700 md-1">Add Item</h2>
          </header>
          <br/>

          <ItemModel
              handleSubmit={handleItemSubmit}
              setCode={setCode}
              setItemName={setItemName}
              setQty={setQty}
          >
            Add Item
          </ItemModel>
        </div>
      </>
  );
}
