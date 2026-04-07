//given two arrays men[] and women[], each of length n, where:

//men[i] represents the preference list of the i-th man, ranking all women in order of preference.
//women[i] represents the preference list of the i-th woman, ranking all men in order of preference.
//The task is to form n pairs (marriages) such that:

//Each man is matched with exactly one woman, and each woman is matched with exactly one man.
//The matching is stable, meaning there is no pair (man, woman) who both prefer each other over their current partners.
//It is guaranteed that a stable matching always exists. Return the stable matching from the men’s perspective, i.e., 
// the one where men are considered for the final output.
//Return an array result[] of size n, where result[i] denotes the index (0-based) of the woman matched with the i-th man.

Examples

//Input: n = 2, men = [[0, 1], [0, 1], women[] = [[0, 1], [0, 1]]
//Output: [0, 1]
//Explanation:
//Man 0 is married to Woman 0 (his first choice and her first choice).
//Man 1 is married to Woman 1 (his second choice and her second choice).
//Input: n = 3, men[] = [[0, 1, 2], [0, 1, 2], [0, 1, 2]], women[] = [[2, 1, 0], [2, 1, 0], [2, 1, 0]]
//Output: [2, 1, 0]
//Explanation:
//Man 0 is married to Woman 2 (his third choice and her third choice).
//Man 1 is married to Woman 1 (his second choice and her second choice).
//Man 2 is married to Woman 0 (his first choice and her first choice).
//Constraints: 
//2 ≤ n ≤ 103
//0 ≤ men[i] ≤ n - 1
//0 ≤ women[i] ≤ n - 1

class Solution {
    stableMarriage(men, women) {
        let n = men.length;

        // Create ranking for women
        let womanRank = Array.from({ length: n }, () => Array(n));

        for (let w = 0; w < n; w++) {
            for (let rank = 0; rank < n; rank++) {
                womanRank[w][women[w][rank]] = rank;
            }
        }

        let wife = Array(n).fill(-1);
        let husband = Array(n).fill(-1);
        let nextProposal = Array(n).fill(0);

        let freeMen = [];
        for (let m = 0; m < n; m++) {
            freeMen.push(m);
        }

        while (freeMen.length > 0) {
            let m = freeMen.shift();

            let w = men[m][nextProposal[m]];
            nextProposal[m]++;

            if (husband[w] === -1) {
                husband[w] = m;
                wife[m] = w;
            } else {
                let currentMan = husband[w];

                if (womanRank[w][m] < womanRank[w][currentMan]) {
                    husband[w] = m;
                    wife[m] = w;
                    wife[currentMan] = -1;
                    freeMen.push(currentMan);
                } else {
                    freeMen.push(m);
                }
            }
        }

        return wife;
    }
}