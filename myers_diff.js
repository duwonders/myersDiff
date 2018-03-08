function diff(set1, set2) {
  const max_y = set1.length - 1;
  const max_x = set2.length - 1;
  const max_steps = set1.length + set2.length;
  let stepPoints = [[0, 0]];
  function goSteps() {
    let nextStpePoints = [];
    stepPoints.map(point => {
      let res = step(point);
      if(typeof(res) === "object"){
        res.forEach(i => {
          nextStpePoints.push(i);
        });
      } 
      else {
        
      }
    })
    stepPoints = nextStpePoints;
    return goSteps();
  }
  function step(point) {
    
  }
}