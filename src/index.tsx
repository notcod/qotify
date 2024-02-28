import { $, component$, useOnWindow, useSignal, useStyles$ } from "@builder.io/qwik";
import { qwikify$ } from "@builder.io/qwik-react";
import { ToastContainer as ToastContainerReact } from "react-toastify";
export { useToastContainer, useToast, cssTransition, collapseToast, Bounce, Flip, Slide, Zoom, Icons, toast } from "react-toastify";
export type { TypeOptions, IconProps, CloseButton, ToastPromiseParams, Theme, ToastPosition, ToastContentProps, ToastContent, ToastTransition, ToastClassName, ClearWaitingQueueParams, DraggableDirection, ToastOptions, UpdateOptions, ToastContainerProps, ToastTransitionProps, Id, ToastItem } from "react-toastify";

const ToastCon = qwikify$(ToastContainerReact, { clientOnly: true });

import styles from "react-toastify/dist/ReactToastify.min.css?inline";
export const QToastContainer = component$(() => {
    useStyles$(styles);
    const visible = useSignal<boolean>(false);
    useOnWindow(
        "DOMContentLoaded",
        $(() => (visible.value = true))
    );
    return visible.value && <ToastCon client:only={true} />;
});
