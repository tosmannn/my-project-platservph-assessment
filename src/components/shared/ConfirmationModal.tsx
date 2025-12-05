import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

type ActionType = "delete" | "edit";

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    connectionName: string;
    integrationName: string;
    actionType: ActionType;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    connectionName,
    integrationName,
    actionType,
}) => {
    if (!isOpen) return null;

    const isDelete = actionType === "delete";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10">
            <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <FontAwesomeIcon
                        icon={isDelete ? faCircleXmark : faTriangleExclamation}
                        className={`w-6 h-6 ${isDelete ? "text-red-500" : "text-yellow-500"}`}
                    />

                </div>
                <h2 className="text-lg font-semibold text-gray-800">
                    {isDelete
                        ? `Remove “${connectionName}” Connection?`
                        : `Change to Existing Connection`}
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                    {isDelete
                        ? `Are you sure you want to remove ${integrationName} “${connectionName}” connection?`
                        : `Changes may disrupt functionality and impact data flow. Are you sure you want to make changes to ${integrationName} “${connectionName}” connection?`}
                </p>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={onClose}
                        className="w-24 px-4 py-2 text-sm rounded border border-gray-300 text-gray-700 hover:bg-gray-100"
                    >
                        Undo
                    </button>
                    <button
                        onClick={onConfirm}
                        className={`w-32 px-4 py-2 text-sm rounded ${isDelete
                            ? "bg-red-600 text-white hover:bg-red-700"
                            : "bg-yellow-500 text-white hover:bg-yellow-600"
                            }`}
                    >
                        {isDelete ? "Remove" : "Save Changes"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
