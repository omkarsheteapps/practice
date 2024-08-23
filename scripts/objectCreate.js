function myObjectCreate(proto, properties){
    if (proto === null || typeof proto !== "object") {
        throw new TypeError('Object prototype can be only null or object')
    }     

    const fn = new Function();
    fn.prototype = proto;
    return new fn();
}

const animal = {
    eats: true,
    walk() {
      console.log("Animal is walking"); 
    }
  };

  const rabbit = myObjectCreate(animal);

  console.log(rabbit); 
  console.log(rabbit.eats); 
  rabbit.walk(); 
