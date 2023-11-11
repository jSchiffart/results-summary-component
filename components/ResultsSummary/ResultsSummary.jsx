import ResultList from "../ResultList/ResultList.jsx";
export default function ResultsSummary() {
    return (
        <main className="main-card">
            <section className="result-card">
                <h1>Your result</h1>
                <div className="result">
                    <h2>76</h2>
                    <h3>of 100</h3>
                </div>
                <h2>Great</h2>
                <p>You scored higher than 65% of the people who have taken these tests.</p>
            </section>
            <section className="result-summary">
                <h1>Summary</h1>
                <ResultList />
                <button>Continue</button>
            </section>

        </main>
    );
}
