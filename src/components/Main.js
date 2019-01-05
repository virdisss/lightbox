import React from 'react';

const Main = ({ children }) => {

    return (
        <div className="container">
            <div className="row">
                <div className="offset-md-2 col-md-8">
                    <h3 className="text-center my-3">Lightbox</h3>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Main;