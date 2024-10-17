# drone-pathfinder-js

Welcome to the Drone Pathfinding Challenge repository! This project is inspired by real-world drone delivery systems, specifically focusing on efficient navigation in a grid-like city with blocked intersections. 

## Problem Description

We are part of the MERN Class Drone Academy, a company specializing in drone deliveries across a city laid out as a rectangular grid of streets. Each intersection represents a house. Our drones always begin at the origin point (0, 0) and can move in four directions:

North (up)  <br>
South (down) <br>
East (right)  <br>
West (left)  <br>

However, there are obstacles in the city: due to construction and traffic issues, certain intersections are blocked, and drones cannot pass through them.

## Objective

The challenge is to develop a JavaScript solution that computes the minimum number of moves the drone needs to reach a target house located at coordinates `(X, Y)` while avoiding blocked intersections. If it's impossible to reach the destination due to blockages, the function should return `-1`.

## Input and Output

**Input:**
- Two integers `X` and `Y` representing the destination coordinates.
- An array of blocked intersections `blocked`, where each element is a pair `[xi, yi]` of blocked coordinates.

**Output:**
- The minimum number of moves required to reach the target house.
- If the destination is unreachable, return `-1`.



## Guidelines for Contributing to the Project

### How to Contribute

1. **Fork this repository** and clone it to your local machine.
2. Implement your solution in `index.js`.
3. Raise **issues** for any edge cases or improvements you identify.
4. Submit a **pull request** with your solution and include tests for edge cases.
5. Review others' PRs and suggest improvements.

### Issues and Pull Requests

- If you find a bug or want to suggest an improvement, please raise an issue.
- Pull requests are welcome! Please make sure to include tests and explain your solution clearly in your PR.

### Getting Started

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/drone-pathfinding-challenge.git
cd drone-pathfinding-challenge
