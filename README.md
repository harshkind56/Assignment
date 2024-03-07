#Explanation

1. We loop/iterate through each meeting room.
2. For each room, we calculate the number of occupied chairs (occupiedChairs) by counting the ‘X’ characters in the occupants string.
3. Then, we find the available chairs (availableChairs) by subtracting the occupied chairs from the total chairs.
4. If there are enough available chairs to meet the remaining need, we add the remaining need to the result array and break out of the loop.
5. Otherwise, we add the available chairs to the result array and update the remaining need.
6. Finally, we return the chairs(result) array.
