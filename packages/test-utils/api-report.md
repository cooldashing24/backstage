## API Report File for "@backstage/test-utils"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ComponentType } from 'react';
import { ErrorApi } from '@backstage/core-api';
import { ErrorContext } from '@backstage/core-api';
import { ExternalRouteRef } from '@backstage/core-api';
import { Observable } from '@backstage/core-api';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { RenderResult } from '@testing-library/react';
import { RouteRef } from '@backstage/core-api';
import { StorageApi } from '@backstage/core-api';
import { StorageValueChange } from '@backstage/core-api';

// @public (undocumented)
export function mockBreakpoint(initialBreakpoint?: Breakpoint): {
    set(breakpoint: Breakpoint): void;
    remove(): void;
};

// @public (undocumented)
export class MockErrorApi implements ErrorApi {
    constructor(options?: Options);
    // (undocumented)
    error$(): Observable<{
        error: Error;
        context?: ErrorContext;
    }>;
    // (undocumented)
    getErrors(): ErrorWithContext[];
    // (undocumented)
    post(error: Error, context?: ErrorContext): void;
    // (undocumented)
    waitForError(pattern: RegExp, timeoutMs?: number): Promise<ErrorWithContext>;
}

// @public (undocumented)
export class MockStorageApi implements StorageApi {
    // (undocumented)
    static create(data?: MockStorageBucket): MockStorageApi;
    // (undocumented)
    forBucket(name: string): StorageApi;
    // (undocumented)
    get<T>(key: string): T | undefined;
    // (undocumented)
    observe$<T>(key: string): Observable<StorageValueChange<T>>;
    // (undocumented)
    remove(key: string): Promise<void>;
    // (undocumented)
    set<T>(key: string, data: T): Promise<void>;
    }

// @public (undocumented)
export type MockStorageBucket = {
    [key: string]: any;
};

// @public (undocumented)
export const msw: {
    setupDefaultHandlers: (worker: {
        listen: (t: any) => void;
        close: () => void;
        resetHandlers: () => void;
    }) => void;
};

// @public
export function renderInTestApp(Component: ComponentType | ReactNode, options?: TestAppOptions): Promise<RenderResult>;

// @public
export function wrapInTestApp(Component: ComponentType | ReactNode, options?: TestAppOptions): ReactElement;


export * from "@backstage/test-utils-core";

// (No @packageDocumentation comment for this package)

```