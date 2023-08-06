import React from "react";

const ClosingLetter = () => {

    return (
        <>
            <div className="card border border-3 jp-card-bg-light-beige border-dark rounded-4
                            m-auto col-12 col-lg-10 col-xl-8">
                <div className="card-header text-center fs-4">
                    Farewell
                </div>
                <div className="card-body">
                    <h5 className="card-title fs-5">
                        To our valued customers:
                    </h5>
                    <br/>
                    <p className="card-text fs-5">
                        We are writing this to let you know that we are retiring and have sold
                        our business. Jade Palace’s last day will be on Sunday, July 30, 2023.
                    </p>
                    <p className="card-text fs-5">
                        It is truly bittersweet for us to make this announcement.
                        Throughout these last 30 years, we have gotten to know so many of you within
                        the community, and we cannot express how grateful we are for all of you to
                        have been a part of this journey with us.
                    </p>
                    <p className="card-text fs-5">
                        We appreciate all of your support and would like to thank you for dining
                        with us. We are sad to say goodbye, and we will miss seeing each and
                        every one of you.
                    </p>
                    <p className="card-text fs-5">
                        A new owner will be taking over soon under a new name, and we very much
                        hope you will support them.
                    </p>
                </div>
                {/*<div className="card-footer text-body-secondary">*/}
                {/*    7/30/23*/}
                {/*</div>*/}
            </div>
        </>
    );
};

export default ClosingLetter;