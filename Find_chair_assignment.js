function findChairs(meetingRooms, neededChairs) {
    const chairs = [];
    let remainingChairs = neededChairs;

    for (const [occupants, totalChairs] of meetingRooms) {
        const occupiedChairs = occupants.length;
        const availableChairs = totalChairs - occupiedChairs;

        if (availableChairs >= remainingChairs) {
            chairs.push(remainingChairs);
            break;
        } else {
            chairs.push(availableChairs);
            remainingChairs -= availableChairs;
        }
    }

    return chairs;
}

// Example usage:
const meetingRooms = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]];
const needChairs = 4;
const spareChairs = findChairs(meetingRooms, needChairs);

console.log(spareChairs); // Output: [0, 1, 3]
