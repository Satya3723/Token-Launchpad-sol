import { useState } from "react";

export default function PoSConsensus() {
    const [validators, setValidators] = useState([
        { id: "Validator_1", stake: 500 },
        { id: "Validator_2", stake: 1000 },
        { id: "Validator_3", stake: 2000 }
    ]);
    const [leader, setLeader] = useState<string | null>(null);

    const selectLeader = () => {
        let totalStake = validators.reduce((acc, v) => acc + v.stake, 0);
        let rand = Math.random() * totalStake;
        let cumulative = 0;
        
        for (let validator of validators) {
            cumulative += validator.stake;
            if (rand <= cumulative) {
                setLeader(validator.id);
                break;
            }
        }
    };

    return (
        <div className="p-4 text-center">
            <h1 className="text-xl font-bold">Proof of Stake Consensus</h1>
            <p className="mt-2">Validators:</p>
            <ul className="list-disc">
                {validators.map((v, index) => (
                    <li key={index}>{v.id} - Stake: {v.stake}</li>
                ))}
            </ul>
            <button onClick={selectLeader} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Select Leader</button>
            {leader && <p className="mt-4 font-bold">Selected Leader: {leader}</p>}
        </div>
    );
}
