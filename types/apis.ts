    export interface Api {
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

    export interface ApiResponse {
    status: string;
    totalResults: number;
    articles: Api[];
    }
