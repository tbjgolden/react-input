/* Use this file to declare any custom file extensions for importing */
/* Use this folder to also add/extend a package d.ts file, if needed. */

/* CSS MODULES */
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.styl' {
  const classes: { [key: string]: string };
  export default classes;
}

/* CSS */
declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.less';
declare module '*.styl';

/* IMAGES */
declare module '*.svg' {
  const ref: string;
  export default ref;
}
declare module '*.bmp' {
  const ref: string;
  export default ref;
}
declare module '*.gif' {
  const ref: string;
  export default ref;
}
declare module '*.jpg' {
  const ref: string;
  export default ref;
}
declare module '*.jpeg' {
  const ref: string;
  export default ref;
}
declare module '*.png' {
  const ref: string;
  export default ref;
}

/* CUSTOM: ADD YOUR OWN HERE */
declare module 'react-imask' {
  import IMask from 'imask';

  //   /**
  //    * The props accepted by react-imask, based
  //    * on the implementation of imask, with  some additions
  //    */
  export type IMaskInputProps = {
    value?: number | string;
    unmask?: 'typed' | boolean;

    // events
    onAccept?: <T>(
      value: string,
      maskRef: IMask.InputMask<IMask.AnyMaskedOptions>,
      ...args: T[]
    ) => void;
    onComplete?: <T>(
      value: string,
      maskRef: IMask.InputMask<IMask.AnyMaskedOptions>,
      ...args: T[]
    ) => void;

    dispatch?: (
      value: string,
      masked: IMask.MaskedDynamic,
      flags: IMask.AppendFlags,
    ) => IMask.AnyMasked | null | undefined;
  } & IMask.AnyMaskedOptions;

  //   /**
  //    * A function that decorates a react component
  //    * with 'imask' props
  //    * @param Component Any React Component
  //    */
  export function IMaskMixin<T, D>(
    Component: React.ComponentType<{ inputRef?: React.Ref<D> } & T>,
  ): React.ComponentType<T & IMaskInputProps>;

  //   /**
  //    * A basic IMask React Input
  //    */
  export const IMaskInput: React.ComponentType<IMaskInputProps>;
}
