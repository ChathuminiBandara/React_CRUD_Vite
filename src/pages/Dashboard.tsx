import { Customer } from "../models/Customer.ts";
import { useSelector } from "react-redux";

export function Dashboard() {
    const customers = useSelector(state => state.customer.customers);

    return (
        <>
            <h1 className="p-10 text-4xl font-bold mb-6 text-gray-700 border-b-2 border-gray-200">Dashboard</h1>
            <table className="table-auto w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-blue-100 text-gray-600">
                <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Email</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Phone</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer: Customer, index) => (
                    <tr
                        key={customer.email}
                        className={`${index % 2 === 0 ? "bg-blue-50" : "bg-white"} hover:bg-blue-100 transition-colors duration-200`}
                    >
                        <td className="px-6 py-4 text-gray-700 text-sm">{customer.name}</td>
                        <td className="px-6 py-4 text-gray-700 text-sm">{customer.email}</td>
                        <td className="px-6 py-4 text-gray-700 text-sm">{customer.phone}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}
