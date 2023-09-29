//Given a floor of dimensions 2 x W and tiles of dimensions 2 x 1, the task is to find the number of ways the floor
// can be tiled. A tile can either be placed horizontally i.e as a 1 x 2 tile or vertically i.e as 2 x 1 tile. Print the answer modulo 109+7.

Input:
W = 3
Output:
3
Explanation//We need 3 tiles to tile the board of size  2 x 3. 
//We can tile in following ways:
//1) Place all 3 tiles vertically. 
//2) Place first tile vertically.and remaining 2 tiles horizontally.
//3) Place first 2 tiles horizontally and remaining tiles vertically.

function numberOfWays(N) {
    const MOD = 1000000007;
    let dp = new Array(N + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= N; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
    }
    return dp[N];
}

 