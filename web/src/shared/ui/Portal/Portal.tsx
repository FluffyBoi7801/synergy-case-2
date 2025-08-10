import * as ReactDOM from "react-dom";
import { FC, PropsWithChildren } from "react";

export const Portal: FC<PropsWithChildren> = ({ children }) =>
  ReactDOM.createPortal(children, window.document.body);
