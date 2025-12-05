import React from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxVisible = 5;

        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, 5, "...", totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(
                    1,
                    "...",
                    currentPage - 1,
                    currentPage,
                    currentPage + 1,
                    "...",
                    totalPages
                );
            }
        }
        return pages;
    };

    return (
        <div className="flex items-center justify-center gap-2 mt-4">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded text-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
            >
                ← Previous
            </button>

            {getPageNumbers().map((page, idx) =>
                page === "..." ? (
                    <span key={idx} className="px-2 text-gray-500">
                        ...
                    </span>
                ) : (
                    <button
                        key={idx}
                        onClick={() => onPageChange(page as number)}
                        className={`px-3 py-1  rounded text-sm cursor-pointer ${currentPage === page
                                ? "bg-gray-300 text-black"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                    >
                        {page}
                    </button>
                )
            )}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded text-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
            >
                Next →
            </button>
        </div>
    );
};

export default Pagination;
