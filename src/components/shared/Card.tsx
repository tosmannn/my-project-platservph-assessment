import type { CardProps } from "../../pages/integration/type";

const Card = ({ name, description, icon }: CardProps) => {
    return (
        <div className="border rounded-lg p-4 shadow-sm bg-gray-100 hover:shadow-md transition h-full">
            <div className="flex items-center gap-3 mb-2">
                {icon && (
                    <div className="w-6 h-6">
                        <img src={icon} alt={name} className="w-7 h-7"/>
                    </div>
                )}
                <h4 className="text-md font-semibold text-black">{name}</h4>
            </div>
            <p className="text-sm text-black mb-4">{description}</p>
            <button className="text-sm px-3 py-1 bg-black text-white rounded hover:bg-gray-700 transition cursor">
                Add Connection
            </button>
        </div>
    )
}

export default Card;