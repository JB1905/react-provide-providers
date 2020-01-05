import React, { ReactChild } from 'react';
interface Props {
    readonly providers: {
        [key: string]: any;
    };
    readonly children: ReactChild | ReactChild[];
}
export declare const State: React.Context<{
    [key: string]: any;
}>;
export declare const ProvideProviders: ({ providers, children }: Props) => JSX.Element;
export {};
