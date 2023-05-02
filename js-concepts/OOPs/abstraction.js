function Circle(radius){
    this.radius = radius   // by using this it's just like public

    let defaultLocation = { x:0 , y:0 }   // local or private member

    // let computeOptimumLocation = function(factor) {    // local or private member
    //     // ...
    // }


    // this.getDefaultLocation = function() {
    //     return defaultLocation
    // }

    this.draw = function() {
        // computeOptimumLocation(0.1)
        
        console.log('draw')
    }

    Object.defineProperty(this, 'defaultLocation', {
        get : function() {
            return defaultLocation
        },
        set : function(value) {
            // validation can also perform 
            // if(!value.x || !value.y){
            //     throw new Error('Invalid location')
            // }

            defaultLocation = value
        }
    })
}

const circle = new Circle(10)

// circle.getDefaultLocation()
// OR
circle.defaultLocation = 1
console.log(circle.defaultLocation)
circle.draw()
