let target = {
    x: 10,
    y: 20
   }
   
   let handler = {
    get: (obj, prop) => 42
   }
   
   target = new Proxy(target, handler)
   console.log(typeof(target))