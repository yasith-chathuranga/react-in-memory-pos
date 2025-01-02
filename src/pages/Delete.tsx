import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider";
import {Customer} from "../models/Customer";
import {CustomerModal} from "../components/CustomerModal";
import {ItemContext} from "../store/ItemProvider";
import {Item} from "../models/Item";
import {ItemModel} from "../components/ItemModel";

export function Delete() {

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
        const deleteCustomer = new Customer(name, email, phone)
        customerDispatch({type: 'DELETE_CUSTOMER', payload: deleteCustomer});
        navigate('/');
    }

    function handleItemSubmit() {
        const deleteItem = new Item(code, itemName, qty)
        itemDispatch({type: 'DELETE_ITEM', payload: deleteItem});
        navigate('/');
    }

    return (
        <>
            <div className="bg-white shadow-md rounded-lg p-6">
                <header><h2 className="text-2xl font-bold text-gray-700 md-1">Delete Customer</h2></header>
                <br/>
                <CustomerModal
                    handleSubmit={handleCustomerSubmit}
                    setName={setName}
                    setEmail={setEmail}
                    setPhone={setPhone}
                >
                    Delete Customer
                </CustomerModal>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
                <header><h2 className="text-2xl font-bold text-gray-700 md-1">Delete Item</h2></header>
                <br/>
                <ItemModel
                    handleSubmit={handleItemSubmit}
                    setCode={setCode}
                    setItemName={setItemName}
                    setQty={setQty}
                >
                    Delete Item
                </ItemModel>
            </div>
        </>
    );
}