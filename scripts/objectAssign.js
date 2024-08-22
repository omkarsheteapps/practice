function objectAssign(target, ...sources) {
    if(target == null || target === undefined){
      throw new Error('Target cannot be null or undefined')
    }
  
    if(typeof target !== 'object'){
      target = Object(target)
    }
  
    sources.forEach(source => {
      if(source !== null && source !== undefined){
        Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))
      }
    })
  
    return target
  
  }

// Merging properties safely:
// By using Object.defineProperties, you ensure that the properties from source are added to target along with their descriptors. This is safer and more accurate than simply copying properties using a loop or Object.assign, as it preserves properties' metadata (like getters, setters, and other attributes).
// Preserving property attributes:
// If source objects have properties with getters, setters, or non-enumerable properties, using Object.getOwnPropertyDescriptors ensures that these characteristics are preserved when merging them into target.
// Avoiding null/undefined sources:
// The if(source !== null && source !== undefined) check is to avoid errors when attempting to get descriptors from null or undefined, which would otherwise throw an error.

