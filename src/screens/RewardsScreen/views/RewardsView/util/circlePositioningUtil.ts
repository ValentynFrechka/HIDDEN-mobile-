import { Position } from "../types/Position";
import { Reward } from "../types/Reward";

export const calculatePositions = (rewards: Reward[], minDistance: number, centerX: number, centerY: number) => {
    const positions: Position[] = [];
  
    rewards.forEach((reward, index) => {
        let angle = 0;
        let radius = 0;
  
        while (true) {
            const x = centerX + radius * Math.cos(angle) - reward.size / 2;
            const y = centerY + radius * Math.sin(angle) - reward.size / 2;
    
            const isValid = positions.every(
                (pos) =>
                    Math.sqrt((x - pos.x) ** 2 + (y - pos.y) ** 2) >=
                    (reward.size + pos.size) / 2 + minDistance
            );
    
            if (isValid) {
                positions.push({ x, y, size: reward.size });
                break;
            }
    
            angle += Math.PI / 18;
            if (angle >= 2 * Math.PI) {
                angle = 0;
                radius += minDistance;
            }
        }
    });

    const minXPos = positions.reduce((min, curr) =>
        curr.x - curr.size < min.x - min.size ? curr : min
    );
    const minYPos = positions.reduce((min, curr) =>
        curr.y - curr.size < min.y - min.size ? curr : min
    );
    const maxXPos = positions.reduce((max, curr) =>
        curr.x + curr.size > max.x + max.size ? curr : max
    );
    const maxYPos = positions.reduce((max, curr) =>
        curr.y + curr.size > max.y + max.size ? curr : max
    );

    let newScreenWidth = (Math.abs(maxXPos.x) + maxXPos.size) - (Math.abs(minXPos.x) + minXPos.size) + 100;
    let newScreenHeight = (Math.abs(maxYPos.y) + maxYPos.size) - (Math.abs(minYPos.y) + minYPos.size) + 100;
  
    return {positions, width: newScreenWidth, height: newScreenHeight};
};