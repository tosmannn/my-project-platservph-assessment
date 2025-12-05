import { useEffect, useState } from "react";
import Card from "../../components/shared/Card";
import SearchBar from "./component/search-bar/SearchBar";
import Table from "./component/table/Table";
import { getConnections } from "./data/connectionServices";
import { services } from "./data/services"
import type { CardProps, IntegrationRow } from "./type";
import Pagination from "../../components/shared/Pagination";


const IntegrationPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const connections = getConnections();

    const filteredConnections: IntegrationRow[] = connections.filter(
        (c) =>
            c.integration.toLowerCase().includes(search.toLowerCase()) ||
            c.name.toLowerCase().includes(search.toLowerCase())
    );
    const rowsPerPage = 8;
    const totalPages = Math.ceil(filteredConnections.length / rowsPerPage);

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages || 1);
        }
    }, [filteredConnections]);


    const paginatedData = filteredConnections.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    return <>
        <div className="ml-10">
            <div className="mb-5">
                <div className="text-2xl font-bold text-gray-800">
                    Choose a Service to Connect
                </div>
                <div className="text-sm text-gray-600 mt-3">
                    Connect BraveGen to other tools you use.
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">

                    {services.map((service: CardProps) => (
                        <Card
                            key={service.name}
                            {...service}
                        />
                    ))}
                </div>
            </div>

            <hr />

            <div>
                <div className="text-2xl font-bold text-gray-800 mt-3">
                    Existing Connections
                </div>
                <div className="mt-5">
                    <SearchBar value={search} onChange={setSearch} />
                </div>

                <div className="mt-5 border rounded-md shadow-sm overflow-hidden">
                    <Table data={paginatedData} />

                    <div className="border-t bg-gray-50 mb-4">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    </div>
                </div>
            </div>
        </div >
    </>
}

export default IntegrationPage;