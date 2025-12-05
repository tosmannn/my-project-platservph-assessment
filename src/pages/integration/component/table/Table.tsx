import type { IntegrationRow } from "../../type";
import ActionIcons from "../action-icons/ActionIcons";
import ConfirmationModal from "../../../../components/shared/ConfirmationModal";
import { useState } from "react";

interface TableProps {
    data: IntegrationRow[];
}

const Table: React.FC<TableProps> = ({ data }) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [actionType, setActionType] = useState<"delete" | "edit">("delete");
    return (
        <>
            <div className="overflow-x-auto shadow-sm h-84 border-b-0">
                <table className="min-w-full text-sm text-left">
                    <thead className="bg-gray-100 text-gray-700 font-semibold">
                        <tr>
                            <th></th>
                            <th className="px-4 py-2">Integration</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Source</th>
                            <th className="px-4 py-2">Entity/Group</th>
                            <th className="px-4 py-2">Interval</th>
                            <th className="px-4 py-2">Connector URL</th>
                            <th className="px-4 py-2">Instructions</th>
                            <th className="px-4 py-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, idx) => (
                            <tr key={idx} className="border-t">
                                <td className="px-4 py-2"><img src={row.icon} className="w-5 h-5" /></td>
                                <td className="px-4 py-2">{row.integration}</td>
                                <td className="px-4 py-2">{row.name}</td>
                                <td className="px-4 py-2">{row.source}</td>
                                <td className="px-4 py-2">{row.entity}</td>
                                <td className="px-4 py-2">{row.interval}</td>
                                <td className="px-4 py-2 text-green-600 cursor-pointer">Copy to Clipboard</td>
                                <td className="px-4 py-2 text-blue-600 cursor-pointer">View</td>
                                <td className="px-4 py-2">
                                    <ActionIcons
                                        onEdit={() => {
                                            setActionType("edit");
                                            setModalOpen(true);
                                        }}
                                        onDelete={() => {
                                            setActionType("delete");
                                            setModalOpen(true);
                                        }}
                                    />
                                </td>
                                <ConfirmationModal
                                    isOpen={modalOpen}
                                    onClose={() => setModalOpen(false)}
                                    onConfirm={() => {
                                        setModalOpen(false);
                                    }}
                                    connectionName={row.name}
                                    integrationName={row.integration}
                                    actionType={actionType}
                                />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Table;
