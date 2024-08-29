import TransactionBanner from "../components/TransactionBanner";

function Transaction () {
    return (
        <main className="main bg-dark main-transaction">
            <TransactionBanner />
            <section className="section-table">
                <div className="table-content">
                    <div className="first-table-row">
                        <p>Date</p>
                        <p>Description</p>
                    </div>
                    <div className="second-table-row">
                        <p>Amount</p>
                        <p>Balance</p>
                    </div>
                </div>

            </section>
        </main>
    )
};

export default Transaction;