/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { ToastContainer as rContainer, toast as rToast } from "react-toastify";

export const ToastContainer = qwikify$(rContainer, { clientOnly: true });
export const toast = rToast;
