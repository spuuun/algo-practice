// hackerrank provides no performance benchmarks

function cavityMap(grid: string[]): string[] {
    let matrix = grid.map(e => e.split(''));
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (i !== 0 && i !== grid.length -1 && j !== 0 && j !== grid.length -1) {
                if (
                    grid[i][j] > grid[i][j - 1] &&
                    grid[i][j] > grid[i][j + 1] &&
                    grid[i][j] > grid[i + 1][j] &&
                    grid[i][j] > grid[i -1][j]
                    ) {
                        matrix[i][j] = 'X';
                }
            }
        }
    }
    return matrix.map(arr => arr.reduce((a, b) => a + b));
}
