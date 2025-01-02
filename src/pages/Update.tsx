import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider";
import {CustomerModal} from "../components/CustomerModal";
import {Customer} from "../models/Customer";
import {ItemContext} from "../store/ItemProvider";
import {Item} from "../models/Item";
import {ItemModel} from "../components/ItemModel";

export function Update() {

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
        const updatedCustomers = new Customer(name, email, phone)
        customerDispatch({type: 'UPDATE_CUSTOMER', payload: updatedCustomers});
        navigate('/');
    }

    function handleItemSubmit() {
        const updatedItem = new Item(code, itemName, qty)
        itemDispatch({type: 'UPDATE_ITEM', payload: updatedItem});
        navigate('/');
    }

    return (
        <>
            <div className="bg-white shadow-md rounded-lg p-6">
                <header><h2 className="text-2xl font-bold text-gray-700 md-1">Update Customer</h2></header>
                <br/>
                <CustomerModal
                    handleSubmit={handleCustomerSubmit}
                    setName={setName}
                    setEmail={setEmail}
                    setPhone={setPhone}
                >
                    Update Customer
                </CustomerModal>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
                <header><h2 className="text-2xl font-bold text-gray-700 md-1">Update Item</h2></header>
                <br/>
                <ItemModel
                    handleSubmit={handleItemSubmit}
                    setCode={setCode}
                    setItemName={setItemName}
                    setQty={setQty}
                >
                    Update Item</ItemModel>
            </div>
        </>
    );
}