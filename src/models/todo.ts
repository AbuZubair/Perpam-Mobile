export interface pasienbaru {
    $key:string,
    name: string;
    jk:string;
    tl:string;
    myDate:number;
    ns:string;
    almt:string;
    sCity:{ id: number; name: string; }[];
    sDistrict:{ id: number; name: string; city_id: number; city_name: string; }[];
    sKlh:string;
    kp:number;
    no:number;
    agama:string;
}

export interface appoint{
    $key:string,
    name: string;
    myDate:number;
    almt:string;
    no:number;
    gr:string;
    o_n:string;
    spl:string;
    dr:string;
    tgl:number;
}


