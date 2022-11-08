function detectCollision(objects, point) {

    let {x, y} = point;

    return objects.filter(value => x >= value.x && x <= value.x + value.width && y >= value.y && y <= value.y + value.height);
    
  
  }
  
  const myObjects = [
  
  
    {x:  10, y: 20, width: 30, height: 30},
  
  
    {x: -40, y: 20, width: 30, height: 30},
  
  
    {x:   0, y:  0, width: 10, height:  5}
  
  
  ]
  
  console.log(detectCollision(myObjects, {x: 4, y: 2}))