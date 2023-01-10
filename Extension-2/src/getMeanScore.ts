export function getMeanScore(scores: Array<number>) : number {
    if (scores === undefined) throw new Error("scores is required");
    
    let meanScore: number = 0;
    
    scores.forEach(element => meanScore+=element);
    
    return parseFloat((meanScore /= scores.length).toFixed(2));
  }