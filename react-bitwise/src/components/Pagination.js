import { useState } from 'react';

export const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div>
            {
                [...Array(50)].map((emptyArr, index) => {
                    return (
                        <button
                            key={`button-${index + 1}`}
                            disabled={index + 1 === currentPage}
                            onClick={() => setCurrentPage(index + 1)}
                        >{ `${index + 1}` }</button>
                    );
                })
            }
        </div>
    )
}