

import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// cn is a function that takes any number of arguments and returns a string of class names

// The clsx function is used to merge the class names into a single string
export function cn(...inputs) {
    // Combine class names using clsx and then merge them using twMerge

    return twMerge(clsx(inputs));
}
