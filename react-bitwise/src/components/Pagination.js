export const ExtendedPagination = ({pageCount, getMoviesByPage, currentPage}) => {
    const restrictedValues = [1, 2, pageCount-2, pageCount-1, pageCount];
    const PaginationButton = ({ page }) => (
        <button
            disabled={page === currentPage}
            onClick={() => getMoviesByPage(page)}
        >{ `${page}` }</button>
    );
    const renderButtonsConditionally = (condition) => (
        condition
            ? (
                <>
                    <PaginationButton page={currentPage + 1} />
                    <PaginationButton page={currentPage + 2 } />
                    <PaginationButton page={currentPage + 3 } />
                </>
            )
            : null
    )
    return (
        <div>
            <div>
                <button
                    onClick={() => getMoviesByPage(currentPage - 1)}
                    disabled={currentPage  === 1}>
                    Back
                </button>
                <span>Page {currentPage}</span>
                <button
                    onClick={() => getMoviesByPage(currentPage + 1)}
                    disabled={currentPage === pageCount}>
                    Forward
                </button>
            </div>
            <div>
                <PaginationButton page={1}/>
                <PaginationButton page={2}/>
                <PaginationButton page={3}/>
                { currentPage > 4 && <span>...</span> }
                {
                    renderButtonsConditionally(!restrictedValues.includes(currentPage))
                }
                { currentPage !== pageCount-3 && <span>...</span> }
                <PaginationButton page={pageCount-2}/>
                <PaginationButton page={pageCount-1}/>
                <PaginationButton page={pageCount}/>
            </div>
        </div>
    );
};