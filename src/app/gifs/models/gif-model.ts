export interface gifModel {
    data : Gif[],
    meta: {
        status : string,
        msg: string,
        response_id: string
    },
    pagination: {
        total_count: number,
        count : number,
        offset: number
    }
}


export interface Gif {
    title: string,
    images: {
        original : {
            url : string
        }
    }
    
}