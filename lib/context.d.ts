import React from 'react';
interface Props {
    readonly providers: {
        [key: string]: any;
    };
}
export declare const State: React.Context<{
    [key: string]: any;
}>;
export declare const ProvideProviders: React.FC<Props>;
export {};
