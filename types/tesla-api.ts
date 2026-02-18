    export interface TeslaApi {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null ;
    publishedAt: string | null;
    content: string | null;
    }

    export interface TeslaApiResponse {
    status: string;
    totalResults: number;
    articles: TeslaApi[];
    }
