# Explanation

1. We loop/iterate through each meeting room and calculate the number of occupied chairs (occupiedChairs)
2. We do so by counting the ‘X’ characters in the occupants string.
3. Then, to find the available chairs (availableChairs), we subtract the occupied chairs from the total chairs.
4. If there are enough available chairs to meet the remaining need, we add the remaining need to the chairs array and break out of the loop.
5. Else, we add the available chairs to the chairs array and update the remaining need.
6. Finally, we return the chairs(result) array.
