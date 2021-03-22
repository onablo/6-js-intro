/*
Duota kietojo disko duomenu struktura (folder > file) ir reikia suskaiciuoti, kiek vietos uzima visi failai.

Folder uzima 0 vietos.
*/
function storage(folder) { 
    let totalSize = 0;
    console.log(folder);
    for ( let i = 0; i < folder.content.length; i++) {
        const child = folder.content[i];
        console.log(child);

        if( child.type === 'file') {
        totalSize += child.size
        } else if ( child.type ==='Folder') {
        totalSize += storage(child)
        }
    }

    return totalSize;
}

const pc = {
    name: 'C', 
    type: 'folder',
    content: [
        {
            name: 'Programs Files',
            type: 'folder',
            content: [
                {
                    name: 'Android',
                    type: 'folder',
                    content: []   
                },
                { 
                    name: 'Gimp 2',
                    type: 'folder',
                    content: [

                        {
                            name: 'dbghelp.dll',
                            type: 'file',
                            size: 1497,
                            sizeUnits: 'kb'
                        },
                        { 
                            name: 'gimp-1.10.exe',
                            type: 'file',
                            size: 9138,
                            sizeUnits: 'kb'
                        }
                    ]
                },
            ]
        },
        { 
            name: 'Windows',
            type: 'folder',
            content: [
                { 
                    name: 'DiagTrack',
                    type: 'folder',
                    content: [
                        { 
                            name: 'analyticsevents.dat',
                            type: 'file',
                            size: 2,
                            sizeUnits: 'kb'  
                        },
                        {  
                            name: 'utc.allow.diffbase',
                            type: 'file',
                            size: 468,
                            sizeUnits: 'kb' 
                        }
                    ]
                }
            ]
        },
        {        
            name: 'msdia80.dll',
            type: 'file',
            size: 884,
            sizeUnits: 'kb'
        }
    ]
}



const totalKBs = storage(pc);
console.log('Used space: ', totalKBs, 'KB');