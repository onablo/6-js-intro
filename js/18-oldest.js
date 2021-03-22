/*
- rekursija? rasti didziausia skaiciu bet kokio gilumo sarase
    - kas vyriausias gimineje?
    - kas turi daugiausia vaiku gimineje

    
Gimines medyje reikia rasti kas buvo/yra vyriausias?
*/

function oldest (asmuo) {
    let biggestAge = asmuo.age;
    let childAge = 0;

        if (asmuo.children) { 
            for (let i = 0; i < asmuo.children.length; i++) {
            const child = asmuo.children[i];
            
            childAge = oldest(child);

            if (childAge > biggestAge) {
                biggestAge = childAge;
            }
        }    
    }    

    return biggestAge;
}



const gimine1 = {
    name: 'Petras',
    age: 90,
    children: [
        {
            name: 'Maryte',
            age:45,
            children: [ 
                { 
                    name: 'Onute',
                    age: 70
                },
                {
                    name: 'Elvyra',
                    age: 66
                },
            ]
        },
        {
            name: 'Jonas',
            age: 43,
            children: [
                {
                    name : 'Alexas',
                    age: 100,
                    children: [
                        { 
                            name: 'Laimute',
                            age: 25,
                        },
                        { 
                            name: 'Tomas',
                            age: 32,        
                        }
                    ]
                },    
                {         
                    name : 'Gabriele',
                    age: 27
                },
            ]
        },
    ]
}
const vyriausias = oldest(gimine1);
console.log(vyriausias);
 
//const vyriausiasAsmuo = oldestWithName(gimine1);




/*function oldestWithName(asmuo) {
    let oldestName = asmuo.name;
    let biggestAge = asmuo.age;

    if (asmuo.children) {
        for (let i = 0; i < asmuo.children.length; i++);
        const child = asmuo.children[i];

        const oldestChild = oldestWithName(child);
        
        if (oldestChild.age > biggestAge) {
        biggestAge = oldestChild.age;
        oldestName = oldestChild.name;
       }
    */