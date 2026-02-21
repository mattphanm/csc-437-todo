import { useRef } from "react";

export function Modal({ headerLabel, isOpen, onCloseRequested, children }) {
    const dialogRef = useRef(null);

    function handleOverlayClick(event) {
        if (dialogRef.current && !dialogRef.current.contains(event.target)) {
            if (typeof onCloseRequested === "function") {
                onCloseRequested();
            }
        }
    }

    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            onClick={handleOverlayClick}
        >
            <div
                ref={dialogRef}
                className="w-fit rounded-lg bg-white p-4 shadow-lg"
            >
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                    <h2 className="text-lg font-semibold">{headerLabel}</h2>
                    <button
                        className="text-gray-500 hover:text-gray-700"
                        aria-label="Close"
                        onClick={onCloseRequested}
                    >
                        X
                    </button>
                </div>
                <div className="pt-3">{children}</div>
            </div>
        </div>
    );
}
