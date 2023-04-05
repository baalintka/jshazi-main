
export function rendezesSzamszerint(OBJEKTUMLISTA,kulcs){
    OBJEKTUMLISTA.sort(function(a,b){
        return a[kulcs]-b[kulcs];
    })
}

export function rendezesSzovegszerint(OBJEKTUMLISTA,kulcs){
    OBJEKTUMLISTA.sort(function(a,b){
        if ( a[kulcs] > b[kulcs]){
            return +1;
        }else{
            return -1;
        }

    })
}

export function objektumrendezes(OBJEKTUMLISTA,kulcs){
    if (typeof kulcs=="number") {
        rendezesSzamszerint(OBJEKTUMLISTA,kulcs);
    }else{
        rendezesSzovegszerint(OBJEKTUMLISTA,kulcs);

    }
}