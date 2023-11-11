import data from '../../public/data.json';
export default function ResultList() {
    const resultList = data.map(score =>
        <ResultListNode
            key={crypto.randomUUID()}
            category={score.category}
            score={score.score}
            icon={score.icon}
        />);
    return (
        <div>{resultList}</div>
    );
}


function ResultListNode({ category, score, icon }) {
    return (
        <div className="result-list-node">
            <img src={icon} />
            <h1>{category}</h1>
            <h2>{score}</h2>
            <h3> / 100</h3>
        </div>
    );
}