import { E2EElement, E2EPage } from '../../stencil.core/testing';
import { ElementHandle } from 'puppeteer';
export declare function generateE2EUrl(component: string, type: string, rtl?: boolean): string;
/**
 * Gets the value of a property on an element
 */
export declare const getElementProperty: (element: any, property: string) => Promise<string>;
/**
 * Listens for an event and fires a callback
 * @param page - The Puppeteer `page` object
 * @param eventType: string - The event name to listen for. ex: `ionPickerColChange`
 * @param element: HTMLElement - An HTML element
 * @param callbackName: string - The name of the callback function to
 * call when the event is fired.
 *
 * Note: The callback function must be added using
 * page.exposeFunction prior to calling this function.
 */
export declare const listenForEvent: (page: any, eventType: string, element: any, callbackName: string) => Promise<any>;
/**
 * Drags an element by (x, y) pixels
 * @param element: HTMLElement - The HTML Element to drag
 * @param page - The Puppeteer 'page' object
 * @param x: number - Amount to drag `element` by on the x-axis
 * @param y: number - Amount to drag `element` by on the y-axis
 */
export declare const dragElementBy: (element: any, page: any, x?: number, y?: number) => Promise<void>;
/**
 * Wait for a function to return true
 * This method runs in the context of the
 * test whereas page.waitForFunction runs in
 * the context of the browser
 * @param fn - The function to run
 * @param params: any - Any parameters that the fn needs
 * @param interval: number - Interval to run setInterval on
 */
export declare const waitForFunctionTestContext: (fn: any, params: any, interval?: number) => Promise<any>;
/**
 * Pierce through shadow roots
 * https://github.com/GoogleChrome/puppeteer/issues/858#issuecomment-359763824
 */
export declare function queryDeep(page: E2EPage, ...selectors: string[]): Promise<ElementHandle>;
/**
 * Given an element and optional selector, use the selector if
 * it exists or get the node name of that element if not. Combine
 * with the current mode to verify the correct classes exist.
 *
 * @param el: E2EElement - The element to verify classes on
 * @param selector: string - A selector to use instead of the element tag name
 *
 * Examples:
 * await checkComponentModeClasses(await page.find('ion-card-content'))
 * => expect(el).toHaveClass(`card-content-{mode}`);
 *
 * await checkComponentModeClasses(await page.find('ion-card-content'), 'some-class')
 * => expect(el).toHaveClass(`some-class-{mode}`);
 */
export declare function checkComponentModeClasses(el: E2EElement, selector?: string): Promise<void>;
/**
 * Given an element, get the mode and verify it exists as a class
 *
 * @param el: E2EElement - the element to verify the mode class on
 */
export declare function checkModeClasses(el: E2EElement): Promise<void>;
