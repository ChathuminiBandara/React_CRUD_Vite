import {useNavigate} from "react-router";
import {useState} from "react";

import {Modal} from "../components/Modal";
import {useDispatch} from "react-redux";
import {Customer} from "../models/Customer.ts";
import {updateCustomer} from "../reducer/CustomerSlice.ts";

export function UpdateCustomer() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit() {
        const updatedCustomer = new Customer(name, email, phone);
        dispatch(updateCustomer(updatedCustomer));
        navigate('/');
    }

    return (
        <>
            <header className="text-3xl font-bold text-gray-800 text-center py-4 border-b-2 border-gray-200">
                <h2>Update Customer</h2>
            </header>
            <br/>
            <div className="flex justify-center items-center mt-10">
                <Modal
                    handleSubmit={handleSubmit}
                    setName={setName}
                    setEmail={setEmail}
                    setPhone={setPhone}>
                    <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded hover:bg-blue-600 transition-colors duration-200">
                        Update Customer
                    </button>
                </Modal>
            </div>
        </>
);
}