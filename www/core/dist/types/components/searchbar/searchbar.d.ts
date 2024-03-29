import '../../stencil.core';
import { ComponentInterface, EventEmitter } from '../../stencil.core';
import { Color, Config, Mode, SearchbarChangeEventDetail } from '../../interface';
export declare class Searchbar implements ComponentInterface {
    private nativeInput?;
    private isCancelVisible;
    private shouldAlignLeft;
    el: HTMLElement;
    config: Config;
    doc: Document;
    focused: boolean;
    noAnimate: boolean;
    /**
     * The color to use from your application's color palette.
     * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
     * For more information on colors, see [theming](/docs/theming/basics).
     */
    color?: Color;
    /**
     * The mode determines which platform styles to use.
     */
    mode: Mode;
    /**
     * If `true`, enable searchbar animation.
     */
    animated: boolean;
    /**
     * Set the input's autocomplete property.
     */
    autocomplete: 'on' | 'off';
    /**
     * Set the input's autocorrect property.
     */
    autocorrect: 'on' | 'off';
    /**
     * Set the cancel button icon. Only applies to `md` mode.
     */
    cancelButtonIcon: string;
    /**
     * Set the the cancel button text. Only applies to `ios` mode.
     */
    cancelButtonText: string;
    /**
     * Set the clear icon. Defaults to `"close-circle"` for `ios` and `"close"` for `md`.
     */
    clearIcon?: string;
    /**
     * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
     */
    debounce: number;
    protected debounceChanged(): void;
    /**
     * Set the input's placeholder.
     */
    placeholder: string;
    /**
     * The icon to use as the search icon.
     */
    searchIcon: string;
    /**
     * If `true`, show the cancel button.
     */
    showCancelButton: boolean;
    /**
     * If `true`, enable spellcheck on the input.
     */
    spellcheck: boolean;
    /**
     * Set the type of the input.
     */
    type: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url';
    /**
     * the value of the searchbar.
     */
    value?: string | null;
    /**
     * Emitted when a keyboard input ocurred.
     */
    ionInput: EventEmitter<KeyboardEvent>;
    /**
     * Emitted when the value has changed.
     */
    ionChange: EventEmitter<SearchbarChangeEventDetail>;
    /**
     * Emitted when the cancel button is clicked.
     */
    ionCancel: EventEmitter<void>;
    /**
     * Emitted when the clear input button is clicked.
     */
    ionClear: EventEmitter<void>;
    /**
     * Emitted when the input loses focus.
     */
    ionBlur: EventEmitter<void>;
    /**
     * Emitted when the input has focus.
     */
    ionFocus: EventEmitter<void>;
    protected valueChanged(): void;
    componentDidLoad(): void;
    /**
     * Sets focus on the specified `ion-searchbar`. Use this method instead of the global
     * `input.focus()`.
     */
    setFocus(): void;
    /**
     * Returns the native `<input>` element used under the hood.
     */
    getInputElement(): Promise<HTMLInputElement>;
    /**
     * Clears the input field and triggers the control change.
     */
    private onClearInput;
    /**
     * Clears the input field and tells the input to blur since
     * the clearInput function doesn't want the input to blur
     * then calls the custom cancel function if the user passed one in.
     */
    private onCancelSearchbar;
    /**
     * Update the Searchbar input value when the input changes
     */
    private onInput;
    /**
     * Sets the Searchbar to not focused and checks if it should align left
     * based on whether there is a value in the searchbar or not.
     */
    private onBlur;
    /**
     * Sets the Searchbar to focused and active on input focus.
     */
    private onFocus;
    /**
     * Positions the input search icon, placeholder, and the cancel button
     * based on the input value and if it is focused. (ios only)
     */
    private positionElements;
    /**
     * Positions the input placeholder
     */
    private positionPlaceholder;
    /**
     * Show the iOS Cancel button on focus, hide it offscreen otherwise
     */
    private positionCancelButton;
    private getValue;
    hostData(): {
        class: {
            'searchbar-animated': boolean;
            'searchbar-no-animate': boolean;
            'searchbar-has-value': boolean;
            'searchbar-left-aligned': boolean;
            'searchbar-has-focus': boolean;
        } | {
            [x: string]: boolean;
            'searchbar-animated': boolean;
            'searchbar-no-animate': boolean;
            'searchbar-has-value': boolean;
            'searchbar-left-aligned': boolean;
            'searchbar-has-focus': boolean;
        };
    };
    render(): JSX.Element[];
}
