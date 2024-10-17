
function minMovesToTarget(X, Y, blocked) {
    
    const blockedSet = new Set(blocked.map(coord => coord.join(',')));

    
    const directions = [
        [0, 1],   // North
        [0, -1],  // South
        [1, 0],   // East
        [-1, 0]   // West
    ];

    // Initialize BFS queue with starting point (0, 0) and 0 moves
    const queue = [[0, 0, 0]];
    
    // Set to track visited positions
    const visited = new Set(['0,0']);

    while (queue.length > 0) {
        const [x, y, moves] = queue.shift(); // Dequeue the first point

        // Check if the target (X, Y) is reached
        if (x === X && y === Y) {
            return moves;
        }

        // Explore all four possible directions
        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            const newCoord = `${newX},${newY}`;

            // Skip if the new position is blocked or already visited
            if (!blockedSet.has(newCoord) && !visited.has(newCoord)) {
                visited.add(newCoord);  // Mark as visited
                queue.push([newX, newY, moves + 1]); 
            }
        }
    }

   
    return -1;
}

//Just for testing
const X = 3;
const Y = 3;
const blocked = [[1, 0], [2, 2], [1, 2]];

const result = minMovesToTarget(X, Y, blocked);
console.log(result); 
