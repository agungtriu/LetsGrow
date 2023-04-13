import React from 'react'

const Information = () => {
    return (
        <>
            <div className='text-center bg-dark text-white bg-opacity-75'>
                <h5>Information</h5>
            </div>
            <div className="card">
                <div className="card-header">
                    Quote
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>A well-known quote, contained in a blockquote element.</p>
                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                </div>
            </div>
        </>

    )
}

export default Information