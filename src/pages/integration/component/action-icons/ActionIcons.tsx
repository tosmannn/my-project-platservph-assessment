import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

interface ActionIconsProps {
    onEdit?: () => void;
    onDelete?: () => void;
}

const ActionIcons: React.FC<ActionIconsProps> = ({ onEdit, onDelete }) => {
    return (
        <div className="flex justify-center gap-2">
            <button
                onClick={onEdit}
                className="p-1 rounded bg-white hover:bg-gray-100 cursor-pointer"
                aria-label="Edit"
            >
                <FontAwesomeIcon
                    icon={faPen}
                    className="w-4 h-4 text-gray-500 hover:text-gray-700"
                />
            </button>

            <button
                onClick={onDelete}
                className="p-1 rounded bg-red-100 hover:bg-red-200 cursor-pointer"
                aria-label="Delete"
            >
                <FontAwesomeIcon
                    icon={faTrash}
                    className="w-4 h-4 text-red-500 hover:text-red-700"
                />
            </button>
        </div>
    );
};

export default ActionIcons;
